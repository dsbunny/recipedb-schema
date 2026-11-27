// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from '@dsbunny/patch-schema';
import { RecipeTemplateSchema } from './recipe-template.schema.js';
import { RecipeSchema } from "@dsbunny/recipe-schema";

export const RecipeDbPingResponseSchema = z.object({
	ping: z.literal('pong'),
	timestamp: z.iso.datetime(),
}).register(dsbunnyRegistry, {
	id: 'RecipeDbPingResponseSchema',
	description: 'RecipeDB ping response schema',
});
export type RecipeDbPingResponse = z.infer<typeof RecipeDbPingResponseSchema>;

export const CanvasViewportInputSchema = z.object({
	'@type': z.literal('CanvasViewportInput')
		.describe('Type of the canvas viewport object'),
	canvas_id: z.uuid()
		.describe('Canvas identifier'),
	viewport_ids: z.array(z.string()).min(1)
		.refine(viewport_ids => new Set(viewport_ids).size === viewport_ids.length, 'Viewport identifiers must be unique.')
		.describe('Viewport identifiers for this canvas'),
}).register(dsbunnyRegistry, {
	id: 'CanvasViewportInputSchema',
	description: 'Canvas and its viewport identifiers',
});
export type CanvasViewportInput = z.infer<typeof CanvasViewportInputSchema>;

export const CanvasViewportInputArraySchema = z.array(CanvasViewportInputSchema).min(1)
	.refine(
		canvas_viewports => new Set(canvas_viewports.map(({ canvas_id }) => canvas_id)).size === canvas_viewports.length,
		'Canvas identifiers must be unique.',
	).register(dsbunnyRegistry, {
		id: 'CanvasViewportInputArraySchema',
		description: 'Array of canvas-to-viewport mappings',
	});

export const CanvasViewportRecordSchema = CanvasViewportInputSchema.extend({
	'@type': z.literal('CanvasViewportRecord')
		.describe('Type of the canvas viewport record object'),
	is_active: z.boolean()
		.describe('Indicates if the canvas viewport is active'),
	is_latest: z.boolean()
		.describe('Indicates if the canvas viewport is the latest one'),
}).register(dsbunnyRegistry, {
	id: 'CanvasViewportRecordSchema',
	description: 'Canvas viewport record',
});
export type CanvasViewportRecord = z.infer<typeof CanvasViewportRecordSchema>;

export const CanvasViewportRecordArraySchema = z.array(CanvasViewportRecordSchema).min(1)
	.register(dsbunnyRegistry, {
		id: 'CanvasViewportRecordArraySchema',
		description: 'Array of canvas viewport records',
	});
export type CanvasViewportRecordArray = z.infer<typeof CanvasViewportRecordArraySchema>;

export const PlaylistInputSchema = RecipeSchema.PlaylistSchema.omit({
	playlist_id: true,
}).extend({
	'@type': z.literal('PlaylistInput')
		.describe('Type of the playlist input object'),
}).register(dsbunnyRegistry, {
	id: 'PlaylistInputSchema',
	description: 'Input for creating a playlist',
});
export type PlaylistInput = z.infer<typeof PlaylistInputSchema>;

export const PlaylistRecordSchema = RecipeSchema.PlaylistSchema.extend({
	'@type': z.literal('PlaylistRecord')
		.describe('Type of the playlist record object'),
	tenant_id: z.uuid(),
	is_active: z.boolean()
		.describe('Indicates if the playlist is active'),
	create_timestamp: z.iso.datetime(),
	modify_timestamp: z.iso.datetime(),
	expiry_timestamp: z.iso.datetime().nullable()
		.describe('Expiry timestamp of the playlist'),
}).register(dsbunnyRegistry, {
	id: 'PlaylistRecordSchema',
	description: 'Playlist record',
});
export type PlaylistRecord = z.infer<typeof PlaylistRecordSchema>;

export const RecipeInputSchema = RecipeSchema.RecipeBaseSchema.extend({
	'@type': z.literal('RecipeInput')
		.describe('Type of the recipe input object'),
	publish_id: z.uuid()
		.describe('Publish identifier'),
	publisher_identity: z.string().min(1).max(256)
		.describe('Identity of the publishing user'),
	canvas_viewports: CanvasViewportInputArraySchema,
}).register(dsbunnyRegistry, {
	id: 'RecipeInputSchema',
	description: 'Shared input for all outputs created by one publish',
});
export type RecipeInput = z.infer<typeof RecipeInputSchema>;

