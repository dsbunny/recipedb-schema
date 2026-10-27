// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { RecipeSchema } from "@dsbunny/recipe-schema";
export const CanvasViewportSchema = z.object({
    canvas_id: z.uuid()
        .describe('Canvas identifier'),
    viewport_ids: z.array(z.string()).min(1)
        .refine(viewport_ids => new Set(viewport_ids).size === viewport_ids.length, 'Viewport identifiers must be unique.')
        .describe('Viewport identifiers for this canvas'),
}).register(dsbunnyRegistry, {
    id: 'CanvasViewportSchema',
    description: 'Canvas and its viewport identifiers',
});
export const CanvasViewportArraySchema = z.array(CanvasViewportSchema).min(1)
    .refine(canvas_viewports => new Set(canvas_viewports.map(({ canvas_id }) => canvas_id)).size === canvas_viewports.length, 'Canvas identifiers must be unique.').register(dsbunnyRegistry, {
    id: 'CanvasViewportArraySchema',
    description: 'Array of canvas-to-viewport mappings',
});
export const RecipeInputSchema = RecipeSchema.RecipeBaseSchema.extend({
    publish_id: z.uuid()
        .describe('Publish identifier'),
    publisher_identity: z.string().min(1).max(256)
        .describe('Identity of the publishing user'),
    canvas_viewports: CanvasViewportArraySchema,
}).register(dsbunnyRegistry, {
    id: 'RecipeInputSchema',
    description: 'Shared input for all outputs created by one publish',
});
export const RecipeInputRecordSchema = z.object({
    tenant_id: z.uuid(),
    publish_id: z.uuid(),
    publisher_identity: z.string(),
    canvas_viewports: CanvasViewportArraySchema,
    playlist_ids: z.array(z.uuid()),
    asset_ids: z.array(z.uuid()),
    recipe_data: RecipeSchema.RecipeBaseSchema,
    create_timestamp: z.iso.datetime(),
    modify_timestamp: z.iso.datetime(),
    expiry_timestamp: z.iso.datetime().nullable(),
    is_expired: z.boolean(),
}).register(dsbunnyRegistry, {
    id: 'RecipeInputRecordSchema',
    description: 'Recipe input record',
});
export const RecipeOutputDescriptorSchema = z.object({
    canvas_id: z.uuid(),
    viewport_id: z.string(),
}).register(dsbunnyRegistry, {
    id: 'RecipeOutputDescriptorSchema',
    description: 'Canvas and viewport for one output recipe',
});
export const RecipeOutputRecordSchema = z.object({
    tenant_id: z.uuid(),
    recipe_id: z.uuid(),
    publish_id: z.uuid(),
    recipe_data: RecipeSchema.RecipeSchema,
    recipe_link: RecipeSchema.RecipeLinkSchema,
    s3_metadata: z.record(z.string(), z.unknown()),
    s3_uri: z.string().min(2).max(2048),
    create_timestamp: z.iso.datetime(),
    modify_timestamp: z.iso.datetime(),
    expiry_timestamp: z.iso.datetime().nullable(),
    is_expired: z.boolean(),
}).register(dsbunnyRegistry, {
    id: 'RecipeOutputRecordSchema',
    description: 'Recipe output record',
});
const ListQueryPaginationSchema = z.object({
    validity: z.enum(['all', 'valid', 'expired']).optional(),
    sort_dir: z.enum(['asc', 'desc']).optional(),
    max_results: z.number().int().min(1).max(100).optional(),
    next_token: z.string().optional(),
}).register(dsbunnyRegistry, {
    id: 'ListQueryPaginationSchema',
    description: 'Pagination and filtering options for list queries'
});
export const ListRecipeInputsRequestSchema = ListQueryPaginationSchema.extend({
    validity: z.enum(['all', 'valid', 'expired', 'latest', 'active']).optional(),
    publish_id: z.array(z.uuid()).optional(),
    canvas_id: z.array(z.uuid()).optional(),
    viewport_id: z.array(z.string()).optional(),
    playlist_id: z.array(z.uuid()).optional(),
    asset_id: z.array(z.uuid()).optional(),
    sort_by: z.enum([
        'publisher_identity',
        'create_timestamp',
        'modify_timestamp',
        'expiry_timestamp',
    ]).optional(),
}).register(dsbunnyRegistry, {
    id: 'ListRecipeInputsRequestSchema',
    description: 'List recipe inputs request',
});
export const ListRecipeInputsResponseSchema = z.object({
    recipe_inputs: z.array(RecipeInputRecordSchema)
        .describe('List of recipe inputs.'),
    next_token: z.string().nullable()
        .describe('Token for fetching the next page of results, if available.'),
}).register(dsbunnyRegistry, {
    id: 'ListRecipeInputsResponseSchema',
    description: 'List recipe inputs response',
});
export const ListRecipesRequestSchema = ListQueryPaginationSchema.extend({
    recipe_id: z.array(z.uuid()).optional(),
    publish_id: z.array(z.uuid()).optional(),
    canvas_id: z.array(z.uuid()).optional(),
    viewport_id: z.array(z.string()).optional(),
    sort_by: z.enum([
        'publisher_identity',
        'create_timestamp',
        'modify_timestamp',
        'expiry_timestamp',
    ]).optional(),
}).register(dsbunnyRegistry, {
    id: 'ListRecipesRequestSchema',
    description: 'List recipe outputs request schema',
});
export const ListRecipesResponseSchema = z.object({
    recipes: z.array(RecipeOutputRecordSchema)
        .describe('List of recipe outputs.'),
    next_token: z.string().nullable()
        .describe('Token for fetching the next page of results, if available.'),
}).register(dsbunnyRegistry, {
    id: 'ListRecipesResponseSchema',
    description: 'List recipe outputs response schema',
});
export const GetRecipeRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetRecipeRequestSchema',
    description: 'Get recipe output request schema',
});
export const GetRecipeResponseSchema = RecipeOutputRecordSchema.register(dsbunnyRegistry, {
    id: 'GetRecipeResponseSchema',
    description: 'Get recipe output response schema',
});
export const GetRecipeLinkRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetRecipeLinkRequestSchema',
    description: 'Get recipe link request schema',
});
export const GetRecipeLinkResponseSchema = RecipeSchema.RecipeLinkSchema.register(dsbunnyRegistry, {
    id: 'GetRecipeLinkResponseSchema',
    description: 'Get recipe link response schema',
});
export const GetRecipeInputRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetRecipeInputRequestSchema',
    description: 'Get recipe input request schema',
});
export const GetRecipeInputResponseSchema = RecipeInputRecordSchema.register(dsbunnyRegistry, {
    id: 'GetRecipeInputResponseSchema',
    description: 'Get recipe input response schema',
});
export const CreateRecipeRequestSchema = z.object({
    tenant_id: z.uuid()
        .describe('Tenant ID'),
    recipe_input: RecipeInputSchema
        .describe('The common input and baked schedule for this publish.'),
    expires: z.iso.datetime().optional()
        .describe('Optional expiration date of the recipes'),
}).register(dsbunnyRegistry, {
    id: 'CreateRecipeRequestSchema',
    description: 'Create recipe request schema',
});
export const CreateRecipeResponseSchema = z.object({
    recipe_outputs: z.array(RecipeOutputDescriptorSchema.extend({
        recipe_link: RecipeSchema.RecipeLinkSchema,
        timestamp: z.iso.datetime(),
    }))
        .describe('Created recipe outputs and their links'),
}).register(dsbunnyRegistry, {
    id: 'CreateRecipeResponseSchema',
    description: 'Create recipe response schema',
});
export const RecipeDbRequestSchema = z.union([
    CreateRecipeRequestSchema,
    GetRecipeRequestSchema,
    GetRecipeLinkRequestSchema,
    GetRecipeInputRequestSchema,
    ListRecipeInputsRequestSchema,
    ListRecipesRequestSchema,
]).register(dsbunnyRegistry, {
    id: 'RecipeDbRequestSchema',
    description: 'RecipeDB request schema',
});
export const RecipeDbResponseSchema = z.union([
    CreateRecipeResponseSchema,
    GetRecipeResponseSchema,
    GetRecipeLinkResponseSchema,
    GetRecipeInputResponseSchema,
    ListRecipeInputsResponseSchema,
    ListRecipesResponseSchema,
    ErrorResponseSchema,
]).register(dsbunnyRegistry, {
    id: 'RecipeDbResponseSchema',
    description: 'RecipeDB response schema',
});
//# sourceMappingURL=api.schema.js.map