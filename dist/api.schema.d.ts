import * as z from "zod";
export declare const RecipeDbPingResponseSchema: z.ZodObject<{
    ping: z.ZodLiteral<"pong">;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type RecipeDbPingResponse = z.infer<typeof RecipeDbPingResponseSchema>;
export declare const CanvasViewportInputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CanvasViewportInput">;
    canvas_id: z.ZodUUID;
    viewport_ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CanvasViewportInput = z.infer<typeof CanvasViewportInputSchema>;
export declare const CanvasViewportInputArraySchema: z.ZodArray<z.ZodObject<{
    '@type': z.ZodLiteral<"CanvasViewportInput">;
    canvas_id: z.ZodUUID;
    viewport_ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>>;
export declare const CanvasViewportRecordSchema: z.ZodObject<{
    canvas_id: z.ZodUUID;
    viewport_ids: z.ZodArray<z.ZodString>;
    '@type': z.ZodLiteral<"CanvasViewportRecord">;
    is_active: z.ZodBoolean;
    is_latest: z.ZodBoolean;
}, z.core.$strip>;
export type CanvasViewportRecord = z.infer<typeof CanvasViewportRecordSchema>;
export declare const CanvasViewportRecordArraySchema: z.ZodArray<z.ZodObject<{
    canvas_id: z.ZodUUID;
    viewport_ids: z.ZodArray<z.ZodString>;
    '@type': z.ZodLiteral<"CanvasViewportRecord">;
    is_active: z.ZodBoolean;
    is_latest: z.ZodBoolean;
}, z.core.$strip>>;
export type CanvasViewportRecordArray = z.infer<typeof CanvasViewportRecordArraySchema>;
export declare const PlaylistInputSchema: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLImageElement">;
        asset_id: z.ZodUUID;
        version: z.ZodNumber;
        name: z.ZodString;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLVideoElement">;
        asset_id: z.ZodUUID;
        version: z.ZodNumber;
        name: z.ZodString;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        "@type": z.ZodLiteral<"CustomElement">;
        asset_id: z.ZodUUID;
        version: z.ZodNumber;
        name: z.ZodString;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            md5: z.ZodString;
            integrity: z.ZodString;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            md5: z.ZodString;
            integrity: z.ZodString;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLScriptElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>]>>>;
    }, z.core.$strip>]>>;
    '@type': z.ZodLiteral<"PlaylistInput">;
}, z.core.$strip>;
export type PlaylistInput = z.infer<typeof PlaylistInputSchema>;
export declare const PlaylistRecordSchema: z.ZodObject<{
    playlist_id: z.ZodUUID;
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLImageElement">;
        asset_id: z.ZodUUID;
        version: z.ZodNumber;
        name: z.ZodString;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLVideoElement">;
        asset_id: z.ZodUUID;
        version: z.ZodNumber;
        name: z.ZodString;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        "@type": z.ZodLiteral<"CustomElement">;
        asset_id: z.ZodUUID;
        version: z.ZodNumber;
        name: z.ZodString;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            md5: z.ZodString;
            integrity: z.ZodString;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            md5: z.ZodString;
            integrity: z.ZodString;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLScriptElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>]>>>;
    }, z.core.$strip>]>>;
    '@type': z.ZodLiteral<"PlaylistRecord">;
    tenant_id: z.ZodUUID;
    is_active: z.ZodBoolean;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
}, z.core.$strip>;
export type PlaylistRecord = z.infer<typeof PlaylistRecordSchema>;
export declare const RecipeInputSchema: z.ZodObject<{
    transition: z.ZodObject<{
        "@type": z.ZodLiteral<"Transition">;
        asset_id: z.ZodUUID;
        version: z.ZodNumber;
        name: z.ZodString;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            md5: z.ZodString;
            integrity: z.ZodString;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            md5: z.ZodString;
            integrity: z.ZodString;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLScriptElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>]>>>;
    }, z.core.$strip>;
    scheduled_playlists: z.ZodArray<z.ZodObject<{
        "@type": z.ZodLiteral<"ScheduledPlaylist">;
        scheduled_playlist_id: z.ZodUUID;
        priority: z.ZodNumber;
        start: z.ZodISODateTime;
        timeZone: z.ZodString;
        duration: z.ZodString;
        playlist: z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            playlist_id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>]>>;
        }, z.core.$strip>;
        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"RecurrenceRule">;
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
            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                mo: "mo";
                tu: "tu";
                we: "we";
                th: "th";
                fr: "fr";
                sa: "sa";
                su: "su";
            }>>;
            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            timeZone: z.ZodOptional<z.ZodString>;
            times: z.ZodOptional<z.ZodNumber>;
            until: z.ZodOptional<z.ZodISODateTime>;
        }, z.core.$strip>>>;
        recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
        onceOn: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"DOMEvent">;
            type: z.ZodString;
            match: z.ZodObject<{
                "@type": z.ZodLiteral<"MatchPattern">;
                code: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        enableOn: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"DOMEvent">;
            type: z.ZodString;
            match: z.ZodObject<{
                "@type": z.ZodLiteral<"MatchPattern">;
                code: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        disableOn: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"DOMEvent">;
            type: z.ZodString;
            match: z.ZodObject<{
                "@type": z.ZodLiteral<"MatchPattern">;
                code: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        "@type": z.ZodLiteral<"Playlist">;
        playlist_id: z.ZodUUID;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>>;
    cluster: z.ZodOptional<z.ZodObject<{
        "@type": z.ZodLiteral<"Cluster">;
        label: z.ZodString;
        cluster_id: z.ZodUUID;
        peers: z.ZodArray<z.ZodUUID>;
        iceServers: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"IceServer">;
            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
            username: z.ZodOptional<z.ZodString>;
            credential: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        signalingServers: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"SignalingServer">;
            url: z.ZodURL;
        }, z.core.$strip>>;
        enableLoopback: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    '@type': z.ZodLiteral<"RecipeInput">;
    publish_id: z.ZodUUID;
    publisher_identity: z.ZodString;
    canvas_viewports: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"CanvasViewportInput">;
        canvas_id: z.ZodUUID;
        viewport_ids: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RecipeInput = z.infer<typeof RecipeInputSchema>;
export declare const RecipeInputRecordSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"RecipeInputRecord">;
    tenant_id: z.ZodUUID;
    publish_id: z.ZodUUID;
    publisher_identity: z.ZodString;
    canvas_viewports: z.ZodArray<z.ZodObject<{
        canvas_id: z.ZodUUID;
        viewport_ids: z.ZodArray<z.ZodString>;
        '@type': z.ZodLiteral<"CanvasViewportRecord">;
        is_active: z.ZodBoolean;
        is_latest: z.ZodBoolean;
    }, z.core.$strip>>;
    playlist_ids: z.ZodArray<z.ZodUUID>;
    asset_ids: z.ZodArray<z.ZodUUID>;
    recipe_data: z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeBase">;
        transition: z.ZodObject<{
            "@type": z.ZodLiteral<"Transition">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>;
        scheduled_playlists: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"ScheduledPlaylist">;
            scheduled_playlist_id: z.ZodUUID;
            priority: z.ZodNumber;
            start: z.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecurrenceRule">;
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
                firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                    mo: "mo";
                    tu: "tu";
                    we: "we";
                    th: "th";
                    fr: "fr";
                    sa: "sa";
                    su: "su";
                }>>;
                byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                timeZone: z.ZodOptional<z.ZodString>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.ZodISODateTime>;
            }, z.core.$strip>>>;
            recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
            onceOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            enableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            disableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            playlist_id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>]>>;
        }, z.core.$strip>>>;
        cluster: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"Cluster">;
            label: z.ZodString;
            cluster_id: z.ZodUUID;
            peers: z.ZodArray<z.ZodUUID>;
            iceServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"IceServer">;
                urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                username: z.ZodOptional<z.ZodString>;
                credential: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            signalingServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"SignalingServer">;
                url: z.ZodURL;
            }, z.core.$strip>>;
            enableLoopback: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
    is_expired: z.ZodBoolean;
}, z.core.$strip>;
export type RecipeInputRecord = z.infer<typeof RecipeInputRecordSchema>;
export declare const RecipeOutputDescriptorSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"RecipeOutputDescriptor">;
    canvas_id: z.ZodUUID;
    viewport_id: z.ZodString;
}, z.core.$strip>;
export type RecipeOutputDescriptor = z.infer<typeof RecipeOutputDescriptorSchema>;
export declare const RecipeOutputRecordSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"RecipeOutputRecord">;
    tenant_id: z.ZodUUID;
    recipe_id: z.ZodUUID;
    publish_id: z.ZodUUID;
    recipe_data: z.ZodObject<{
        transition: z.ZodObject<{
            "@type": z.ZodLiteral<"Transition">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>;
        scheduled_playlists: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"ScheduledPlaylist">;
            scheduled_playlist_id: z.ZodUUID;
            priority: z.ZodNumber;
            start: z.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecurrenceRule">;
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
                firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                    mo: "mo";
                    tu: "tu";
                    we: "we";
                    th: "th";
                    fr: "fr";
                    sa: "sa";
                    su: "su";
                }>>;
                byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                timeZone: z.ZodOptional<z.ZodString>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.ZodISODateTime>;
            }, z.core.$strip>>>;
            recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
            onceOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            enableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            disableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            playlist_id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>]>>;
        }, z.core.$strip>>>;
        cluster: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"Cluster">;
            label: z.ZodString;
            cluster_id: z.ZodUUID;
            peers: z.ZodArray<z.ZodUUID>;
            iceServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"IceServer">;
                urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                username: z.ZodOptional<z.ZodString>;
                credential: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            signalingServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"SignalingServer">;
                url: z.ZodURL;
            }, z.core.$strip>>;
            enableLoopback: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        recipe_id: z.ZodUUID;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_id: z.ZodUUID;
        viewport_id: z.ZodString;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodOptional<z.ZodISODateTime>;
        "@type": z.ZodLiteral<"Recipe">;
    }, z.core.$strip>;
    recipe_link: z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        recipe_id: z.ZodUUID;
        ref_id: z.ZodOptional<z.ZodString>;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, z.core.$strip>;
    s3_metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    s3_uri: z.ZodString;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
    is_expired: z.ZodBoolean;
}, z.core.$strip>;
export type RecipeOutputRecord = z.infer<typeof RecipeOutputRecordSchema>;
export declare const ListRecipeInputsRequestSchema: z.ZodObject<{
    sort_dir: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    max_results: z.ZodOptional<z.ZodNumber>;
    next_token: z.ZodOptional<z.ZodString>;
    '@type': z.ZodLiteral<"ListRecipeInputsRequest">;
    validity: z.ZodOptional<z.ZodEnum<{
        all: "all";
        valid: "valid";
        expired: "expired";
        latest: "latest";
        active: "active";
    }>>;
    publish_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    canvas_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    viewport_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    playlist_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    asset_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    sort_by: z.ZodOptional<z.ZodEnum<{
        create_timestamp: "create_timestamp";
        modify_timestamp: "modify_timestamp";
        expiry_timestamp: "expiry_timestamp";
        publisher_identity: "publisher_identity";
    }>>;
}, z.core.$strip>;
export type ListRecipeInputsRequest = z.infer<typeof ListRecipeInputsRequestSchema>;
export declare const ListRecipeInputsResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ListRecipeInputsResponse">;
    recipe_inputs: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeInputRecord">;
        tenant_id: z.ZodUUID;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_viewports: z.ZodArray<z.ZodObject<{
            canvas_id: z.ZodUUID;
            viewport_ids: z.ZodArray<z.ZodString>;
            '@type': z.ZodLiteral<"CanvasViewportRecord">;
            is_active: z.ZodBoolean;
            is_latest: z.ZodBoolean;
        }, z.core.$strip>>;
        playlist_ids: z.ZodArray<z.ZodUUID>;
        asset_ids: z.ZodArray<z.ZodUUID>;
        recipe_data: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeBase">;
            transition: z.ZodObject<{
                "@type": z.ZodLiteral<"Transition">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylist">;
                scheduled_playlist_id: z.ZodUUID;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"Playlist">;
                    playlist_id: z.ZodUUID;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"CustomElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>]>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRule">;
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
                    firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>>;
                    byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    timeZone: z.ZodOptional<z.ZodString>;
                    times: z.ZodOptional<z.ZodNumber>;
                    until: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strip>>>;
                recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                onceOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                disableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>>>;
            cluster: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"Cluster">;
                label: z.ZodString;
                cluster_id: z.ZodUUID;
                peers: z.ZodArray<z.ZodUUID>;
                iceServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"IceServer">;
                    urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                    username: z.ZodOptional<z.ZodString>;
                    credential: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                signalingServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"SignalingServer">;
                    url: z.ZodURL;
                }, z.core.$strip>>;
                enableLoopback: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
        is_expired: z.ZodBoolean;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListRecipeInputsResponse = z.infer<typeof ListRecipeInputsResponseSchema>;