export const RecipeInputRecordSchema = z.object({
	'@type': z.literal('RecipeInputRecord')
		.describe('Type of the recipe input record object'),
	tenant_id: z.uuid(),
	publish_id: z.uuid(),
	publisher_identity: z.string(),
	canvas_viewports: CanvasViewportRecordArraySchema,
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
	'@type': z.literal('RecipeOutputDescriptor')
		.describe('Type of the recipe output descriptor object'),
	canvas_id: z.uuid(),
	viewport_id: z.string(),
}).register(dsbunnyRegistry, {
	id: 'RecipeOutputDescriptorSchema',
	description: 'Canvas and viewport for one output recipe',
});
export type RecipeOutputDescriptor = z.infer<typeof RecipeOutputDescriptorSchema>;

export const RecipeOutputRecordSchema = z.object({
	'@type': z.literal('RecipeOutputRecord')
		.describe('Type of the recipe output record object'),
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
	'@type': z.literal('ListQueryPagination')
		.describe('Type of the list query pagination object'),
	validity: z.enum(['all', 'valid', 'expired']).optional(),
	sort_dir: z.enum(['asc', 'desc']).optional(),
	max_results: z.number().int().min(1).max(100).optional(),
	next_token: z.string().optional(),
}).register(dsbunnyRegistry, {
	id: 'ListQueryPaginationSchema',
	description: 'Pagination and filtering options for list queries'
});

export const ListRecipeInputsRequestSchema = ListQueryPaginationSchema.extend({
	'@type': z.literal('ListRecipeInputsRequest')
		.describe('Type of the list recipe inputs request object'),
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
	'@type': z.literal('ListRecipeInputsResponse')
		.describe('Type of the list recipe inputs response object'),
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
	'@type': z.literal('ListRecipesRequest')
		.describe('Type of the list recipes request object'),
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
	'@type': z.literal('ListRecipesResponse')
		.describe('Type of the list recipes response object'),
	recipes: z.array(RecipeOutputRecordSchema)
		.describe('List of recipe outputs.'),
	next_token: z.string().nullable()
		.describe('Token for fetching the next page of results, if available.'),
}).register(dsbunnyRegistry, {
	id: 'ListRecipesResponseSchema',
	description: 'List recipe outputs response schema',
});
export type ListRecipesResponse = z.infer<typeof ListRecipesResponseSchema>;

