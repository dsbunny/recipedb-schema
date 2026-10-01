// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { RecipeSchema } from '@dsbunny/recipe-schema';
import { S3URISchema } from './uri.schema.js';
import { SqliteDateSchema } from './sqlite-date.schema.js';
import { jsonSafeParser } from './json-safe-parser.js';

export const RecipeRecordSchema = z.object({
        recipe_id: z.uuid()
                .describe('The UUID of the recipe'),
        tenant_id: z.uuid()
                .describe('The UUID of the tenant'),
        publish_id: z.uuid()
                .describe('The UUID of the publish event'),
        publisher_identity: z.string().min(1).max(256)
                .describe('The identity of the user who created the recipe'),
        recipe_data: RecipeSchema.RecipeSchema
                .describe('The actual recipe data'),
        recipe_link: RecipeSchema.RecipeLinkSchema
                .describe('The link to the recipe'),
        s3_metadata: z.record(z.string(), z.any())
                .describe('S3 metadata of the recipe'),
        s3_uri: S3URISchema.min(2).max(2048)
                .describe('S3 URI of the recipe'),
        is_legacy: z.boolean().default(false)
                .describe('Whether a newer version of the recipe exists'),
        is_expired: z.boolean().default(false)
                .describe('Whether the recipe is expired'),
        create_timestamp: z.iso.datetime()  // ISO 8601
                .describe('The ISO datetime of the recipe creation'),
        modify_timestamp: z.iso.datetime()
                .describe('The ISO datetime of when the recipe was last modified'),
        expiry_timestamp: z.iso.datetime().nullable()
                .describe('The ISO datetime of when the recipe expires'),
});
export type RecipeRecord = z.infer<typeof RecipeRecordSchema>;

export const DbDtoFromRecipeRecordSchema = RecipeRecordSchema.transform((recipeRecord: RecipeRecord) => {
        return {
                ...recipeRecord,
                recipe_data: JSON.stringify(recipeRecord.recipe_data),
                recipe_link: JSON.stringify(recipeRecord.recipe_link),
                s3_metadata: JSON.stringify(recipeRecord.s3_metadata),
        };
});

export const DbDtoToRecipeRecordSchema = z.object({
        ...RecipeRecordSchema.shape,
        recipe_data: z.string(),
        recipe_link: z.string(),
        s3_metadata: z.string(),
        is_legacy: z.number(),
        is_expired: z.number(),
        create_timestamp: SqliteDateSchema,
        modify_timestamp: SqliteDateSchema,
        expiry_timestamp: SqliteDateSchema.nullable(),
}).transform((dto, ctx): RecipeRecord => {
        const recipe_data_result = jsonSafeParser(RecipeRecordSchema.shape.recipe_data).safeParse(dto.recipe_data);
        if(!recipe_data_result.success) {
                ctx.addIssue({
                        code: "custom",
                        message: 'Invalid JSON in recipe_data field',
                        fatal: true,
                });
                return z.NEVER;
        }
        const recipe_link_result = jsonSafeParser(RecipeRecordSchema.shape.recipe_link).safeParse(dto.recipe_link);
        if(!recipe_link_result.success) {
                ctx.addIssue({
                        code: "custom",
                        message: 'Invalid JSON in recipe_link field',
                        fatal: true,
                });
                return z.NEVER;
        }
        const s3_metadata_result = jsonSafeParser(RecipeRecordSchema.shape.s3_metadata).safeParse(dto.s3_metadata);
        if(!s3_metadata_result.success) {
                ctx.addIssue({
                        code: "custom",
                        message: 'Invalid JSON in s3_metadata field',
                        fatal: true,
                });
                return z.NEVER;
        }
        return {
                ...dto,
                recipe_data: recipe_data_result.data,
                recipe_link: recipe_link_result.data,
                s3_metadata: s3_metadata_result.data,
                is_legacy: Boolean(dto.is_legacy),
                is_expired: Boolean(dto.is_expired),
        };
});
