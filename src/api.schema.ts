// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { RecipeSchema } from "@dsbunny/recipe-schema";

// #region Recipes
export const ListRecipesRequestSchema = z.object({})
	.describe('List recipes request schema');
export type ListRecipesRequest = z.infer<typeof ListRecipesRequestSchema>;
export const ListRecipesResponseSchema = z.object({
	recipes: z.array(RecipeSchema.RecipeSchema)
		.describe('List of recipes.'),
	next_token: z.string().nullable()
		.describe('Token for fetching the next page of results, if available.'),
})
	.describe('List recipes response schema');
export type ListRecipesResponse = z.infer<typeof ListRecipesResponseSchema>;
// #endregion

// #region List Recipe Links
export const ListRecipeLinksRequestSchema = z.object({})
	.describe('List recipe links request schema');
export type ListRecipeLinksRequest = z.infer<typeof ListRecipeLinksRequestSchema>;
export const ListRecipeLinksResponseSchema = z.object({
	recipe_links: z.array(RecipeSchema.RecipeLinkSchema)
		.describe('List of recipe links.'),
	next_token: z.string().nullable()
		.describe('Token for fetching the next page of results, if available.'),
})
	.describe('List recipe links response schema');
export type ListRecipeLinksResponse = z.infer<typeof ListRecipeLinksResponseSchema>;
// #endregion

// #region Get Recipe
export const GetRecipeRequestSchema = z.object({})
	.describe('Get recipe request schema');
export type GetRecipeRequest = z.infer<typeof GetRecipeRequestSchema>;
export const GetRecipeResponseSchema = RecipeSchema.RecipeSchema
	.describe('Get recipe response schema');
export type GetRecipeResponse = z.infer<typeof GetRecipeResponseSchema>;
// #endregion

// #region Get Recipe Link
export const GetRecipeLinkRequestSchema = z.object({})
	.describe('Get recipe link request schema');
export type GetRecipeLinkRequest = z.infer<typeof GetRecipeLinkRequestSchema>;
export const GetRecipeLinkResponseSchema = RecipeSchema.RecipeLinkSchema
	.describe('Get recipe link response schema');
export type GetRecipeLinkResponse = z.infer<typeof GetRecipeLinkResponseSchema>;
// #endregion

// #region Create Recipe
export const RecipeInputSchema = RecipeSchema.RecipeSchema.omit({ id: true, create_timestamp: true })
	.describe('Input schema for a recipe without the ID.');
export type RecipeInput = z.infer<typeof RecipeInputSchema>;

export const CreateRecipeRequestSchema = z.object({
	tenant_id: z.uuid()
		.describe('Tenant ID'),
	recipe_input: RecipeInputSchema
		.describe('The recipe to be added.'),
	expires: z.iso.datetime().optional()
		.describe("Optional expiration date of the recipe"),
})
	.describe('Add recipe request schema');
export type CreateRecipeRequest = z.infer<typeof CreateRecipeRequestSchema>;
export const CreateRecipeResponseSchema = z.object({
	recipe_link: RecipeSchema.RecipeLinkSchema
		.describe('Link to the added recipe.'),
	timestamp: z.iso.datetime()
		.describe('ISO datetime of the publish.'),
})
	.describe('Create recipe response schema');
export type CreateRecipeResponse = z.infer<typeof CreateRecipeResponseSchema>;
// #endregion

// #region API
export const RecipeDbRequestSchema = z.union([
	CreateRecipeRequestSchema,
	GetRecipeRequestSchema,
	GetRecipeLinkRequestSchema,
	ListRecipesRequestSchema,
	ListRecipeLinksRequestSchema,
])
	.describe('RecipeDB request schema');
export type RecipeDbRequest = z.infer<typeof RecipeDbRequestSchema>;

export const RecipeDbResponseSchema = z.union([
	CreateRecipeResponseSchema,
	GetRecipeResponseSchema,
	GetRecipeLinkResponseSchema,
	ListRecipesResponseSchema,
	ListRecipeLinksResponseSchema,
	ErrorResponseSchema,
])
	.describe('RecipeDB response schema');
export type RecipeDbResponse = z.infer<typeof RecipeDbResponseSchema>;
// #endregion