export declare const ListRecipesRequestSchema: z.ZodObject<{
    validity: z.ZodOptional<z.ZodEnum<{
        all: "all";
        valid: "valid";
        expired: "expired";
    }>>;
    sort_dir: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    max_results: z.ZodOptional<z.ZodNumber>;
    next_token: z.ZodOptional<z.ZodString>;
    '@type': z.ZodLiteral<"ListRecipesRequest">;
    recipe_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    publish_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    canvas_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    viewport_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    sort_by: z.ZodOptional<z.ZodEnum<{
        create_timestamp: "create_timestamp";
        modify_timestamp: "modify_timestamp";
        expiry_timestamp: "expiry_timestamp";
        publisher_identity: "publisher_identity";
    }>>;
}, z.core.$strip>;
export type ListRecipesRequest = z.infer<typeof ListRecipesRequestSchema>;
export declare const ListRecipesResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ListRecipesResponse">;
    recipes: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeOutputRecord">;
        tenant_id: z.ZodUUID;
        recipe_id: z.ZodUUID;
        publish_id: z.ZodUUID;
        recipe_data: z.ZodObject<{
            transition: z.ZodObject<{
                "@type": z.ZodLiteral<"Transition">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylist">;
                scheduled_playlist_id: z.ZodUUID;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"Playlist">;
                    playlist_id: z.ZodUUID;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"CustomElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>]>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRule">;
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
                    firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>>;
                    byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    timeZone: z.ZodOptional<z.ZodString>;
                    times: z.ZodOptional<z.ZodNumber>;
                    until: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strip>>>;
                recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                onceOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                disableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>>>;
            cluster: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"Cluster">;
                label: z.ZodString;
                cluster_id: z.ZodUUID;
                peers: z.ZodArray<z.ZodUUID>;
                iceServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"IceServer">;
                    urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                    username: z.ZodOptional<z.ZodString>;
                    credential: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                signalingServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"SignalingServer">;
                    url: z.ZodURL;
                }, z.core.$strip>>;
                enableLoopback: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            recipe_id: z.ZodUUID;
            publish_id: z.ZodUUID;
            publisher_identity: z.ZodString;
            canvas_id: z.ZodUUID;
            viewport_id: z.ZodString;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            expiry_timestamp: z.ZodOptional<z.ZodISODateTime>;
            "@type": z.ZodLiteral<"Recipe">;
        }, z.core.$strip>;
        recipe_link: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            recipe_id: z.ZodUUID;
            ref_id: z.ZodOptional<z.ZodString>;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>;
        s3_metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        s3_uri: z.ZodString;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
        is_expired: z.ZodBoolean;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListRecipesResponse = z.infer<typeof ListRecipesResponseSchema>;
