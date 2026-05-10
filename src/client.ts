import type { ApiConfig } from "./generated/public-api";
import { HttpClient, PublicApi } from "./generated/public-api";

export const DEFAULT_CAREERBOARD_API_BASE_URL =
  "https://api.careerboard.leverton.dev";

type ClientMethod = (...args: any[]) => Promise<{ data: unknown }>;
type MethodData<TMethod extends ClientMethod> = Awaited<
  ReturnType<TMethod>
>["data"];
type MethodWrapper<TMethod extends ClientMethod> = (
  ...args: Parameters<TMethod>
) => Promise<MethodData<TMethod>>;

export interface CareerboardClientConfig
  extends Omit<
    ApiConfig<string>,
    "baseURL" | "headers" | "securityWorker" | "secure"
  > {
  apiKey: string;
  baseUrl?: string;
  headers?: Record<string, string | undefined>;
}

export type CareerboardRawApi = PublicApi<string>;

function assertApiKey(apiKey: string): string {
  const normalizedApiKey = apiKey.trim();

  if (!normalizedApiKey) {
    throw new Error("Careerboard API key is required.");
  }

  return normalizedApiKey;
}

function normalizeConfig(
  configOrApiKey: CareerboardClientConfig | string,
): CareerboardClientConfig {
  if (typeof configOrApiKey === "string") {
    return {
      apiKey: assertApiKey(configOrApiKey),
    };
  }

  return {
    ...configOrApiKey,
    apiKey: assertApiKey(configOrApiKey.apiKey),
  };
}

function compactHeaders(headers?: Record<string, string | undefined>) {
  return Object.fromEntries(
    Object.entries(headers ?? {}).filter(([, value]) => value !== undefined),
  );
}

function unwrap<TMethod extends ClientMethod>(method: TMethod): MethodWrapper<TMethod> {
  return async (...args) => {
    const response = await method(...args);
    return response.data as MethodData<TMethod>;
  };
}

