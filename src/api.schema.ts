// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from '@dsbunny/patch-schema';
import { RecipeTemplateSchema } from "@dsbunny/publisher-schema";
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
export type CanvasViewport = z.infer<typeof CanvasViewportSchema>;

export const CanvasViewportArraySchema = z.array(CanvasViewportSchema).min(1)
	.refine(
		canvas_viewports => new Set(canvas_viewports.map(({ canvas_id }) => canvas_id)).size === canvas_viewports.length,
		'Canvas identifiers must be unique.',
	).register(dsbunnyRegistry, {
		id: 'CanvasViewportArraySchema',
		description: 'Array of canvas-to-viewport mappings',
	});

export const PlaylistInputSchema = RecipeSchema.PlaylistSchema.omit({
	playlist_id: true,
}).register(dsbunnyRegistry, {
	id: 'PlaylistInputSchema',
	description: 'Input for creating a playlist',
});
export type PlaylistInput = z.infer<typeof PlaylistInputSchema>;

export const PlaylistRecordSchema = RecipeSchema.PlaylistSchema.extend({
	tenant_id: z.uuid(),
	create_timestamp: z.iso.datetime(),
	modify_timestamp: z.iso.datetime(),
}).register(dsbunnyRegistry, {
	id: 'PlaylistRecordSchema',
	description: 'Playlist record',
});
export type PlaylistRecord = z.infer<typeof PlaylistRecordSchema>;

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
export type RecipeInput = z.infer<typeof RecipeInputSchema>;

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
export type RecipeInputRecord = z.infer<typeof RecipeInputRecordSchema>;

export const RecipeOutputDescriptorSchema = z.object({
	canvas_id: z.uuid(),
	viewport_id: z.string(),
}).register(dsbunnyRegistry, {
	id: 'RecipeOutputDescriptorSchema',
	description: 'Canvas and viewport for one output recipe',
});
export type RecipeOutputDescriptor = z.infer<typeof RecipeOutputDescriptorSchema>;

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
export type RecipeOutputRecord = z.infer<typeof RecipeOutputRecordSchema>;

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
export type ListRecipeInputsRequest = z.infer<typeof ListRecipeInputsRequestSchema>;

export const ListRecipeInputsResponseSchema = z.object({
	recipe_inputs: z.array(RecipeInputRecordSchema)
		.describe('List of recipe inputs.'),
	next_token: z.string().nullable()
		.describe('Token for fetching the next page of results, if available.'),
}).register(dsbunnyRegistry, {
	id: 'ListRecipeInputsResponseSchema',
	description: 'List recipe inputs response',
});
export type ListRecipeInputsResponse = z.infer<typeof ListRecipeInputsResponseSchema>;

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
export type ListRecipesRequest = z.infer<typeof ListRecipesRequestSchema>;
export const ListRecipesResponseSchema = z.object({
	recipes: z.array(RecipeOutputRecordSchema)
		.describe('List of recipe outputs.'),
	next_token: z.string().nullable()
		.describe('Token for fetching the next page of results, if available.'),
}).register(dsbunnyRegistry, {
	id: 'ListRecipesResponseSchema',
	description: 'List recipe outputs response schema',
});
export type ListRecipesResponse = z.infer<typeof ListRecipesResponseSchema>;

export const GetRecipeRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetRecipeRequestSchema',
	description: 'Get recipe output request schema',
});
export type GetRecipeRequest = z.infer<typeof GetRecipeRequestSchema>;
export const GetRecipeResponseSchema = RecipeOutputRecordSchema.register(dsbunnyRegistry, {
	id: 'GetRecipeResponseSchema',
	description: 'Get recipe output response schema',
});
export type GetRecipeResponse = z.infer<typeof GetRecipeResponseSchema>;

