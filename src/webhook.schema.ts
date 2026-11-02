// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import {
        WebhookProgressSchema,
        WebhookRequestSchema,
        WebhookResponseSchema,
} from "@dsbunny/webhook-schema";

export const RecipeDbWebhookClassSchema = z.enum(['playlist']).register(dsbunnyRegistry, {
        id: 'RecipeDbWebhookClassSchema',
        description: 'The class of the webhook event related to recipe operations',
});
export type RecipeDbWebhookClass = z.infer<typeof RecipeDbWebhookClassSchema>;

export const RecipeDbWebhookTypeSchema = z.enum(['new', 'change', 'delete']).register(dsbunnyRegistry, {
        id: 'RecipeDbWebhookTypeSchema',
        description: 'The type of the webhook event related to recipe operations',
});
export type RecipeDbWebhookType = z.infer<typeof RecipeDbWebhookTypeSchema>;

export const RecipeDbWebhookRequestSchema = WebhookRequestSchema.extend({
        class: RecipeDbWebhookClassSchema,
        type: RecipeDbWebhookTypeSchema,
}).register(dsbunnyRegistry, {
        id: 'RecipeDbWebhookRequestSchema',
        description: 'The schema for webhook requests sent by the RecipeDB',
});
export type RecipeDbWebhookRequest = z.infer<typeof RecipeDbWebhookRequestSchema>;

export const RecipeDbWebhookProgressSchema = WebhookProgressSchema.register(dsbunnyRegistry, {
        id: 'RecipeDbWebhookProgressSchema',
        description: 'RecipeDB webhook progress schema',
});
export type RecipeDbWebhookProgress = z.infer<typeof RecipeDbWebhookProgressSchema>;

export const RecipeDbWebhookResponseSchema = WebhookResponseSchema.register(dsbunnyRegistry, {
        id: 'RecipeDbWebhookResponseSchema',
        description: "RecipeDB webhook response schema",
});
export type RecipeDbWebhookResponse = z.infer<typeof RecipeDbWebhookResponseSchema>;