function createCareerboardClientInstance(
  configOrApiKey: CareerboardClientConfig | string,
) {
  const { apiKey, baseUrl, headers, ...httpConfig } =
    normalizeConfig(configOrApiKey);
  const resolvedBaseUrl = baseUrl ?? DEFAULT_CAREERBOARD_API_BASE_URL;
  let currentApiKey = apiKey;

  const httpClient = new HttpClient<string>({
    ...httpConfig,
    baseURL: resolvedBaseUrl,
    headers: compactHeaders(headers),
    secure: true,
    securityWorker: (securityData) =>
      securityData
        ? {
            headers: {
              "x-api-key": securityData,
            },
          }
        : undefined,
  });

  httpClient.setSecurityData(currentApiKey);

  const raw = new PublicApi<string>(httpClient);

  const client = {
    baseUrl: resolvedBaseUrl,
    get apiKey() {
      return currentApiKey;
    },
    setApiKey(nextApiKey: string) {
      currentApiKey = assertApiKey(nextApiKey);
      httpClient.setSecurityData(currentApiKey);
    },
    transport: httpClient.instance,
    httpClient,
    raw,
    auth: {
      me: unwrap(raw.publicApi.getPublicApi),
    },
    status: {
      get: unwrap(raw.publicApi.statusList),
    },
    tasks: {
      get: unwrap(raw.publicApi.aiTasksDetail),
      getVacancyEvaluation: unwrap(raw.publicApi.vacancyEvaluationsAiTasksDetail),
      getVacancyExtraction: unwrap(raw.publicApi.vacancyExtractionsAiTasksDetail),
    },
    billing: {
      getPricingCatalog: unwrap(raw.publicApi.billingAiPricingCatalogList),
      getPublicPricingCatalog: unwrap(raw.billing.publicAiPricingCatalogList),
      getBalance: unwrap(raw.publicApi.billingMeBalanceList),
      listLedger: unwrap(raw.publicApi.billingMeLedgerList),
      getTier: unwrap(raw.publicApi.billingMeTierList),
      listUsageCharges: unwrap(raw.publicApi.billingMeUsageChargesList),
      getDailyUsageSummary: unwrap(
        raw.publicApi.billingMeUsageChargesDailySummaryList,
      ),
    },
    projects: {
      list: unwrap(raw.publicApi.projectsList),
      getPricingCatalog: unwrap(raw.publicApi.projectsAiPricingCatalogList),
      getProgressBoard: unwrap(raw.publicApi.projectsProgressBoardList),
      createProgressBoardItem: unwrap(
        raw.publicApi.projectsProgressBoardItemsCreate,
      ),
      vacancyEvaluations: {
        create: unwrap(raw.publicApi.projectsVacancyEvaluationsCreate),
      },
      vacancyExtractions: {
        create: unwrap(raw.publicApi.projectsVacancyExtractionsCreate),
      },
      vacancyScraping: {
        createSource: unwrap(raw.publicApi.projectsVacancyScrapingSourcesCreate),
        listSources: unwrap(raw.publicApi.projectsVacancyScrapingSourcesList),
        generateSources: unwrap(
          raw.publicApi.projectsVacancyScrapingGenerateSourcesCreate,
        ),
        runAll: unwrap(raw.publicApi.projectsVacancyScrapingRunAllCreate),
        listRuns: unwrap(raw.publicApi.projectsVacancyScrapingRunsList),
        listResults: unwrap(raw.publicApi.projectsVacancyScrapingResultsList),
        getResult: unwrap(raw.publicApi.projectsVacancyScrapingResultsDetail),
        evaluateResults: unwrap(
          raw.publicApi.projectsVacancyScrapingResultsEvaluateCreate,
        ),
        importResultToBoard: unwrap(
          raw.publicApi.projectsVacancyScrapingResultsImportToBoardCreate,
        ),
        markResultsReviewed: unwrap(
          raw.publicApi.projectsVacancyScrapingResultsMarkReviewedCreate,
        ),
      },
    },
    progressBoard: {
      attachments: {
        completeUpload: unwrap(
          raw.publicApi.progressBoardAttachmentsCompleteCreate,
        ),
      },
      comments: {
        createAttachment: unwrap(
          raw.publicApi.progressBoardCommentsAttachmentsCreate,
        ),
        update: unwrap(raw.publicApi.progressBoardCommentsPartialUpdate),
        delete: unwrap(raw.publicApi.progressBoardCommentsDelete),
      },
      interviews: {
        update: unwrap(raw.publicApi.progressBoardInterviewsPartialUpdate),
        delete: unwrap(raw.publicApi.progressBoardInterviewsDelete),
      },
      items: {
        get: unwrap(raw.publicApi.progressBoardItemsDetail),
        update: unwrap(raw.publicApi.progressBoardItemsPartialUpdate),
        delete: unwrap(raw.publicApi.progressBoardItemsDelete),
        move: unwrap(raw.publicApi.progressBoardItemsMoveCreate),
        createComment: unwrap(raw.publicApi.progressBoardItemsCommentsCreate),
        createInterview: unwrap(raw.publicApi.progressBoardItemsInterviewsCreate),
        tailoredResume: {
          get: unwrap(raw.publicApi.progressBoardItemsTailoredResumeList),
          update: unwrap(raw.publicApi.progressBoardItemsTailoredResumeUpdate),
          delete: unwrap(raw.publicApi.progressBoardItemsTailoredResumeDelete),
          generate: unwrap(
            raw.publicApi.progressBoardItemsTailoredResumeTasksCreate,
          ),
          exportPdf: unwrap(
            raw.publicApi.progressBoardItemsTailoredResumePdfExportCreate,
          ),
        },
        coverLetter: {
          get: unwrap(raw.publicApi.progressBoardItemsCoverLetterList),
          update: unwrap(raw.publicApi.progressBoardItemsCoverLetterUpdate),
          delete: unwrap(raw.publicApi.progressBoardItemsCoverLetterDelete),
          generate: unwrap(
            raw.publicApi.progressBoardItemsCoverLetterTasksCreate,
          ),
          exportPdf: unwrap(
            raw.publicApi.progressBoardItemsCoverLetterPdfExportCreate,
          ),
        },
        interviewPreparation: {
          get: unwrap(
            raw.publicApi.progressBoardItemsInterviewPreparationList,
          ),
          delete: unwrap(
            raw.publicApi.progressBoardItemsInterviewPreparationDelete,
          ),
          generate: unwrap(
            raw.publicApi.progressBoardItemsInterviewPreparationTasksCreate,
          ),
        },
      },
    },
    tailoredResumes: {
      photo: {
        createUpload: unwrap(raw.publicApi.tailoredResumesPhotoUploadCreate),
        completeUpload: unwrap(raw.publicApi.tailoredResumesPhotoCompleteCreate),
      },
    },
    vacancyScraping: {
      getCatalog: unwrap(raw.publicApi.vacancyScrapingCatalogList),
      deleteSource: unwrap(raw.publicApi.vacancyScrapingSourcesDelete),
      updateSource: unwrap(raw.publicApi.vacancyScrapingSourcesPartialUpdate),
      runSource: unwrap(raw.publicApi.vacancyScrapingSourcesRunCreate),
    },
  } as const;

  return client;
}

export type CareerboardClient = ReturnType<typeof createCareerboardClientInstance>;
export function createCareerboardClient(
  configOrApiKey: CareerboardClientConfig | string,
): CareerboardClient {
  return createCareerboardClientInstance(configOrApiKey);
}

export const createClient = createCareerboardClient;