export declare const GetRecipeRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeRequest">;
}, z.core.$strip>>;
export type GetRecipeRequest = z.infer<typeof GetRecipeRequestSchema>;
export declare const GetRecipeResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeResponse">;
    recipe_output: z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeOutputRecord">;
        tenant_id: z.ZodUUID;
        recipe_id: z.ZodUUID;
        publish_id: z.ZodUUID;
        recipe_data: z.ZodObject<{
            transition: z.ZodObject<{
                "@type": z.ZodLiteral<"Transition">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylist">;
                scheduled_playlist_id: z.ZodUUID;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"Playlist">;
                    playlist_id: z.ZodUUID;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"CustomElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>]>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRule">;
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
                    firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>>;
                    byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    timeZone: z.ZodOptional<z.ZodString>;
                    times: z.ZodOptional<z.ZodNumber>;
                    until: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strip>>>;
                recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                onceOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                disableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>>>;
            cluster: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"Cluster">;
                label: z.ZodString;
                cluster_id: z.ZodUUID;
                peers: z.ZodArray<z.ZodUUID>;
                iceServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"IceServer">;
                    urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                    username: z.ZodOptional<z.ZodString>;
                    credential: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                signalingServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"SignalingServer">;
                    url: z.ZodURL;
                }, z.core.$strip>>;
                enableLoopback: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            recipe_id: z.ZodUUID;
            publish_id: z.ZodUUID;
            publisher_identity: z.ZodString;
            canvas_id: z.ZodUUID;
            viewport_id: z.ZodString;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            expiry_timestamp: z.ZodOptional<z.ZodISODateTime>;
            "@type": z.ZodLiteral<"Recipe">;
        }, z.core.$strip>;
        recipe_link: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            recipe_id: z.ZodUUID;
            ref_id: z.ZodOptional<z.ZodString>;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>;
        s3_metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        s3_uri: z.ZodString;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
        is_expired: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetRecipeResponse = z.infer<typeof GetRecipeResponseSchema>;
