import * as z from "zod";
export declare const RecipeDbWebhookClassSchema: z.ZodEnum<{
    playlist: "playlist";
}>;
export type RecipeDbWebhookClass = z.infer<typeof RecipeDbWebhookClassSchema>;
export declare const RecipeDbWebhookTypeSchema: z.ZodEnum<{
    new: "new";
    change: "change";
    delete: "delete";
}>;
export type RecipeDbWebhookType = z.infer<typeof RecipeDbWebhookTypeSchema>;
export declare const RecipeDbWebhookRequestSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    class: z.ZodEnum<{
        playlist: "playlist";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
        delete: "delete";
    }>;
}, z.core.$strip>;
export type RecipeDbWebhookRequest = z.infer<typeof RecipeDbWebhookRequestSchema>;
export declare const RecipeDbWebhookProgressSchema: z.ZodNull;
export type RecipeDbWebhookProgress = z.infer<typeof RecipeDbWebhookProgressSchema>;
export declare const RecipeDbWebhookResponseSchema: z.ZodObject<{}, z.core.$strip>;
export type RecipeDbWebhookResponse = z.infer<typeof RecipeDbWebhookResponseSchema>;
