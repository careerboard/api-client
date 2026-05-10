# AGENTS

Operational rules for AI agents and automated coding helpers working in this repository.

## Contract Rules

1. Do not hand-edit `src/generated/public-api.ts`.
   It is vendored from the backend-generated OpenAPI client and must be refreshed from the backend source instead of manually patched.

2. When the Careerboard public API contract changes, sync the generated file before changing the wrapper.
   Preferred command:
   - `npm run sync:generated`

3. Keep the public wrapper pleasant, stable, and typed.
   Prefer readable module names such as `client.projects.vacancyScraping.listResults(...)` over exposing newly invented flat helper names.

4. The supported auth model for this package is API-key-only.
   Keep `x-api-key` as the only built-in authentication mechanism unless the user explicitly asks to expand the scope.

## Packaging Rules

1. This package is installed from GitHub, not from a published npm registry package.
   Always keep the repository installable as-is.

2. `dist/` is part of the deliverable.
   After source changes, rebuild the library so GitHub installs can work immediately from the checked-in output.

3. Preserve dual-package output.
   The build must keep working for both ESM and CommonJS consumers via `dist/index.js`, `dist/index.cjs`, and `dist/index.d.ts`.

4. Favor broad Node.js compatibility for runtime code.
   Do not introduce unnecessary runtime features that would force newer Node versions without a clear reason.

## Docs Rules

1. Update `README.md` when consumer-facing API shape, install flow, or auth behavior changes.

2. If new top-level wrapper modules are added, document at least one example entry point in the README quick overview.
