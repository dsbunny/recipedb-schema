// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { RecipeSchema } from "@dsbunny/recipe-schema";
// #region Recipes
export const ListRecipesRequestSchema = z.object({})
    .describe('List recipes request schema');
export const ListRecipesResponseSchema = z.object({
    recipes: z.array(RecipeSchema.RecipeSchema)
        .describe('List of recipes.'),
    next_token: z.string().nullable()
        .describe('Token for fetching the next page of results, if available.'),
})
    .describe('List recipes response schema');
// #endregion
// #region List Recipe Links
export const ListRecipeLinksRequestSchema = z.object({})
    .describe('List recipe links request schema');
export const ListRecipeLinksResponseSchema = z.object({
    recipe_links: z.array(RecipeSchema.RecipeLinkSchema)
        .describe('List of recipe links.'),
    next_token: z.string().nullable()
        .describe('Token for fetching the next page of results, if available.'),
})
    .describe('List recipe links response schema');
// #endregion
// #region Get Recipe
export const GetRecipeRequestSchema = z.object({})
    .describe('Get recipe request schema');
export const GetRecipeResponseSchema = RecipeSchema.RecipeSchema
    .describe('Get recipe response schema');
// #endregion
// #region Get Recipe Link
export const GetRecipeLinkRequestSchema = z.object({})
    .describe('Get recipe link request schema');
export const GetRecipeLinkResponseSchema = RecipeSchema.RecipeLinkSchema
    .describe('Get recipe link response schema');
// #endregion
// #region Create Recipe
export const RecipeInputSchema = RecipeSchema.RecipeSchema.omit({ id: true, create_timestamp: true })
    .describe('Input schema for a recipe without the ID.');
export const CreateRecipeRequestSchema = z.object({
    tenant_id: z.uuid()
        .describe('Tenant ID'),
    recipe_input: RecipeInputSchema
        .describe('The recipe to be added.'),
    expires: z.iso.datetime().optional()
        .describe("Optional expiration date of the recipe"),
})
    .describe('Add recipe request schema');
export const CreateRecipeResponseSchema = z.object({
    recipe_link: RecipeSchema.RecipeLinkSchema
        .describe('Link to the added recipe.'),
    timestamp: z.iso.datetime()
        .describe('ISO datetime of the publish.'),
})
    .describe('Create recipe response schema');
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
export const RecipeDbResponseSchema = z.union([
    CreateRecipeResponseSchema,
    GetRecipeResponseSchema,
    GetRecipeLinkResponseSchema,
    ListRecipesResponseSchema,
    ListRecipeLinksResponseSchema,
    ErrorResponseSchema,
])
    .describe('RecipeDB response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map