export const GetRecipeLinkRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetRecipeLinkRequestSchema',
	description: 'Get recipe link request schema',
});
export type GetRecipeLinkRequest = z.infer<typeof GetRecipeLinkRequestSchema>;
export const GetRecipeLinkResponseSchema = RecipeSchema.RecipeLinkSchema.register(dsbunnyRegistry, {
	id: 'GetRecipeLinkResponseSchema',
	description: 'Get recipe link response schema',
});
export type GetRecipeLinkResponse = z.infer<typeof GetRecipeLinkResponseSchema>;

export const GetRecipeInputRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetRecipeInputRequestSchema',
	description: 'Get recipe input request schema',
});
export type GetRecipeInputRequest = z.infer<typeof GetRecipeInputRequestSchema>;
export const GetRecipeInputResponseSchema = RecipeInputRecordSchema.register(dsbunnyRegistry, {
	id: 'GetRecipeInputResponseSchema',
	description: 'Get recipe input response schema',
});
export type GetRecipeInputResponse = z.infer<typeof GetRecipeInputResponseSchema>;

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
export type CreateRecipeRequest = z.infer<typeof CreateRecipeRequestSchema>;
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
export type CreateRecipeResponse = z.infer<typeof CreateRecipeResponseSchema>;

// #region Playlist
export const CreatePlaylistRequestSchema = z.object({
	tenant_id: z.uuid()
		.describe('Tenant ID'),
	playlist_input: RecipeSchema.PlaylistSchema
		.describe('Assets for the playlist'),
}).register(dsbunnyRegistry, {
	id: 'CreatePlaylistRequestSchema',
	description: 'Create playlist request schema',
});
export type CreatePlaylistRequest = z.infer<typeof CreatePlaylistRequestSchema>;
export const CreatePlaylistResponseSchema = z.object({
	playlist_id: z.uuid()
		.describe('ID of the created playlist'),
	create_timestamp: z.iso.datetime()
		.describe('Timestamp of when the playlist was created'),
}).register(dsbunnyRegistry, {
	id: 'CreatePlaylistResponseSchema',
	description: 'Create playlist response schema',
});
export type CreatePlaylistResponse = z.infer<typeof CreatePlaylistResponseSchema>;

export const GetPlaylistRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetPlaylistRequestSchema',
	description: 'Get playlist request schema',
});
export type GetPlaylistRequest = z.infer<typeof GetPlaylistRequestSchema>;
export const GetPlaylistResponseSchema = PlaylistRecordSchema.register(dsbunnyRegistry, {
	id: 'GetPlaylistResponseSchema',
	description: 'Get playlist response schema',
});
export type GetPlaylistResponse = z.infer<typeof GetPlaylistResponseSchema>;

export const PatchPlaylistRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
	id: 'PatchPlaylistRequestSchema',
	description: 'Patch playlist request schema',
});
export type PatchPlaylistRequest = z.infer<typeof PatchPlaylistRequestSchema>;
export const PatchPlaylistResponseSchema = PlaylistRecordSchema.register(dsbunnyRegistry, {
	id: 'PatchPlaylistResponseSchema',
	description: 'Patch playlist response schema',
});
export type PatchPlaylistResponse = z.infer<typeof PatchPlaylistResponseSchema>;

export const DeletePlaylistRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'DeletePlaylistRequestSchema',
	description: 'Delete playlist request schema',
});
export type DeletePlaylistRequest = z.infer<typeof DeletePlaylistRequestSchema>;
export const DeletePlaylistResponseSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'DeletePlaylistResponseSchema',
	description: 'Delete playlist response schema',
});
export type DeletePlaylistResponse = z.infer<typeof DeletePlaylistResponseSchema>;

export const ListPlaylistsRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'ListPlaylistsRequestSchema',
	description: 'List playlists request schema',
});
export type ListPlaylistsRequest = z.infer<typeof ListPlaylistsRequestSchema>;
export const ListPlaylistsResponseSchema = z.object({
	playlist_records: z.array(PlaylistRecordSchema)
		.describe('List of playlists for the tenant'),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListPlaylistsResponseSchema',
	description: 'List playlists response schema',
});
export type ListPlaylistsResponse = z.infer<typeof ListPlaylistsResponseSchema>;