export declare const GetRecipeLinkRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeLinkRequest">;
}, z.core.$strip>>;
export type GetRecipeLinkRequest = z.infer<typeof GetRecipeLinkRequestSchema>;
export declare const GetRecipeLinkResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeLinkResponse">;
    recipe_link: z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        recipe_id: z.ZodUUID;
        ref_id: z.ZodOptional<z.ZodString>;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetRecipeLinkResponse = z.infer<typeof GetRecipeLinkResponseSchema>;
export declare const GetRecipeInputRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeInputRequest">;
}, z.core.$strip>>;
export type GetRecipeInputRequest = z.infer<typeof GetRecipeInputRequestSchema>;
export declare const GetRecipeInputResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeInputResponse">;
    recipe_input: z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeInputRecord">;
        tenant_id: z.ZodUUID;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_viewports: z.ZodArray<z.ZodObject<{
            canvas_id: z.ZodUUID;
            viewport_ids: z.ZodArray<z.ZodString>;
            '@type': z.ZodLiteral<"CanvasViewportRecord">;
            is_active: z.ZodBoolean;
            is_latest: z.ZodBoolean;
        }, z.core.$strip>>;
        playlist_ids: z.ZodArray<z.ZodUUID>;
        asset_ids: z.ZodArray<z.ZodUUID>;
        recipe_data: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeBase">;
            transition: z.ZodObject<{
                "@type": z.ZodLiteral<"Transition">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylist">;
                scheduled_playlist_id: z.ZodUUID;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"Playlist">;
                    playlist_id: z.ZodUUID;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"CustomElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>]>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRule">;
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
                    firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>>;
                    byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    timeZone: z.ZodOptional<z.ZodString>;
                    times: z.ZodOptional<z.ZodNumber>;
                    until: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strip>>>;
                recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                onceOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                disableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>>>;
            cluster: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"Cluster">;
                label: z.ZodString;
                cluster_id: z.ZodUUID;
                peers: z.ZodArray<z.ZodUUID>;
                iceServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"IceServer">;
                    urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                    username: z.ZodOptional<z.ZodString>;
                    credential: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                signalingServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"SignalingServer">;
                    url: z.ZodURL;
                }, z.core.$strip>>;
                enableLoopback: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
        is_expired: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetRecipeInputResponse = z.infer<typeof GetRecipeInputResponseSchema>;
export declare const CreateRecipeBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateRecipeRequest">;
    tenant_id: z.ZodUUID;
    recipe_input: z.ZodObject<{
        transition: z.ZodObject<{
            "@type": z.ZodLiteral<"Transition">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>;
        scheduled_playlists: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"ScheduledPlaylist">;
            scheduled_playlist_id: z.ZodUUID;
            priority: z.ZodNumber;
            start: z.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecurrenceRule">;
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
                firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                    mo: "mo";
                    tu: "tu";
                    we: "we";
                    th: "th";
                    fr: "fr";
                    sa: "sa";
                    su: "su";
                }>>;
                byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                timeZone: z.ZodOptional<z.ZodString>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.ZodISODateTime>;
            }, z.core.$strip>>>;
            recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
            onceOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            enableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            disableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            playlist_id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>]>>;
        }, z.core.$strip>>>;
        cluster: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"Cluster">;
            label: z.ZodString;
            cluster_id: z.ZodUUID;
            peers: z.ZodArray<z.ZodUUID>;
            iceServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"IceServer">;
                urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                username: z.ZodOptional<z.ZodString>;
                credential: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            signalingServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"SignalingServer">;
                url: z.ZodURL;
            }, z.core.$strip>>;
            enableLoopback: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        '@type': z.ZodLiteral<"RecipeInput">;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"CanvasViewportInput">;
            canvas_id: z.ZodUUID;
            viewport_ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    expires: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
export type CreateRecipeBody = z.infer<typeof CreateRecipeBodySchema>;
/** @deprecated Use CreateRecipeBodySchema. */
export declare const CreateRecipeRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateRecipeRequest">;
    tenant_id: z.ZodUUID;
    recipe_input: z.ZodObject<{
        transition: z.ZodObject<{
            "@type": z.ZodLiteral<"Transition">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>;
        scheduled_playlists: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"ScheduledPlaylist">;
            scheduled_playlist_id: z.ZodUUID;
            priority: z.ZodNumber;
            start: z.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecurrenceRule">;
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
                firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                    mo: "mo";
                    tu: "tu";
                    we: "we";
                    th: "th";
                    fr: "fr";
                    sa: "sa";
                    su: "su";
                }>>;
                byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                timeZone: z.ZodOptional<z.ZodString>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.ZodISODateTime>;
            }, z.core.$strip>>>;
            recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
            onceOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            enableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            disableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            playlist_id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>]>>;
        }, z.core.$strip>>>;
        cluster: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"Cluster">;
            label: z.ZodString;
            cluster_id: z.ZodUUID;
            peers: z.ZodArray<z.ZodUUID>;
            iceServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"IceServer">;
                urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                username: z.ZodOptional<z.ZodString>;
                credential: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            signalingServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"SignalingServer">;
                url: z.ZodURL;
            }, z.core.$strip>>;
            enableLoopback: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        '@type': z.ZodLiteral<"RecipeInput">;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"CanvasViewportInput">;
            canvas_id: z.ZodUUID;
            viewport_ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    expires: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
