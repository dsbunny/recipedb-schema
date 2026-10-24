# Changelog
## v3.1.4
- Add `id` _ZOD_ metadata for schemas.

## v3.0.3
- Add `latest` and `active` validity filters for recipe input queries.
- Add per-canvas `is_latest` and `is_active` status to recipe input records.
- Add new `GetRecipeInputRequestSchema` and `ListRecipeInputsRequestSchema` for retrieving _recipe inputs_ that specify origin assets for _viewports_.
- Remove obsolete `ListRecipeLinksRequestSchema` deferring to `GetRecipeLinkRequestSchema`.
- Extend `CreateRecipeRequestSchema` and `CreateRecipeResponseSchema` for sets of _recipes_ instead of single instances.

## v2.1.2
- Extend `RecipeInput` to ignore `modify_timestamp` and `expiry_timestamp`.
- Add `IsoDateSchema` API to enable explicit SQLite timestamp setting.

## v2.0.1
- Split schema definitions to separate Schema suffix to resolve vsCode and tooling confusion.

## v1.0.0
- Initial release.
