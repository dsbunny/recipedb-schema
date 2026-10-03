import * as z from "zod";
export declare const RecipeRecordSchema: z.ZodObject<{
    recipe_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    publish_id: z.ZodUUID;
    publisher_identity: z.ZodString;
    recipe_data: z.ZodObject<{
        id: z.ZodUUID;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_id: z.ZodUUID;
        viewport_id: z.ZodString;
        transition: z.ZodObject<{
            "@type": z.ZodLiteral<"Transition">;
            asset_id: z.ZodUUID;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                asset_id: z.ZodUUID;
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
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>;
        schedule: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"Event">;
            id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
            priority: z.ZodNumber;
            start: z.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
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
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
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
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
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
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
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
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
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
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
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
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
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
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>]>>;
        }, z.core.$strip>>>;
        cluster: z.ZodOptional<z.ZodObject<{
            label: z.ZodString;
            id: z.ZodUUID;
            peers: z.ZodArray<z.ZodUUID>;
            iceServers: z.ZodArray<z.ZodObject<{
                urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                username: z.ZodOptional<z.ZodString>;
                credential: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            signalingServers: z.ZodArray<z.ZodObject<{
                url: z.ZodURL;
            }, z.core.$strip>>;
            enableLoopback: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        create_timestamp: z.ZodISODateTime;
    }, z.core.$strip>;
    recipe_link: z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        recipe_id: z.ZodUUID;
        ref_id: z.ZodOptional<z.ZodString>;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, z.core.$strip>;
    s3_metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    s3_uri: z.ZodString;
    is_legacy: z.ZodDefault<z.ZodBoolean>;
    is_expired: z.ZodDefault<z.ZodBoolean>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
}, z.core.$strip>;
export type RecipeRecord = z.infer<typeof RecipeRecordSchema>;
export declare const DbDtoFromRecipeRecordSchema: z.ZodPipe<z.ZodObject<{
    recipe_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    publish_id: z.ZodUUID;
    publisher_identity: z.ZodString;
    recipe_data: z.ZodObject<{
        id: z.ZodUUID;
        publish_id: z.ZodUUID;
        publisher_identity: z.ZodString;
        canvas_id: z.ZodUUID;
        viewport_id: z.ZodString;
        transition: z.ZodObject<{
            "@type": z.ZodLiteral<"Transition">;
            asset_id: z.ZodUUID;
            name: z.ZodString;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                md5: z.ZodString;
                integrity: z.ZodString;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>, z.ZodObject<{
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                asset_id: z.ZodUUID;
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
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>;
        schedule: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"Event">;
            id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
            priority: z.ZodNumber;
            start: z.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
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
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
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
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        asset_id: z.ZodUUID;
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    }, z.core.$strip>, z.ZodObject<{
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, z.core.$strip>;
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        asset_id: z.ZodUUID;
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
                        name: z.ZodString;
                        href: z.ZodURL;
                        expires: z.ZodOptional<z.ZodISODateTime>;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
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
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                asset_id: z.ZodUUID;
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
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
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
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
                name: z.ZodString;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                sources: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    asset_id: z.ZodUUID;
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, z.core.$strip>, z.ZodObject<{
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    asset_id: z.ZodUUID;
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
                    name: z.ZodString;
                    href: z.ZodURL;
                    expires: z.ZodOptional<z.ZodISODateTime>;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, z.core.$strip>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, z.core.$strip>]>>>;
            }, z.core.$strip>]>>;
        }, z.core.$strip>>>;
        cluster: z.ZodOptional<z.ZodObject<{
            label: z.ZodString;
            id: z.ZodUUID;
            peers: z.ZodArray<z.ZodUUID>;
            iceServers: z.ZodArray<z.ZodObject<{
                urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                username: z.ZodOptional<z.ZodString>;
                credential: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            signalingServers: z.ZodArray<z.ZodObject<{
                url: z.ZodURL;
            }, z.core.$strip>>;
            enableLoopback: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        create_timestamp: z.ZodISODateTime;
    }, z.core.$strip>;
    recipe_link: z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        recipe_id: z.ZodUUID;
        ref_id: z.ZodOptional<z.ZodString>;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, z.core.$strip>;
    s3_metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    s3_uri: z.ZodString;
    is_legacy: z.ZodDefault<z.ZodBoolean>;
    is_expired: z.ZodDefault<z.ZodBoolean>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    expiry_timestamp: z.ZodNullable<z.ZodISODateTime>;
}, z.core.$strip>, z.ZodTransform<{
    recipe_data: string;
    recipe_link: string;
    s3_metadata: string;
    recipe_id: string;
    tenant_id: string;
    publish_id: string;
    publisher_identity: string;
    s3_uri: string;
    is_legacy: boolean;
    is_expired: boolean;
    create_timestamp: string;
    modify_timestamp: string;
    expiry_timestamp: string | null;
}, {
    recipe_id: string;
    tenant_id: string;
    publish_id: string;
    publisher_identity: string;
    recipe_data: {
        id: string;
        publish_id: string;
        publisher_identity: string;
        canvas_id: string;
        viewport_id: string;
        transition: {
            "@type": "Transition";
            asset_id: string;
            name: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
            duration: number;
            expires?: string | undefined;
            params?: Record<string, any> | undefined;
            sources?: ({
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                "@type": "HTMLImageElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                md5: string;
                integrity: string;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
            } | {
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                "@type": "HTMLVideoElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                md5: string;
                integrity: string;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
            } | {
                "@type": "HTMLScriptElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                expires?: string | undefined;
            })[] | undefined;
        };
        schedule: {
            "@type": "Event";
            id: string;
            name: string;
            tags: string[];
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                "@type": "Playlist";
                entries: ({
                    "@type": "HTMLImageElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    duration: number;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                } | {
                    "@type": "HTMLVideoElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    duration: number;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                } | {
                    "@type": "CustomElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    duration: number;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                    sources?: ({
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        "@type": "HTMLImageElement";
                        asset_id: string;
                        name: string;
                        href: string;
                        size: number;
                        md5: string;
                        integrity: string;
                        expires?: string | undefined;
                        params?: Record<string, any> | undefined;
                    } | {
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        "@type": "HTMLVideoElement";
                        asset_id: string;
                        name: string;
                        href: string;
                        size: number;
                        md5: string;
                        integrity: string;
                        expires?: string | undefined;
                        params?: Record<string, any> | undefined;
                    } | {
                        "@type": "HTMLScriptElement";
                        asset_id: string;
                        name: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                        expires?: string | undefined;
                    })[] | undefined;
                })[];
            };
            recurrenceRules?: {
                "@type": "RecurrenceRule";
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                interval?: number | undefined;
                firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
                byDay?: {
                    day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
                    nthOfPeriod?: number | undefined;
                }[] | undefined;
                byMonthDay?: number[] | undefined;
                byMonth?: number[] | undefined;
                byYearDay?: number[] | undefined;
                byWeekNo?: number[] | undefined;
                byHour?: number[] | undefined;
                byMinute?: number[] | undefined;
                bySecond?: number[] | undefined;
                bySetPosition?: number[] | undefined;
                timeZone?: string | undefined;
                times?: number | undefined;
                until?: string | undefined;
            }[] | undefined;
            onceOn?: {
                "@type": "DOMEvent";
                type: string;
                match: {
                    "@type": "MatchPattern";
                    code: string;
                };
            } | undefined;
            enableOn?: {
                "@type": "DOMEvent";
                type: string;
                match: {
                    "@type": "MatchPattern";
                    code: string;
                };
            } | undefined;
            disableOn?: {
                "@type": "DOMEvent";
                type: string;
                match: {
                    "@type": "MatchPattern";
                    code: string;
                };
            } | undefined;
        }[];
        create_timestamp: string;
        $defs?: Record<string, {
            "@type": "Playlist";
            entries: ({
                "@type": "HTMLImageElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                duration: number;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
            } | {
                "@type": "HTMLVideoElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                duration: number;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
            } | {
                "@type": "CustomElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                duration: number;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
                sources?: ({
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    "@type": "HTMLImageElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    md5: string;
                    integrity: string;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                } | {
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    "@type": "HTMLVideoElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    md5: string;
                    integrity: string;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                } | {
                    "@type": "HTMLScriptElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    expires?: string | undefined;
                })[] | undefined;
            })[];
        }> | undefined;
        cluster?: {
            label: string;
            id: string;
            peers: string[];
            iceServers: {
                urls: string | string[];
                username?: string | undefined;
                credential?: string | undefined;
            }[];
            signalingServers: {
                url: string;
            }[];
            enableLoopback?: boolean | undefined;
        } | undefined;
    };
    recipe_link: {
        "@type": "RecipeLink";
        recipe_id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
        ref_id?: string | undefined;
        expires?: string | undefined;
    };
    s3_metadata: Record<string, any>;
    s3_uri: string;
    is_legacy: boolean;
    is_expired: boolean;
    create_timestamp: string;
    modify_timestamp: string;
    expiry_timestamp: string | null;
}>>;
export declare const DbDtoToRecipeRecordSchema: z.ZodPipe<z.ZodObject<{
    recipe_data: z.ZodString;
    recipe_link: z.ZodString;
    s3_metadata: z.ZodString;
    is_legacy: z.ZodNumber;
    is_expired: z.ZodNumber;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    expiry_timestamp: z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    recipe_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    publish_id: z.ZodUUID;
    publisher_identity: z.ZodString;
    s3_uri: z.ZodString;
}, z.core.$strip>, z.ZodTransform<{
    recipe_id: string;
    tenant_id: string;
    publish_id: string;
    publisher_identity: string;
    recipe_data: {
        id: string;
        publish_id: string;
        publisher_identity: string;
        canvas_id: string;
        viewport_id: string;
        transition: {
            "@type": "Transition";
            asset_id: string;
            name: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
            duration: number;
            expires?: string | undefined;
            params?: Record<string, any> | undefined;
            sources?: ({
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                "@type": "HTMLImageElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                md5: string;
                integrity: string;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
            } | {
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                "@type": "HTMLVideoElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                md5: string;
                integrity: string;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
            } | {
                "@type": "HTMLScriptElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                expires?: string | undefined;
            })[] | undefined;
        };
        schedule: {
            "@type": "Event";
            id: string;
            name: string;
            tags: string[];
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                "@type": "Playlist";
                entries: ({
                    "@type": "HTMLImageElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    duration: number;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                } | {
                    "@type": "HTMLVideoElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    duration: number;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                } | {
                    "@type": "CustomElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    duration: number;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                    sources?: ({
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        "@type": "HTMLImageElement";
                        asset_id: string;
                        name: string;
                        href: string;
                        size: number;
                        md5: string;
                        integrity: string;
                        expires?: string | undefined;
                        params?: Record<string, any> | undefined;
                    } | {
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        "@type": "HTMLVideoElement";
                        asset_id: string;
                        name: string;
                        href: string;
                        size: number;
                        md5: string;
                        integrity: string;
                        expires?: string | undefined;
                        params?: Record<string, any> | undefined;
                    } | {
                        "@type": "HTMLScriptElement";
                        asset_id: string;
                        name: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                        expires?: string | undefined;
                    })[] | undefined;
                })[];
            };
            recurrenceRules?: {
                "@type": "RecurrenceRule";
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                interval?: number | undefined;
                firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
                byDay?: {
                    day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
                    nthOfPeriod?: number | undefined;
                }[] | undefined;
                byMonthDay?: number[] | undefined;
                byMonth?: number[] | undefined;
                byYearDay?: number[] | undefined;
                byWeekNo?: number[] | undefined;
                byHour?: number[] | undefined;
                byMinute?: number[] | undefined;
                bySecond?: number[] | undefined;
                bySetPosition?: number[] | undefined;
                timeZone?: string | undefined;
                times?: number | undefined;
                until?: string | undefined;
            }[] | undefined;
            onceOn?: {
                "@type": "DOMEvent";
                type: string;
                match: {
                    "@type": "MatchPattern";
                    code: string;
                };
            } | undefined;
            enableOn?: {
                "@type": "DOMEvent";
                type: string;
                match: {
                    "@type": "MatchPattern";
                    code: string;
                };
            } | undefined;
            disableOn?: {
                "@type": "DOMEvent";
                type: string;
                match: {
                    "@type": "MatchPattern";
                    code: string;
                };
            } | undefined;
        }[];
        create_timestamp: string;
        $defs?: Record<string, {
            "@type": "Playlist";
            entries: ({
                "@type": "HTMLImageElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                duration: number;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
            } | {
                "@type": "HTMLVideoElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                duration: number;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
            } | {
                "@type": "CustomElement";
                asset_id: string;
                name: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                duration: number;
                expires?: string | undefined;
                params?: Record<string, any> | undefined;
                sources?: ({
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    "@type": "HTMLImageElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    md5: string;
                    integrity: string;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                } | {
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    "@type": "HTMLVideoElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    md5: string;
                    integrity: string;
                    expires?: string | undefined;
                    params?: Record<string, any> | undefined;
                } | {
                    "@type": "HTMLScriptElement";
                    asset_id: string;
                    name: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    expires?: string | undefined;
                })[] | undefined;
            })[];
        }> | undefined;
        cluster?: {
            label: string;
            id: string;
            peers: string[];
            iceServers: {
                urls: string | string[];
                username?: string | undefined;
                credential?: string | undefined;
            }[];
            signalingServers: {
                url: string;
            }[];
            enableLoopback?: boolean | undefined;
        } | undefined;
    };
    recipe_link: {
        "@type": "RecipeLink";
        recipe_id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
        ref_id?: string | undefined;
        expires?: string | undefined;
    };
    s3_metadata: Record<string, any>;
    s3_uri: string;
    is_legacy: boolean;
    is_expired: boolean;
    create_timestamp: string;
    modify_timestamp: string;
    expiry_timestamp: string | null;
}, {
    recipe_data: string;
    recipe_link: string;
    s3_metadata: string;
    is_legacy: number;
    is_expired: number;
    create_timestamp: string;
    modify_timestamp: string;
    expiry_timestamp: string | null;
    recipe_id: string;
    tenant_id: string;
    publish_id: string;
    publisher_identity: string;
    s3_uri: string;
}>>;