/** @deprecated Use CreateRecipeBody. */
export type CreateRecipeRequest = CreateRecipeBody;
export declare const CreateRecipeResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateRecipeResponse">;
    recipe_outputs: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeOutputDescriptor">;
        canvas_id: z.ZodUUID;
        viewport_id: z.ZodString;
        recipe_link: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            recipe_id: z.ZodUUID;
            ref_id: z.ZodOptional<z.ZodString>;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>;
        timestamp: z.ZodISODateTime;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateRecipeResponse = z.infer<typeof CreateRecipeResponseSchema>;
export declare const CreatePlaylistBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreatePlaylistRequest">;
    tenant_id: z.ZodUUID;
    playlist_input: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
        '@type': z.ZodLiteral<"PlaylistInput">;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreatePlaylistBody = z.infer<typeof CreatePlaylistBodySchema>;
/** @deprecated Use CreatePlaylistBodySchema. */
export declare const CreatePlaylistRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreatePlaylistRequest">;
    tenant_id: z.ZodUUID;
    playlist_input: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
        '@type': z.ZodLiteral<"PlaylistInput">;
    }, z.core.$strip>;
}, z.core.$strip>;
/** @deprecated Use CreatePlaylistBody. */
export type CreatePlaylistRequest = CreatePlaylistBody;
export declare const CreatePlaylistResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreatePlaylistResponse">;
    playlist_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreatePlaylistResponse = z.infer<typeof CreatePlaylistResponseSchema>;
