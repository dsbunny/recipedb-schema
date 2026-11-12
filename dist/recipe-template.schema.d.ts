import * as z from 'zod';
export declare namespace RecipeTemplateSchema {
    const MediaTemplateSchema: z.ZodObject<{
        '@type': z.ZodLiteral<"MediaTemplate">;
        asset_id: z.ZodUUID;
        version: z.ZodNumber;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        duration_seconds: z.ZodNumber;
    }, z.core.$strip>;
    type MediaTemplate = z.infer<typeof MediaTemplateSchema>;
    const PlaylistTemplateSchema: z.ZodObject<{
        '@type': z.ZodLiteral<"PlaylistTemplate">;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        media_templates: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"MediaTemplate">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            duration_seconds: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    type PlaylistTemplate = z.infer<typeof PlaylistTemplateSchema>;
    const NDaySchema: z.ZodObject<{
        '@type': z.ZodLiteral<"NDay">;
        day: z.ZodEnum<{
            mo: "mo";
            tu: "tu";
            we: "we";
            th: "th";
            fr: "fr";
            sa: "sa";
            su: "su";
        }>;
        nthOfPeriod: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    type NDay = z.infer<typeof NDaySchema>;
    const RecurrenceRuleTemplateSchema: z.ZodObject<{
        '@type': z.ZodLiteral<"RecurrenceRuleTemplate">;
        frequency: z.ZodEnum<{
            secondly: "secondly";
            minutely: "minutely";
            hourly: "hourly";
            daily: "daily";
            weekly: "weekly";
            monthly: "monthly";
            yearly: "yearly";
        }>;
        interval: z.ZodOptional<z.ZodNumber>;
        byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"NDay">;
            day: z.ZodEnum<{
                mo: "mo";
                tu: "tu";
                we: "we";
                th: "th";
                fr: "fr";
                sa: "sa";
                su: "su";
            }>;
            nthOfPeriod: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        times: z.ZodOptional<z.ZodNumber>;
        until: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strip>;
    type RecurrenceRuleTemplate = z.infer<typeof RecurrenceRuleTemplateSchema>;
    const ScheduledPlaylistTemplateSchema: z.ZodObject<{
        '@type': z.ZodLiteral<"ScheduledPlaylistTemplate">;
        priority: z.ZodNumber;
        start: z.ZodISODateTime;
        timeZone: z.ZodString;
        duration: z.ZodString;
        playlist: z.ZodObject<{
            '@type': z.ZodLiteral<"PlaylistTemplate">;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
            media_templates: z.ZodArray<z.ZodObject<{
                '@type': z.ZodLiteral<"MediaTemplate">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                duration_seconds: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"RecurrenceRuleTemplate">;
            frequency: z.ZodEnum<{
                secondly: "secondly";
                minutely: "minutely";
                hourly: "hourly";
                daily: "daily";
                weekly: "weekly";
                monthly: "monthly";
                yearly: "yearly";
            }>;
            interval: z.ZodOptional<z.ZodNumber>;
            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
                '@type': z.ZodLiteral<"NDay">;
                day: z.ZodEnum<{
                    mo: "mo";
                    tu: "tu";
                    we: "we";
                    th: "th";
                    fr: "fr";
                    sa: "sa";
                    su: "su";
                }>;
                nthOfPeriod: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            times: z.ZodOptional<z.ZodNumber>;
            until: z.ZodOptional<z.ZodISODateTime>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    type ScheduledPlaylistTemplate = z.infer<typeof ScheduledPlaylistTemplateSchema>;
    const RecipeTemplateSchema: z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeTemplate">;
        scheduled_playlists: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"ScheduledPlaylistTemplate">;
            priority: z.ZodNumber;
            start: z.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                '@type': z.ZodLiteral<"PlaylistTemplate">;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                media_templates: z.ZodArray<z.ZodObject<{
                    '@type': z.ZodLiteral<"MediaTemplate">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    duration_seconds: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                '@type': z.ZodLiteral<"RecurrenceRuleTemplate">;
                frequency: z.ZodEnum<{
                    secondly: "secondly";
                    minutely: "minutely";
                    hourly: "hourly";
                    daily: "daily";
                    weekly: "weekly";
                    monthly: "monthly";
                    yearly: "yearly";
                }>;
                interval: z.ZodOptional<z.ZodNumber>;
                byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    '@type': z.ZodLiteral<"NDay">;
                    day: z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>;
                    nthOfPeriod: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>>;
                byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.ZodISODateTime>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    type RecipeTemplate = z.infer<typeof RecipeTemplateSchema>;
}
