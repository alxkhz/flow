import { serve } from "https://deno.land/std@0.184.0/http/server.ts";
import { isFinite } from "https://cdn.skypack.dev/lodash";

import { corsHeaders } from "../_shared/cors.ts";
import { returnPostgresError } from "../_shared/helpers.ts";
import { supabaseClient } from "../_shared/supabaseClient.ts";

interface NotificationQuery {
    notification_id: string;
    evaluation_interval: string;
    acknowledged: boolean;
    notification_title: string;
    notification_message: string;
    classification: string | null;
    preference_id: string;
    verified_email: string;
    live_spec_id: string;
    catalog_name: string;
    spec_type: string;
    bytes_processed: number;
}

interface EmailConfig {
    notification_id: string;
    emails: string[];
    subject: string;
    html: string;
}

export const handleSuccess = <T>(response: any) => {
    return response.error
        ? {
            data: null,
            error: response.error,
        }
        : {
            data: response.data as T,
        };
};

export const handleFailure = (error: any) => {
    return {
        data: null,
        error,
    };
};

const emailNotifications = async (
    pendingNotifications: EmailConfig[],
): Promise<string[]> => {
    const notificationsDelivered: string[] = [];

    const notificationPromises = pendingNotifications.map(
        ({ notification_id, emails, subject, html }) =>
            fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    ...corsHeaders,
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${RESEND_API_KEY}`,
                },
                body: JSON.stringify({
                    from: "Resend Test <onboarding@resend.dev>",
                    to: ["tucker.kiahna@gmail.com"],
                    subject,
                    html,
                }),
            }).then(
                (response) => {
                    if (response.ok) {
                        notificationsDelivered.push(notification_id);
                    }
                },
                () => {},
            ),
    );

    await Promise.all(notificationPromises);

    return notificationsDelivered;
};

const updateAcknowledgementFlag = async (
    alertEmailsDelivered: string[],
    confirmationEmailsDelivered: string[],
) => {
    const alertUpdates = alertEmailsDelivered.map((notificationId) =>
        supabaseClient
            .from("notifications")
            .update({ acknowledged: true })
            .match({ id: notificationId })
            .then(handleSuccess, handleFailure)
    );

    const confirmationUpdates = confirmationEmailsDelivered.map(
        (notificationId) =>
            supabaseClient
                .from("notifications")
                .update({ acknowledged: false })
                .match({ id: notificationId })
                .then(handleSuccess, handleFailure),
    );

    await Promise.all([...alertUpdates, ...confirmationUpdates]);
};

const RESEND_API_KEY = "re_Qu4ZevKs_DmDfQxdNmMvoyuSeGtfYz2VS";

serve(async (_request: Request): Promise<Response> => {
    const { data: notifications, error: notificationError } = await supabaseClient
        .from<NotificationQuery>("notifications_ext")
        .select("*")
        .eq("classification", "data-not-processed-in-interval");

    if (notificationError !== null) {
        returnPostgresError(notificationError);
    }

    if (!notifications || notifications.length === 0) {
        // Terminate the function without error if there aren't any active notification subscriptions in the system.
        return new Response(null, {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 200,
        });
    }

    const pendingAlertEmails: EmailConfig[] = notifications
        .filter(
            ({ bytes_processed, acknowledged }) => !acknowledged && bytes_processed === 0,
        )
        .map(
            ({
                notification_title,
                notification_message,
                catalog_name,
                notification_id,
                evaluation_interval,
                spec_type,
                verified_email,
            }) => {
                const timeOffset = evaluation_interval.split(":");
                const hours = Number(timeOffset[0]);

                const subject = notification_title
                    .replaceAll("{spec_type}", spec_type)
                    .replaceAll("{catalog_name}", catalog_name);

                const html = notification_message
                    .replaceAll("{spec_type}", spec_type)
                    .replaceAll("{catalog_name}", catalog_name)
                    .replaceAll(
                        "{notification_interval}",
                        isFinite(hours) ? hours.toString() : timeOffset[0],
                    );

                return {
                    notification_id,
                    emails: [verified_email],
                    subject,
                    html,
                };
            },
        );

    const pendingConfirmationEmails: EmailConfig[] = notifications
        .filter(
            ({ bytes_processed, acknowledged }) => acknowledged && bytes_processed > 0,
        )
        .map(
            ({
                notification_title,
                notification_message,
                catalog_name,
                notification_id,
                spec_type,
                verified_email,
            }) => {
                const subject = notification_title
                    .replaceAll("{spec_type}", spec_type)
                    .replaceAll("{catalog_name}", catalog_name);

                const html = notification_message
                    .replaceAll("{spec_type}", spec_type)
                    .replaceAll("{catalog_name}", catalog_name);

                return {
                    notification_id,
                    emails: [verified_email],
                    subject,
                    html,
                };
            },
        );

    if (
        pendingAlertEmails.length === 0 &&
        pendingConfirmationEmails.length === 0
    ) {
        return new Response(null, {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 200,
        });
    }

    const alertEmailsDelivered = await emailNotifications(pendingAlertEmails);
    const confirmationEmailsDelivered = await emailNotifications(
        pendingConfirmationEmails,
    );

    await updateAcknowledgementFlag(
        alertEmailsDelivered,
        confirmationEmailsDelivered,
    );

    return new Response(null, {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
});