export declare const GetPlaylistRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistRequest">;
}, z.core.$strip>>;
export type GetPlaylistRequest = z.infer<typeof GetPlaylistRequestSchema>;
export declare const GetPlaylistResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistResponse">;
    playlist_record: z.ZodObject<{
        playlist_id: z.ZodUUID;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
        '@type': z.ZodLiteral<"PlaylistRecord">;
        tenant_id: z.ZodUUID;
        is_active: z.ZodBoolean;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetPlaylistResponse = z.infer<typeof GetPlaylistResponseSchema>;
export declare const PatchPlaylistBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PatchPlaylistRequest">;
    patch_operations: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"add">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"remove">;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"replace">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"move">;
        from: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"copy">;
        from: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"test">;
        value: z.ZodAny;
        not: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>], "op">>;
}, z.core.$strip>;
export type PatchPlaylistBody = z.infer<typeof PatchPlaylistBodySchema>;
/** @deprecated Use PatchPlaylistBodySchema. */
export declare const PatchPlaylistRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PatchPlaylistRequest">;
    patch_operations: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"add">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"remove">;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"replace">;
        value: z.ZodAny;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"move">;
        from: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"copy">;
        from: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        path: z.ZodString;
        op: z.ZodLiteral<"test">;
        value: z.ZodAny;
        not: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>], "op">>;
}, z.core.$strip>;
/** @deprecated Use PatchPlaylistBody. */
export type PatchPlaylistRequest = PatchPlaylistBody;
export declare const PatchPlaylistResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PatchPlaylistResponse">;
    playlist_record: z.ZodObject<{
        playlist_id: z.ZodUUID;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
        '@type': z.ZodLiteral<"PlaylistRecord">;
        tenant_id: z.ZodUUID;
        is_active: z.ZodBoolean;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PatchPlaylistResponse = z.infer<typeof PatchPlaylistResponseSchema>;
export declare const DeletePlaylistRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"DeletePlaylistRequest">;
}, z.core.$strip>>;
export type DeletePlaylistRequest = z.infer<typeof DeletePlaylistRequestSchema>;
export declare const DeletePlaylistResponseSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"DeletePlaylistResponse">;
}, z.core.$strip>>;
export type DeletePlaylistResponse = z.infer<typeof DeletePlaylistResponseSchema>;
export declare const ListPlaylistsRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"ListPlaylistsRequest">;
}, z.core.$strip>>;
export type ListPlaylistsRequest = z.infer<typeof ListPlaylistsRequestSchema>;
export declare const ListPlaylistsResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ListPlaylistsResponse">;
    playlist_records: z.ZodArray<z.ZodObject<{
        playlist_id: z.ZodUUID;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
        '@type': z.ZodLiteral<"PlaylistRecord">;
        tenant_id: z.ZodUUID;
        is_active: z.ZodBoolean;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListPlaylistsResponse = z.infer<typeof ListPlaylistsResponseSchema>;
export declare const QueryPlaylistByTemplateBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"QueryPlaylistByTemplateRequest">;
    tenant_id: z.ZodUUID;
    playlist_template: z.ZodObject<{
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
}, z.core.$strip>;
export type QueryPlaylistByTemplateBody = z.infer<typeof QueryPlaylistByTemplateBodySchema>;
/** @deprecated Use QueryPlaylistByTemplateBodySchema. */
export declare const QueryPlaylistByTemplateRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"QueryPlaylistByTemplateRequest">;
    tenant_id: z.ZodUUID;
    playlist_template: z.ZodObject<{
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
}, z.core.$strip>;
/** @deprecated Use QueryPlaylistByTemplateBody. */
export type QueryPlaylistByTemplateRequest = QueryPlaylistByTemplateBody;
export declare const QueryPlaylistByTemplateResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"QueryPlaylistByTemplateResponse">;
    playlist: z.ZodObject<{
        "@type": z.ZodLiteral<"Playlist">;
        playlist_id: z.ZodUUID;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type QueryPlaylistByTemplateResponse = z.infer<typeof QueryPlaylistByTemplateResponseSchema>;
export declare const GetPlaylistSuggestionsRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistSuggestionsRequest">;
}, z.core.$strip>>;
export type GetPlaylistSuggestionsRequest = z.infer<typeof GetPlaylistSuggestionsRequestSchema>;
export declare const GetPlaylistSuggestionsResponseSchema: z.ZodObject<{
    '@type': z.ZodOptional<z.ZodLiteral<"GetPlaylistSuggestionsResponse">>;
    c: z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>;
    s: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>>;
}, z.core.$strip>;
export type GetPlaylistSuggestionsResponse = z.infer<typeof GetPlaylistSuggestionsResponseSchema>;
export declare const GetPlaylistAvailabilityRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistAvailabilityRequest">;
}, z.core.$strip>>;
export type GetPlaylistAvailabilityRequest = z.infer<typeof GetPlaylistAvailabilityRequestSchema>;
export declare const GetPlaylistAvailabilityResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistAvailabilityResponse">;
    is_available: z.ZodBoolean;
}, z.core.$strip>;
export type GetPlaylistAvailabilityResponse = z.infer<typeof GetPlaylistAvailabilityResponseSchema>;
export declare const RecipeDbRequestSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"CreateRecipeRequest">;
    tenant_id: z.ZodUUID;
    recipe_input: z.ZodObject<{
        transition: z.ZodObject<{
            "@type": z.ZodLiteral<"Transition">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>;
        scheduled_playlists: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"ScheduledPlaylist">;
            scheduled_playlist_id: z.ZodUUID;
            priority: z.ZodNumber;
            start: z.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecurrenceRule">;
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
                firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                    mo: "mo";
                    tu: "tu";
                    we: "we";
                    th: "th";
                    fr: "fr";
                    sa: "sa";
                    su: "su";
                }>>;
                byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                timeZone: z.ZodOptional<z.ZodString>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.ZodISODateTime>;
            }, z.core.$strip>>>;
            recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
            onceOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            enableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            disableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            playlist_id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>]>>;
        }, z.core.$strip>>>;
        cluster: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"Cluster">;
            label: z.ZodString;
            cluster_id: z.ZodUUID;
            peers: z.ZodArray<z.ZodUUID>;
            iceServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"IceServer">;
                urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                username: z.ZodOptional<z.ZodString>;
                credential: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            signalingServers: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"SignalingServer">;
                url: z.ZodURL;
            }, z.core.$strip>>;
            enableLoopback: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        '@type': z.ZodLiteral<"RecipeInput">;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_viewports: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"CanvasViewportInput">;
            canvas_id: z.ZodUUID;
            viewport_ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    expires: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeLinkRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeInputRequest">;
}, z.core.$strip>>, z.ZodObject<{
    sort_dir: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    max_results: z.ZodOptional<z.ZodNumber>;
    next_token: z.ZodOptional<z.ZodString>;
    '@type': z.ZodLiteral<"ListRecipeInputsRequest">;
    validity: z.ZodOptional<z.ZodEnum<{
        all: "all";
        valid: "valid";
        expired: "expired";
        latest: "latest";
        active: "active";
    }>>;
    publish_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    canvas_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    viewport_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    playlist_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    asset_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    sort_by: z.ZodOptional<z.ZodEnum<{
        create_timestamp: "create_timestamp";
        modify_timestamp: "modify_timestamp";
        expiry_timestamp: "expiry_timestamp";
        publisher_identity: "publisher_identity";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    validity: z.ZodOptional<z.ZodEnum<{
        all: "all";
        valid: "valid";
        expired: "expired";
    }>>;
    sort_dir: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    max_results: z.ZodOptional<z.ZodNumber>;
    next_token: z.ZodOptional<z.ZodString>;
    '@type': z.ZodLiteral<"ListRecipesRequest">;
    recipe_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    publish_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    canvas_id: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    viewport_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    sort_by: z.ZodOptional<z.ZodEnum<{
        create_timestamp: "create_timestamp";
        modify_timestamp: "modify_timestamp";
        expiry_timestamp: "expiry_timestamp";
        publisher_identity: "publisher_identity";
    }>>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreatePlaylistRequest">;
    tenant_id: z.ZodUUID;
    playlist_input: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
        '@type': z.ZodLiteral<"PlaylistInput">;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"ListPlaylistsRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistSuggestionsRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistAvailabilityRequest">;
}, z.core.$strip>>]>;
export type RecipeDbRequest = z.infer<typeof RecipeDbRequestSchema>;
export declare const RecipeDbResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"CreateRecipeResponse">;
    recipe_outputs: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeOutputDescriptor">;
        canvas_id: z.ZodUUID;
        viewport_id: z.ZodString;
        recipe_link: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            recipe_id: z.ZodUUID;
            ref_id: z.ZodOptional<z.ZodString>;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>;
        timestamp: z.ZodISODateTime;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeResponse">;
    recipe_output: z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeOutputRecord">;
        tenant_id: z.ZodUUID;
        recipe_id: z.ZodUUID;
        publish_id: z.ZodUUID;
        recipe_data: z.ZodObject<{
            transition: z.ZodObject<{
                "@type": z.ZodLiteral<"Transition">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylist">;
                scheduled_playlist_id: z.ZodUUID;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"Playlist">;
                    playlist_id: z.ZodUUID;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"CustomElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>]>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRule">;
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
                    firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>>;
                    byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    timeZone: z.ZodOptional<z.ZodString>;
                    times: z.ZodOptional<z.ZodNumber>;
                    until: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strip>>>;
                recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                onceOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                disableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>>>;
            cluster: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"Cluster">;
                label: z.ZodString;
                cluster_id: z.ZodUUID;
                peers: z.ZodArray<z.ZodUUID>;
                iceServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"IceServer">;
                    urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                    username: z.ZodOptional<z.ZodString>;
                    credential: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                signalingServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"SignalingServer">;
                    url: z.ZodURL;
                }, z.core.$strip>>;
                enableLoopback: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            recipe_id: z.ZodUUID;
            publish_id: z.ZodUUID;
            publisher_identity: z.ZodString;
            canvas_id: z.ZodUUID;
            viewport_id: z.ZodString;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            expiry_timestamp: z.ZodOptional<z.ZodISODateTime>;
            "@type": z.ZodLiteral<"Recipe">;
        }, z.core.$strip>;
        recipe_link: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            recipe_id: z.ZodUUID;
            ref_id: z.ZodOptional<z.ZodString>;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>;
        s3_metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        s3_uri: z.ZodString;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
        is_expired: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeLinkResponse">;
    recipe_link: z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        recipe_id: z.ZodUUID;
        ref_id: z.ZodOptional<z.ZodString>;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            "@type": z.ZodLiteral<"HashValue">;
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetRecipeInputResponse">;
    recipe_input: z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeInputRecord">;
        tenant_id: z.ZodUUID;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_viewports: z.ZodArray<z.ZodObject<{
            canvas_id: z.ZodUUID;
            viewport_ids: z.ZodArray<z.ZodString>;
            '@type': z.ZodLiteral<"CanvasViewportRecord">;
            is_active: z.ZodBoolean;
            is_latest: z.ZodBoolean;
        }, z.core.$strip>>;
        playlist_ids: z.ZodArray<z.ZodUUID>;
        asset_ids: z.ZodArray<z.ZodUUID>;
        recipe_data: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeBase">;
            transition: z.ZodObject<{
                "@type": z.ZodLiteral<"Transition">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylist">;
                scheduled_playlist_id: z.ZodUUID;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"Playlist">;
                    playlist_id: z.ZodUUID;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"CustomElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>]>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRule">;
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
                    firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>>;
                    byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    timeZone: z.ZodOptional<z.ZodString>;
                    times: z.ZodOptional<z.ZodNumber>;
                    until: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strip>>>;
                recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                onceOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                disableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>>>;
            cluster: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"Cluster">;
                label: z.ZodString;
                cluster_id: z.ZodUUID;
                peers: z.ZodArray<z.ZodUUID>;
                iceServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"IceServer">;
                    urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                    username: z.ZodOptional<z.ZodString>;
                    credential: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                signalingServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"SignalingServer">;
                    url: z.ZodURL;
                }, z.core.$strip>>;
                enableLoopback: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
        is_expired: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ListRecipeInputsResponse">;
    recipe_inputs: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeInputRecord">;
        tenant_id: z.ZodUUID;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_viewports: z.ZodArray<z.ZodObject<{
            canvas_id: z.ZodUUID;
            viewport_ids: z.ZodArray<z.ZodString>;
            '@type': z.ZodLiteral<"CanvasViewportRecord">;
            is_active: z.ZodBoolean;
            is_latest: z.ZodBoolean;
        }, z.core.$strip>>;
        playlist_ids: z.ZodArray<z.ZodUUID>;
        asset_ids: z.ZodArray<z.ZodUUID>;
        recipe_data: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeBase">;
            transition: z.ZodObject<{
                "@type": z.ZodLiteral<"Transition">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylist">;
                scheduled_playlist_id: z.ZodUUID;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"Playlist">;
                    playlist_id: z.ZodUUID;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"CustomElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>]>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRule">;
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
                    firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>>;
                    byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    timeZone: z.ZodOptional<z.ZodString>;
                    times: z.ZodOptional<z.ZodNumber>;
                    until: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strip>>>;
                recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                onceOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                disableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>>>;
            cluster: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"Cluster">;
                label: z.ZodString;
                cluster_id: z.ZodUUID;
                peers: z.ZodArray<z.ZodUUID>;
                iceServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"IceServer">;
                    urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                    username: z.ZodOptional<z.ZodString>;
                    credential: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                signalingServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"SignalingServer">;
                    url: z.ZodURL;
                }, z.core.$strip>>;
                enableLoopback: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
        is_expired: z.ZodBoolean;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ListRecipesResponse">;
    recipes: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"RecipeOutputRecord">;
        tenant_id: z.ZodUUID;
        recipe_id: z.ZodUUID;
        publish_id: z.ZodUUID;
        recipe_data: z.ZodObject<{
            transition: z.ZodObject<{
                "@type": z.ZodLiteral<"Transition">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylist">;
                scheduled_playlist_id: z.ZodUUID;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"Playlist">;
                    playlist_id: z.ZodUUID;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"CustomElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLImageElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLVideoElement">;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        }, z.core.$strip>, z.ZodObject<{
                            "@type": z.ZodLiteral<"HTMLScriptElement">;
                            asset_id: z.ZodUUID;
                            version: z.ZodNumber;
                            name: z.ZodString;
                            href: z.ZodURL;
                            expires: z.ZodOptional<z.ZodISODateTime>;
                            size: z.ZodNumber;
                            hash: z.ZodObject<{
                                "@type": z.ZodLiteral<"HashValue">;
                                method: z.ZodLiteral<"SHA256">;
                                hex: z.ZodString;
                            }, z.core.$strip>;
                            md5: z.ZodString;
                            integrity: z.ZodString;
                        }, z.core.$strip>]>>>;
                    }, z.core.$strip>]>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRule">;
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
                    firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>>;
                    byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    timeZone: z.ZodOptional<z.ZodString>;
                    times: z.ZodOptional<z.ZodNumber>;
                    until: z.ZodOptional<z.ZodISODateTime>;
                }, z.core.$strip>>>;
                recurrenceOverrides: z.ZodOptional<z.ZodRecord<z.ZodISODateTime, z.ZodRecord<z.ZodString, z.ZodJSONSchema>>>;
                onceOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                disableOn: z.ZodOptional<z.ZodObject<{
                    "@type": z.ZodLiteral<"DOMEvent">;
                    type: z.ZodString;
                    match: z.ZodObject<{
                        "@type": z.ZodLiteral<"MatchPattern">;
                        code: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                playlist_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    asset_id: z.ZodUUID;
                    version: z.ZodNumber;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        "@type": z.ZodLiteral<"HashValue">;
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            "@type": z.ZodLiteral<"HashValue">;
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, z.core.$strip>]>>>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>>>;
            cluster: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"Cluster">;
                label: z.ZodString;
                cluster_id: z.ZodUUID;
                peers: z.ZodArray<z.ZodUUID>;
                iceServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"IceServer">;
                    urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                    username: z.ZodOptional<z.ZodString>;
                    credential: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                signalingServers: z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"SignalingServer">;
                    url: z.ZodURL;
                }, z.core.$strip>>;
                enableLoopback: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            recipe_id: z.ZodUUID;
            publish_id: z.ZodUUID;
            publisher_identity: z.ZodString;
            canvas_id: z.ZodUUID;
            viewport_id: z.ZodString;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            expiry_timestamp: z.ZodOptional<z.ZodISODateTime>;
            "@type": z.ZodLiteral<"Recipe">;
        }, z.core.$strip>;
        recipe_link: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            recipe_id: z.ZodUUID;
            ref_id: z.ZodOptional<z.ZodString>;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>;
        s3_metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        s3_uri: z.ZodString;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
        is_expired: z.ZodBoolean;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreatePlaylistResponse">;
    playlist_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistResponse">;
    playlist_record: z.ZodObject<{
        playlist_id: z.ZodUUID;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
        '@type': z.ZodLiteral<"PlaylistRecord">;
        tenant_id: z.ZodUUID;
        is_active: z.ZodBoolean;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ListPlaylistsResponse">;
    playlist_records: z.ZodArray<z.ZodObject<{
        playlist_id: z.ZodUUID;
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            asset_id: z.ZodUUID;
            version: z.ZodNumber;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                "@type": z.ZodLiteral<"HashValue">;
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                asset_id: z.ZodUUID;
                version: z.ZodNumber;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>]>>;
        '@type': z.ZodLiteral<"PlaylistRecord">;
        tenant_id: z.ZodUUID;
        is_active: z.ZodBoolean;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodOptional<z.ZodLiteral<"GetPlaylistSuggestionsResponse">>;
    c: z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>;
    s: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPlaylistAvailabilityResponse">;
    is_available: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ErrorResponse">;
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type RecipeDbResponse = z.infer<typeof RecipeDbResponseSchema>;
export declare const RecipeDbRecipeIdParamsSchema: z.ZodObject<{
    recipe_id: z.ZodString;
}, z.core.$strip>;
export type RecipeDbRecipeIdParams = z.infer<typeof RecipeDbRecipeIdParamsSchema>;
export declare const PlaylistIdParamsSchema: z.ZodObject<{
    playlist_id: z.ZodString;
}, z.core.$strip>;
export type PlaylistIdParams = z.infer<typeof PlaylistIdParamsSchema>;
export declare const RecipeIdQuerySchema: z.ZodObject<{
    recipe_id: z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>, z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type RecipeIdQuery = z.infer<typeof RecipeIdQuerySchema>;
export declare const PlaylistIdQuerySchema: z.ZodObject<{
    playlist_id: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type PlaylistIdQuery = z.infer<typeof PlaylistIdQuerySchema>;
export declare const ListRecipeInputsQuerySchema: z.ZodObject<{
    max_results: z.ZodOptional<z.ZodString>;
    next_token: z.ZodOptional<z.ZodString>;
    sort_by: z.ZodOptional<z.ZodString>;
    sort_dir: z.ZodOptional<z.ZodString>;
    validity: z.ZodOptional<z.ZodString>;
    recipe_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    publish_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    canvas_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    viewport_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    playlist_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    asset_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type ListRecipeInputsQuery = z.infer<typeof ListRecipeInputsQuerySchema>;
export declare const ListRecipesQuerySchema: z.ZodObject<{
    max_results: z.ZodOptional<z.ZodString>;
    next_token: z.ZodOptional<z.ZodString>;
    sort_by: z.ZodOptional<z.ZodString>;
    sort_dir: z.ZodOptional<z.ZodString>;
    recipe_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    publish_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    canvas_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    viewport_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type ListRecipesQuery = z.infer<typeof ListRecipesQuerySchema>;
export declare const GetPlaylistSuggestionsQuerySchema: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    c: z.ZodOptional<z.ZodString>;
    t: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetPlaylistSuggestionsQuery = z.infer<typeof GetPlaylistSuggestionsQuerySchema>;
export declare const GetPlaylistAvailabilityQuerySchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type GetPlaylistAvailabilityQuery = z.infer<typeof GetPlaylistAvailabilityQuerySchema>;
export declare const ListPlaylistsQuerySchema: z.ZodObject<{
    max_results: z.ZodOptional<z.ZodString>;
    next_token: z.ZodOptional<z.ZodString>;
    sort_by: z.ZodOptional<z.ZodString>;
    sort_dir: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    playlist_id: z.ZodOptional<z.ZodArray<z.ZodString>>;
    q: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type ListPlaylistsQuery = z.infer<typeof ListPlaylistsQuerySchema>;
//# sourceMappingURL=api.schema.d.ts.map