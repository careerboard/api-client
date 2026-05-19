# `@careerboard/api-client`

Typed Node.js client for the Careerboard Public API.

The package is meant to be installed directly from GitHub and already ships with prebuilt `dist`, so consumers do not need a separate build step.

## Install

```bash
npm install github:careerboard/api-client
```

```bash
pnpm add github:careerboard/api-client
```

```bash
yarn add careerboard/api-client
```

## Quick start

```ts
import { createCareerboardClient } from "@careerboard/api-client";

const client = createCareerboardClient(process.env.CAREERBOARD_API_KEY!);

const me = await client.auth.me();
const projects = await client.projects.list();
```

By default the client talks to:

```txt
https://api.careerboard.leverton.dev
```

Override it when you need a different environment:

```ts
import { createCareerboardClient } from "@careerboard/api-client";

const client = createCareerboardClient({
  apiKey: process.env.CAREERBOARD_API_KEY!,
  baseUrl: "http://localhost:3000",
  timeout: 30_000,
});
```

## Auth

Only an API key is required. The client automatically sends it as the `x-api-key` header.

You can rotate the key without recreating the client:

```ts
client.setApiKey(process.env.CAREERBOARD_API_KEY_NEXT!);
```

## Shape of the SDK

The wrapper returns parsed response bodies instead of raw Axios responses.

Main entry points:

- `client.downloads.getUrl({ storedFileId })`
- `client.auth.me()`
- `client.status.get()`
- `client.tasks.get({ taskId })`
- `client.billing.getBalance()`
- `client.billing.listUsageCharges(query)`
- `client.projects.list()`
- `client.projects.candidateProfile.get({ projectId })`
- `client.projects.firstSetup.get({ projectId })`
- `client.projects.interviews.list({ projectId, fromDate, toDate })`
- `client.projects.getProgressBoard({ projectId })`
- `client.projects.checkProgressBoardDuplicate({ projectId }, body)`
- `client.projects.vacancyScraping.createRun({ projectId }, body)`
- `client.projects.vacancyScraping.listResults({ projectId }, params?)`
- `client.progressBoard.interviews.getAi({ interviewId })`
- `client.progressBoard.items.get({ itemId })`
- `client.progressBoard.items.comments.list({ itemId })`
- `client.progressBoard.items.comments.createWidget({ itemId }, body)`
- `client.progressBoard.items.interviews.list({ itemId })`
- `client.progressBoard.items.tailoredResume.generate({ itemId }, body)`
- `client.progressBoard.items.coverLetter.exportPdf({ itemId })`
- `client.tailoredResumes.photo.createUpload({ resumeId }, body)`
- `client.vacancyScraping.cancelRun({ runId })`
- `client.vacancyScraping.retryRun({ runId })`
- `client.vacancyScraping.runSource({ sourceId })`

If you need the generated client directly, use:

```ts
const rawResponse = await client.raw.publicApi.projectsList();
const body = rawResponse.data;
```

You also have direct access to the configured Axios transport through `client.transport`.

## Exports

The package exports:

- `createCareerboardClient(...)`
- `createClient(...)`
- `DEFAULT_CAREERBOARD_API_BASE_URL`
- the full generated public API types and classes from `src/generated/public-api.ts`

## Local development

Sync the generated source from the backend checkout:

```bash
npm run sync:generated
```

Build the library:

```bash
npm run build
```

Type-check the source:

```bash
npm run typecheck
```

## Build output

`npm run build` produces:

- `dist/index.js` for ESM consumers
- `dist/index.cjs` for CommonJS consumers
- `dist/index.d.ts` for TypeScript consumers

The bundle targets Node.js 16+ and is suitable for installing straight from GitHub.

## API docs

- Swagger UI: https://api.careerboard.leverton.dev/public-api-docs