export const QueryPlaylistByTemplateRequestSchema = z.object({
	tenant_id: z.uuid()
		.describe('Tenant ID'),
	playlist_template: RecipeTemplateSchema.PlaylistTemplateSchema
		.describe('Assets for the playlist'),
}).register(dsbunnyRegistry, {
	id: 'QueryPlaylistByTemplateRequestSchema',
	description: 'Query playlist by template request schema',
});
export type QueryPlaylistByTemplateRequest = z.infer<typeof QueryPlaylistByTemplateRequestSchema>;
export const QueryPlaylistByTemplateResponseSchema = RecipeSchema.PlaylistSchema.register(dsbunnyRegistry, {
	id: 'QueryPlaylistByTemplateResponseSchema',
	description: 'Query playlist by template response schema',
});
export type QueryPlaylistByTemplateResponse = z.infer<typeof QueryPlaylistByTemplateResponseSchema>;

export const GetPlaylistSuggestionsRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetPlaylistSuggestionsRequestSchema',
	description: 'Get playlist suggestions request schema',
});
export type GetPlaylistSuggestionsRequest = z.infer<typeof GetPlaylistSuggestionsRequestSchema>;
export const GetPlaylistSuggestionsResponseSchema = z.object({
	c: z.tuple([z.string(), z.string().nullable()])
		.describe('Playlist name auto-complete for given prefix'),
	s: z.array(z.tuple([z.string(), z.string().nullable()]))
		.describe('Playlist name suggestions for given input'),
}).register(dsbunnyRegistry, {
	id: 'GetPlaylistSuggestionsResponseSchema',
	description: 'Get playlist suggestions response schema',
});
export type GetPlaylistSuggestionsResponse = z.infer<typeof GetPlaylistSuggestionsResponseSchema>;

export const GetPlaylistAvailabilityRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetPlaylistAvailabilityRequestSchema',
	description: 'Get playlist availability request schema',
});
export type GetPlaylistAvailabilityRequest = z.infer<typeof GetPlaylistAvailabilityRequestSchema>;
export const GetPlaylistAvailabilityResponseSchema = z.object({
	is_available: z.boolean()
		.describe('Indicates if the playlist name is available'),
}).register(dsbunnyRegistry, {
	id: 'GetPlaylistAvailabilityResponseSchema',
	description: 'Get playlist availability response schema',
});
export type GetPlaylistAvailabilityResponse = z.infer<typeof GetPlaylistAvailabilityResponseSchema>;
// #endregion

// #region APIs
export const RecipeDbRequestSchema = z.union([
	CreateRecipeRequestSchema,
	GetRecipeRequestSchema,
	GetRecipeLinkRequestSchema,
	GetRecipeInputRequestSchema,
	ListRecipeInputsRequestSchema,
	ListRecipesRequestSchema,
	CreatePlaylistRequestSchema,
	GetPlaylistRequestSchema,
	ListPlaylistsRequestSchema,
	GetPlaylistSuggestionsRequestSchema,
	GetPlaylistAvailabilityRequestSchema,
]).register(dsbunnyRegistry, {
	id: 'RecipeDbRequestSchema',
	description: 'RecipeDB request schema',
});
export type RecipeDbRequest = z.infer<typeof RecipeDbRequestSchema>;

export const RecipeDbResponseSchema = z.union([
	CreateRecipeResponseSchema,
	GetRecipeResponseSchema,
	GetRecipeLinkResponseSchema,
	GetRecipeInputResponseSchema,
	ListRecipeInputsResponseSchema,
	ListRecipesResponseSchema,
	CreatePlaylistResponseSchema,
	GetPlaylistResponseSchema,
	ListPlaylistsResponseSchema,
	GetPlaylistSuggestionsResponseSchema,
	GetPlaylistAvailabilityResponseSchema,
	ErrorResponseSchema,
]).register(dsbunnyRegistry, {
	id: 'RecipeDbResponseSchema',
	description: 'RecipeDB response schema',
});
export type RecipeDbResponse = z.infer<typeof RecipeDbResponseSchema>;
// #endregion