export const GetRecipeRequestSchema = z.object({
	'@type': z.literal('GetRecipeRequest')
		.describe('Type of the get recipe request object'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetRecipeRequestSchema',
	description: 'Get recipe output request schema',
});
export type GetRecipeRequest = z.infer<typeof GetRecipeRequestSchema>;
export const GetRecipeResponseSchema = z.object({
	'@type': z.literal('GetRecipeResponse')
		.describe('Type of the get recipe response object'),
	recipe_output: RecipeOutputRecordSchema,
}).register(dsbunnyRegistry, {
	id: 'GetRecipeResponseSchema',
	description: 'Get recipe output response schema',
});
export type GetRecipeResponse = z.infer<typeof GetRecipeResponseSchema>;

export const GetRecipeLinkRequestSchema = z.object({
	'@type': z.literal('GetRecipeLinkRequest')
		.describe('Type of the get recipe link request object'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetRecipeLinkRequestSchema',
	description: 'Get recipe link request schema',
});
export type GetRecipeLinkRequest = z.infer<typeof GetRecipeLinkRequestSchema>;
export const GetRecipeLinkResponseSchema = z.object({
	'@type': z.literal('GetRecipeLinkResponse')
		.describe('Type of the get recipe link response object'),
	recipe_link: RecipeSchema.RecipeLinkSchema,
}).register(dsbunnyRegistry, {
	id: 'GetRecipeLinkResponseSchema',
	description: 'Get recipe link response schema',
});
export type GetRecipeLinkResponse = z.infer<typeof GetRecipeLinkResponseSchema>;

export const GetRecipeInputRequestSchema = z.object({
	'@type': z.literal('GetRecipeInputRequest')
		.describe('Type of the get recipe input request object'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetRecipeInputRequestSchema',
	description: 'Get recipe input request schema',
});
export type GetRecipeInputRequest = z.infer<typeof GetRecipeInputRequestSchema>;
export const GetRecipeInputResponseSchema = z.object({
	'@type': z.literal('GetRecipeInputResponse')
		.describe('Type of the get recipe input response object'),
	recipe_input: RecipeInputRecordSchema,
}).register(dsbunnyRegistry, {
	id: 'GetRecipeInputResponseSchema',
	description: 'Get recipe input response schema',
});
export type GetRecipeInputResponse = z.infer<typeof GetRecipeInputResponseSchema>;

export const CreateRecipeBodySchema = z.object({
	'@type': z.literal('CreateRecipeRequest')
		.describe('Type of the create recipe request object'),
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
export type CreateRecipeBody = z.infer<typeof CreateRecipeBodySchema>;
/** @deprecated Use CreateRecipeBodySchema. */
export const CreateRecipeRequestSchema = CreateRecipeBodySchema;
/** @deprecated Use CreateRecipeBody. */
export type CreateRecipeRequest = CreateRecipeBody;
export const CreateRecipeResponseSchema = z.object({
	'@type': z.literal('CreateRecipeResponse')
		.describe('Type of the create recipe response object'),
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
export const CreatePlaylistBodySchema = z.object({
	'@type': z.literal('CreatePlaylistRequest')
		.describe('Type of the create playlist request object'),
	tenant_id: z.uuid()
		.describe('Tenant ID'),
	playlist_input: PlaylistInputSchema
		.describe('Assets for the playlist'),
}).register(dsbunnyRegistry, {
	id: 'CreatePlaylistRequestSchema',
	description: 'Create playlist request schema',
});
export type CreatePlaylistBody = z.infer<typeof CreatePlaylistBodySchema>;
/** @deprecated Use CreatePlaylistBodySchema. */
export const CreatePlaylistRequestSchema = CreatePlaylistBodySchema;
/** @deprecated Use CreatePlaylistBody. */
export type CreatePlaylistRequest = CreatePlaylistBody;
export const CreatePlaylistResponseSchema = z.object({
	'@type': z.literal('CreatePlaylistResponse')
		.describe('Type of the create playlist response object'),
	playlist_id: z.uuid()
		.describe('ID of the created playlist'),
	create_timestamp: z.iso.datetime()
		.describe('Timestamp of when the playlist was created'),
}).register(dsbunnyRegistry, {
	id: 'CreatePlaylistResponseSchema',
	description: 'Create playlist response schema',
});
export type CreatePlaylistResponse = z.infer<typeof CreatePlaylistResponseSchema>;

export const GetPlaylistRequestSchema = z.object({
	'@type': z.literal('GetPlaylistRequest')
		.describe('Type of the get playlist request object'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetPlaylistRequestSchema',
	description: 'Get playlist request schema',
});
export type GetPlaylistRequest = z.infer<typeof GetPlaylistRequestSchema>;
export const GetPlaylistResponseSchema = z.object({
	'@type': z.literal('GetPlaylistResponse')
		.describe('Type of the get playlist response object'),
	playlist_record: PlaylistRecordSchema,
}).register(dsbunnyRegistry, {
	id: 'GetPlaylistResponseSchema',
	description: 'Get playlist response schema',
});
export type GetPlaylistResponse = z.infer<typeof GetPlaylistResponseSchema>;

export const PatchPlaylistBodySchema = z.object({
	'@type': z.literal('PatchPlaylistRequest')
		.describe('Type of the patch playlist request object'),
	patch_operations: z.array(JsonPatchOperationSchema).max(50)
}).register(dsbunnyRegistry, {
	id: 'PatchPlaylistRequestSchema',
	description: 'Patch playlist request schema',
});
export type PatchPlaylistBody = z.infer<typeof PatchPlaylistBodySchema>;
/** @deprecated Use PatchPlaylistBodySchema. */
export const PatchPlaylistRequestSchema = PatchPlaylistBodySchema;
/** @deprecated Use PatchPlaylistBody. */
export type PatchPlaylistRequest = PatchPlaylistBody;
export const PatchPlaylistResponseSchema = z.object({
	'@type': z.literal('PatchPlaylistResponse')
		.describe('Type of the patch playlist response object'),
	playlist_record: PlaylistRecordSchema,
}).register(dsbunnyRegistry, {
	id: 'PatchPlaylistResponseSchema',
	description: 'Patch playlist response schema',
});
export type PatchPlaylistResponse = z.infer<typeof PatchPlaylistResponseSchema>;

export const DeletePlaylistRequestSchema = z.object({
	'@type': z.literal('DeletePlaylistRequest')
		.describe('Type of the delete playlist request object'),
}).optional().register(dsbunnyRegistry, {
	id: 'DeletePlaylistRequestSchema',
	description: 'Delete playlist request schema',
});
export type DeletePlaylistRequest = z.infer<typeof DeletePlaylistRequestSchema>;
export const DeletePlaylistResponseSchema = z.object({
	'@type': z.literal('DeletePlaylistResponse')
		.describe('Type of the delete playlist response object'),
}).optional().register(dsbunnyRegistry, {
	id: 'DeletePlaylistResponseSchema',
	description: 'Delete playlist response schema',
});
export type DeletePlaylistResponse = z.infer<typeof DeletePlaylistResponseSchema>;

export const ListPlaylistsRequestSchema = z.object({
	'@type': z.literal('ListPlaylistsRequest')
		.describe('Type of the list playlists request object'),
}).optional().register(dsbunnyRegistry, {
	id: 'ListPlaylistsRequestSchema',
	description: 'List playlists request schema',
});
export type ListPlaylistsRequest = z.infer<typeof ListPlaylistsRequestSchema>;
export const ListPlaylistsResponseSchema = z.object({
	'@type': z.literal('ListPlaylistsResponse')
		.describe('Type of the list playlists response object'),
	playlist_records: z.array(PlaylistRecordSchema)
		.describe('List of playlists for the tenant'),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListPlaylistsResponseSchema',
	description: 'List playlists response schema',
});
export type ListPlaylistsResponse = z.infer<typeof ListPlaylistsResponseSchema>;

export const QueryPlaylistByTemplateBodySchema = z.object({
	'@type': z.literal('QueryPlaylistByTemplateRequest')
		.describe('Type of the query playlist by template request object'),
	tenant_id: z.uuid()
		.describe('Tenant ID'),
	playlist_template: RecipeTemplateSchema.PlaylistTemplateSchema
		.describe('Assets for the playlist'),
}).register(dsbunnyRegistry, {
	id: 'QueryPlaylistByTemplateRequestSchema',
	description: 'Query playlist by template request schema',
});
export type QueryPlaylistByTemplateBody = z.infer<typeof QueryPlaylistByTemplateBodySchema>;
/** @deprecated Use QueryPlaylistByTemplateBodySchema. */
export const QueryPlaylistByTemplateRequestSchema = QueryPlaylistByTemplateBodySchema;
/** @deprecated Use QueryPlaylistByTemplateBody. */
export type QueryPlaylistByTemplateRequest = QueryPlaylistByTemplateBody;
export const QueryPlaylistByTemplateResponseSchema = z.object({
	'@type': z.literal('QueryPlaylistByTemplateResponse')
		.describe('Type of the query playlist by template response object'),
	playlist: RecipeSchema.PlaylistSchema,
}).register(dsbunnyRegistry, {
	id: 'QueryPlaylistByTemplateResponseSchema',
	description: 'Query playlist by template response schema',
});
export type QueryPlaylistByTemplateResponse = z.infer<typeof QueryPlaylistByTemplateResponseSchema>;

export const GetPlaylistSuggestionsRequestSchema = z.object({
	'@type': z.literal('GetPlaylistSuggestionsRequest')
		.describe('Type of the get playlist suggestions request object'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetPlaylistSuggestionsRequestSchema',
	description: 'Get playlist suggestions request schema',
});
export type GetPlaylistSuggestionsRequest = z.infer<typeof GetPlaylistSuggestionsRequestSchema>;
export const GetPlaylistSuggestionsResponseSchema = z.object({
	'@type': z.literal('GetPlaylistSuggestionsResponse').optional()
		.describe('Type of the get playlist suggestions response object'),
	c: z.tuple([z.string(), z.string().nullable()])
		.describe('Playlist name auto-complete for given prefix'),
	s: z.array(z.tuple([z.string(), z.string().nullable()]))
		.describe('Playlist name suggestions for given input'),
}).register(dsbunnyRegistry, {
	id: 'GetPlaylistSuggestionsResponseSchema',
	description: 'Get playlist suggestions response schema',
});
export type GetPlaylistSuggestionsResponse = z.infer<typeof GetPlaylistSuggestionsResponseSchema>;

export const GetPlaylistAvailabilityRequestSchema = z.object({
	'@type': z.literal('GetPlaylistAvailabilityRequest')
		.describe('Type of the get playlist availability request object'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetPlaylistAvailabilityRequestSchema',
	description: 'Get playlist availability request schema',
});
export type GetPlaylistAvailabilityRequest = z.infer<typeof GetPlaylistAvailabilityRequestSchema>;
export const GetPlaylistAvailabilityResponseSchema = z.object({
	'@type': z.literal('GetPlaylistAvailabilityResponse')
		.describe('Type of the get playlist availability response object'),
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
	CreateRecipeBodySchema,
	GetRecipeRequestSchema,
	GetRecipeLinkRequestSchema,
	GetRecipeInputRequestSchema,
	ListRecipeInputsRequestSchema,
	ListRecipesRequestSchema,
	CreatePlaylistBodySchema,
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

export const RecipeDbRecipeIdParamsSchema = z.object({ recipe_id: z.string() }).register(dsbunnyRegistry, {
	id: 'RecipeDbRecipeIdParamsSchema',
	description: 'RecipeDB recipe ID path parameter schema',
});
export type RecipeDbRecipeIdParams = z.infer<typeof RecipeDbRecipeIdParamsSchema>;

export const PlaylistIdParamsSchema = z.object({ playlist_id: z.string() }).register(dsbunnyRegistry, {
	id: 'PlaylistIdParamsSchema',
	description: 'PlaylistIdParams schema',
});
export type PlaylistIdParams = z.infer<typeof PlaylistIdParamsSchema>;

const commaSeparatedStrings = z.codec(
	z.union([z.string(), z.array(z.string())]),
	z.array(z.string()),
	{
		decode: value => (Array.isArray(value) ? value : [value])
			.flatMap(item => item.split(',').map(part => part.trim()).filter(Boolean)),
		encode: value => value.join(','),
	},
);

export const RecipeIdQuerySchema = z.object({ recipe_id: commaSeparatedStrings }).register(dsbunnyRegistry, {
	id: 'RecipeIdQuerySchema',
	description: 'RecipeIdQuery schema',
});
export type RecipeIdQuery = z.infer<typeof RecipeIdQuerySchema>;

export const PlaylistIdQuerySchema = z.object({ playlist_id: z.array(z.string()) }).register(dsbunnyRegistry, {
	id: 'PlaylistIdQuerySchema',
	description: 'PlaylistIdQuery schema',
});
export type PlaylistIdQuery = z.infer<typeof PlaylistIdQuerySchema>;

export const ListRecipeInputsQuerySchema = z.object({
	max_results: z.string().optional(),
	next_token: z.string().optional(),
	sort_by: z.string().optional(),
	sort_dir: z.string().optional(),
}).extend({
	validity: z.string().optional(),
	recipe_id: z.array(z.string()).optional(),
	publish_id: z.array(z.string()).optional(),
	canvas_id: z.array(z.string()).optional(),
	viewport_id: z.array(z.string()).optional(),
	playlist_id: z.array(z.string()).optional(),
	asset_id: z.array(z.string()).optional(),
}).register(dsbunnyRegistry, {
	id: 'ListRecipeInputsQuerySchema',
	description: 'ListRecipeInputsQuery schema',
});
export type ListRecipeInputsQuery = z.infer<typeof ListRecipeInputsQuerySchema>;

export const ListRecipesQuerySchema = z.object({
	max_results: z.string().optional(),
	next_token: z.string().optional(),
	sort_by: z.string().optional(),
	sort_dir: z.string().optional(),
}).extend({
	recipe_id: z.array(z.string()).optional(),
	publish_id: z.array(z.string()).optional(),
	canvas_id: z.array(z.string()).optional(),
	viewport_id: z.array(z.string()).optional(),
}).register(dsbunnyRegistry, {
	id: 'ListRecipesQuerySchema',
	description: 'ListRecipesQuery schema',
});
export type ListRecipesQuery = z.infer<typeof ListRecipesQuerySchema>;

export const GetPlaylistSuggestionsQuerySchema = z.object({
	q: z.string().optional(), c: z.string().optional(), t: z.string().optional(),
}).register(dsbunnyRegistry, {
	id: 'GetPlaylistSuggestionsQuerySchema',
	description: 'GetPlaylistSuggestionsQuery schema',
});
export type GetPlaylistSuggestionsQuery = z.infer<typeof GetPlaylistSuggestionsQuerySchema>;

export const GetPlaylistAvailabilityQuerySchema = z.object({ name: z.string() }).register(dsbunnyRegistry, {
	id: 'GetPlaylistAvailabilityQuerySchema',
	description: 'GetPlaylistAvailabilityQuery schema',
});
export type GetPlaylistAvailabilityQuery = z.infer<typeof GetPlaylistAvailabilityQuerySchema>;

export const ListPlaylistsQuerySchema = z.object({
	max_results: z.string().optional(),
	next_token: z.string().optional(),
	sort_by: z.string().optional(),
	sort_dir: z.string().optional(),
}).extend({
	id: z.string().optional(),
	playlist_id: z.array(z.string()).optional(),
	q: z.string().optional(),
	tags: z.array(z.string()).optional(),
}).register(dsbunnyRegistry, {
	id: 'ListPlaylistsQuerySchema',
	description: 'ListPlaylistsQuery schema',
});
export type ListPlaylistsQuery = z.infer<typeof ListPlaylistsQuerySchema>;
