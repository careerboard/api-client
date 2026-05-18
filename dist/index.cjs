'use strict';

var axios = require('axios');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var axios__default = /*#__PURE__*/_interopDefault(axios);

// src/generated/public-api.ts
var ContentType = /* @__PURE__ */ ((ContentType2) => {
  ContentType2["Json"] = "application/json";
  ContentType2["JsonApi"] = "application/vnd.api+json";
  ContentType2["FormData"] = "multipart/form-data";
  ContentType2["UrlEncoded"] = "application/x-www-form-urlencoded";
  ContentType2["Text"] = "text/plain";
  return ContentType2;
})(ContentType || {});
var HttpClient = class {
  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  } = {}) {
    this.securityData = null;
    this.setSecurityData = (data) => {
      this.securityData = data;
    };
    this.request = async ({
      secure,
      path,
      type,
      query,
      format,
      body,
      ...params
    }) => {
      const secureParams = (typeof secure === "boolean" ? secure : this.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {};
      const requestParams = this.mergeRequestParams(params, secureParams);
      const responseFormat = format || this.format || void 0;
      if (type === "multipart/form-data" /* FormData */ && body && body !== null && typeof body === "object") {
        body = this.createFormData(body);
      }
      if (type === "text/plain" /* Text */ && body && body !== null && typeof body !== "string") {
        body = JSON.stringify(body);
      }
      return this.instance.request({
        ...requestParams,
        headers: {
          ...requestParams.headers || {},
          ...type ? { "Content-Type": type } : {}
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path
      });
    };
    this.instance = axios__default.default.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://localhost:3000"
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }
  mergeRequestParams(params1, params2) {
    const method = params1.method || params2 && params2.method;
    return {
      ...this.instance.defaults,
      ...params1,
      ...params2 || {},
      headers: {
        ...method && this.instance.defaults.headers[method.toLowerCase()] || {},
        ...params1.headers || {},
        ...params2 && params2.headers || {}
      }
    };
  }
  stringifyFormItem(formItem) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }
  createFormData(input) {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent = property instanceof Array ? property : [property];
      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }
      return formData;
    }, new FormData());
  }
};
var PublicApi = class {
  constructor(http) {
    this.stored = {
      /**
       * No description
       *
       * @tags Files
       * @name StoredDetail
       * @summary Serve a protected stable asset referenced by stored file id.
       * @request GET:/stored/{storedFileId}
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `403` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      storedDetail: ({ storedFileId }, params = {}) => this.http.request({
        path: `/stored/${storedFileId}`,
        method: "GET",
        ...params
      })
    };
    this.downloads = {
      /**
       * No description
       *
       * @tags Files
       * @name DownloadsDetail
       * @summary Authorize and redirect to a signed download URL for a stored file.
       * @request GET:/downloads/{storedFileId}
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `403` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      downloadsDetail: ({ storedFileId }, params = {}) => this.http.request({
        path: `/downloads/${storedFileId}`,
        method: "GET",
        ...params
      }),
      /**
       * No description
       *
       * @tags Files
       * @name GetDownloads
       * @summary Authorize and return a signed download URL for a stored file.
       * @request GET:/downloads/{storedFileId}/url
       * @response `200` `GetDownloadsData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `403` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      getDownloads: ({ storedFileId }, params = {}) => this.http.request({
        path: `/downloads/${storedFileId}/url`,
        method: "GET",
        format: "json",
        ...params
      })
    };
    this.publicApi = {
      /**
       * No description
       *
       * @tags Background Tasks, AI Tasks
       * @name AiTasksDetail
       * @summary Get the current state of a public background task for AI artifacts or vacancy scraping.
       * @request GET:/public-api/ai-tasks/{taskId}
       * @response `200` `AiTasksDetailData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      aiTasksDetail: ({ taskId }, params = {}) => this.http.request({
        path: `/public-api/ai-tasks/${taskId}`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Billing
       * @name BillingAiPricingCatalogList
       * @summary Get the public AI pricing catalog based on the connected database and visible billing tiers.
       * @request GET:/public-api/billing/ai-pricing-catalog
       * @response `200` `BillingAiPricingCatalogListData` Default Response
       * @response `500` `{
          message: string,
      
      }` Default Response
       */
      billingAiPricingCatalogList: (params = {}) => this.http.request({
        path: `/public-api/billing/ai-pricing-catalog`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Billing
       * @name BillingMeBalanceList
       * @summary Get available wallet funds for the API key owner.
       * @request GET:/public-api/billing/me/balance
       * @response `200` `BillingMeBalanceListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       */
      billingMeBalanceList: (params = {}) => this.http.request({
        path: `/public-api/billing/me/balance`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Billing
       * @name BillingMeLedgerList
       * @summary List billing account actions for the API key owner.
       * @request GET:/public-api/billing/me/ledger
       * @response `200` `BillingMeLedgerListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       */
      billingMeLedgerList: (query, params = {}) => this.http.request({
        path: `/public-api/billing/me/ledger`,
        method: "GET",
        query,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Billing
       * @name BillingMeTierList
       * @summary Get current user tier and cumulative spend for the API key owner.
       * @request GET:/public-api/billing/me/tier
       * @response `200` `BillingMeTierListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       */
      billingMeTierList: (params = {}) => this.http.request({
        path: `/public-api/billing/me/tier`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Billing
       * @name BillingMeUsageChargesDailySummaryList
       * @summary Get daily AI usage charge totals grouped by operation description for the API key owner for a chosen date range up to 180 days.
       * @request GET:/public-api/billing/me/usage-charges/daily-summary
       * @response `200` `BillingMeUsageChargesDailySummaryListData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       */
      billingMeUsageChargesDailySummaryList: (query, params = {}) => this.http.request({
        path: `/public-api/billing/me/usage-charges/daily-summary`,
        method: "GET",
        query,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Billing
       * @name BillingMeUsageChargesList
       * @summary List AI usage charges for the API key owner for a chosen date range up to 35 days.
       * @request GET:/public-api/billing/me/usage-charges
       * @response `200` `BillingMeUsageChargesListData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       */
      billingMeUsageChargesList: (query, params = {}) => this.http.request({
        path: `/public-api/billing/me/usage-charges`,
        method: "GET",
        query,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Authentication
       * @name GetPublicApi
       * @summary Get the user who owns the supplied API key.
       * @request GET:/public-api/me
       * @response `200` `GetPublicApiData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       */
      getPublicApi: (params = {}) => this.http.request({
        path: `/public-api/me`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board, Files
       * @name ProgressBoardAttachmentsCompleteCreate
       * @summary Verify and mark a comment attachment as uploaded.
       * @request POST:/public-api/progress-board/attachments/{attachmentId}/complete
       * @response `200` `ProgressBoardAttachmentsCompleteCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      progressBoardAttachmentsCompleteCreate: ({ attachmentId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/attachments/${attachmentId}/complete`,
        method: "POST",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board, Files
       * @name ProgressBoardCommentsAttachmentsCreate
       * @summary Create a presigned upload target for a comment attachment.
       * @request POST:/public-api/progress-board/comments/{commentId}/attachments
       * @response `200` `ProgressBoardCommentsAttachmentsCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      progressBoardCommentsAttachmentsCreate: ({ commentId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/comments/${commentId}/attachments`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProgressBoardCommentsDelete
       * @summary Delete a progress board comment.
       * @request DELETE:/public-api/progress-board/comments/{commentId}
       * @response `204` `ProgressBoardCommentsDeleteData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardCommentsDelete: ({ commentId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/comments/${commentId}`,
        method: "DELETE",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProgressBoardCommentsPartialUpdate
       * @summary Update a progress board comment.
       * @request PATCH:/public-api/progress-board/comments/{commentId}
       * @response `200` `ProgressBoardCommentsPartialUpdateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardCommentsPartialUpdate: ({ commentId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/comments/${commentId}`,
        method: "PATCH",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Interviews
       * @name ProgressBoardInterviewsAiList
       * @summary Get interview AI state, including transcription and overview.
       * @request GET:/public-api/progress-board/interviews/{interviewId}/ai
       * @response `200` `ProgressBoardInterviewsAiListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardInterviewsAiList: ({ interviewId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/interviews/${interviewId}/ai`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Interviews, Progress Board
       * @name ProgressBoardInterviewsDelete
       * @summary Delete an interview record.
       * @request DELETE:/public-api/progress-board/interviews/{interviewId}
       * @response `204` `ProgressBoardInterviewsDeleteData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardInterviewsDelete: ({ interviewId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/interviews/${interviewId}`,
        method: "DELETE",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Interviews, Progress Board
       * @name ProgressBoardInterviewsPartialUpdate
       * @summary Update an interview record.
       * @request PATCH:/public-api/progress-board/interviews/{interviewId}
       * @response `200` `ProgressBoardInterviewsPartialUpdateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardInterviewsPartialUpdate: ({ interviewId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/interviews/${interviewId}`,
        method: "PATCH",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProgressBoardItemsCommentsCreate
       * @summary Create a comment on a progress board item.
       * @request POST:/public-api/progress-board/items/{itemId}/comments
       * @response `200` `ProgressBoardItemsCommentsCreateData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsCommentsCreate: ({ itemId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/comments`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProgressBoardItemsCommentsList
       * @summary List comments for one progress board item.
       * @request GET:/public-api/progress-board/items/{itemId}/comments
       * @response `200` `ProgressBoardItemsCommentsListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsCommentsList: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/comments`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Cover Letters
       * @name ProgressBoardItemsCoverLetterDelete
       * @summary Delete the cover letter attached to a progress board item.
       * @request DELETE:/public-api/progress-board/items/{itemId}/cover-letter
       * @response `204` `ProgressBoardItemsCoverLetterDeleteData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsCoverLetterDelete: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/cover-letter`,
        method: "DELETE",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Cover Letters
       * @name ProgressBoardItemsCoverLetterList
       * @summary Get the current cover letter attached to a progress board item.
       * @request GET:/public-api/progress-board/items/{itemId}/cover-letter
       * @response `200` `ProgressBoardItemsCoverLetterListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsCoverLetterList: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/cover-letter`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Cover Letters, Files
       * @name ProgressBoardItemsCoverLetterPdfExportCreate
       * @summary Export the current cover letter to PDF, returning either a cached download URL or an async export task.
       * @request POST:/public-api/progress-board/items/{itemId}/cover-letter/pdf-export
       * @response `200` `ProgressBoardItemsCoverLetterPdfExportCreateData` Default Response
       * @response `202` `({
          cacheStatus: "hit" | "generated",
        /** @format uri *\/
          downloadResolveUrl: string,
        /** @format uri *\/
          downloadUrl: string,
          status: "ready",
      
      } | {
          status: "queued",
          task: {
        /**
         * @min 0
         * @max 9007199254740991
         *\/
          attemptCount: number,
        /** @format date-time *\/
          createdAt: string,
          error: {
          code: string,
          message: string,
      
      } | null,
        /** @format date-time *\/
          finishedAt: string | null,
          id: string,
        /**
         * @exclusiveMin true
         * @max 9007199254740991
         *\/
          maxAttempts: number,
          result: Record<string,any>,
          sourceModule: "cover-letters",
        /** @format date-time *\/
          startedAt: string | null,
          status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED",
          taskType: "cover_letters.cover_letter_generate" | "cover_letters.cover_letter_pdf_export",
        /** @format date-time *\/
          updatedAt: string,
      
      },
      
      })` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsCoverLetterPdfExportCreate: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/cover-letter/pdf-export`,
        method: "POST",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Cover Letters, Background Tasks, AI Tasks
       * @name ProgressBoardItemsCoverLetterTasksCreate
       * @summary Enqueue cover letter generation for a progress board item.
       * @request POST:/public-api/progress-board/items/{itemId}/cover-letter/tasks
       * @response `202` `ProgressBoardItemsCoverLetterTasksCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsCoverLetterTasksCreate: ({ itemId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/cover-letter/tasks`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Cover Letters
       * @name ProgressBoardItemsCoverLetterUpdate
       * @summary Save the full cover letter JSON after manual editing.
       * @request PUT:/public-api/progress-board/items/{itemId}/cover-letter
       * @response `200` `ProgressBoardItemsCoverLetterUpdateData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsCoverLetterUpdate: ({ itemId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/cover-letter`,
        method: "PUT",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProgressBoardItemsDelete
       * @summary Delete a progress board item.
       * @request DELETE:/public-api/progress-board/items/{itemId}
       * @response `204` `ProgressBoardItemsDeleteData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsDelete: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProgressBoardItemsDetail
       * @summary Get a single progress board item.
       * @request GET:/public-api/progress-board/items/{itemId}
       * @response `200` `ProgressBoardItemsDetailData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsDetail: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Interview Preparation
       * @name ProgressBoardItemsInterviewPreparationDelete
       * @summary Delete the interview preparation attached to a progress board item.
       * @request DELETE:/public-api/progress-board/items/{itemId}/interview-preparation
       * @response `204` `ProgressBoardItemsInterviewPreparationDeleteData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsInterviewPreparationDelete: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/interview-preparation`,
        method: "DELETE",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Interview Preparation
       * @name ProgressBoardItemsInterviewPreparationList
       * @summary Get the current interview preparation attached to a progress board item.
       * @request GET:/public-api/progress-board/items/{itemId}/interview-preparation
       * @response `200` `ProgressBoardItemsInterviewPreparationListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsInterviewPreparationList: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/interview-preparation`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Interview Preparation, Background Tasks, AI Tasks
       * @name ProgressBoardItemsInterviewPreparationTasksCreate
       * @summary Enqueue interview preparation generation for a progress board item.
       * @request POST:/public-api/progress-board/items/{itemId}/interview-preparation/tasks
       * @response `202` `ProgressBoardItemsInterviewPreparationTasksCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsInterviewPreparationTasksCreate: ({ itemId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/interview-preparation/tasks`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Interviews, Progress Board
       * @name ProgressBoardItemsInterviewsCreate
       * @summary Create an interview record for a progress board item.
       * @request POST:/public-api/progress-board/items/{itemId}/interviews
       * @response `200` `ProgressBoardItemsInterviewsCreateData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsInterviewsCreate: ({ itemId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/interviews`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Interviews, Progress Board
       * @name ProgressBoardItemsInterviewsList
       * @summary List interviews attached to one progress board item.
       * @request GET:/public-api/progress-board/items/{itemId}/interviews
       * @response `200` `ProgressBoardItemsInterviewsListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsInterviewsList: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/interviews`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProgressBoardItemsMoveCreate
       * @summary Move a progress board item to a new column position or reorder it within the same column.
       * @request POST:/public-api/progress-board/items/{itemId}/move
       * @response `200` `ProgressBoardItemsMoveCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsMoveCreate: ({ itemId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/move`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProgressBoardItemsPartialUpdate
       * @summary Update a progress board item and optionally change its status.
       * @request PATCH:/public-api/progress-board/items/{itemId}
       * @response `200` `ProgressBoardItemsPartialUpdateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsPartialUpdate: ({ itemId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}`,
        method: "PATCH",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Tailored Resumes
       * @name ProgressBoardItemsTailoredResumeDelete
       * @summary Delete the tailored resume attached to a progress board item.
       * @request DELETE:/public-api/progress-board/items/{itemId}/tailored-resume
       * @response `204` `ProgressBoardItemsTailoredResumeDeleteData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsTailoredResumeDelete: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume`,
        method: "DELETE",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Tailored Resumes
       * @name ProgressBoardItemsTailoredResumeList
       * @summary Get the current tailored resume attached to a progress board item.
       * @request GET:/public-api/progress-board/items/{itemId}/tailored-resume
       * @response `200` `ProgressBoardItemsTailoredResumeListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsTailoredResumeList: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Tailored Resumes, Files
       * @name ProgressBoardItemsTailoredResumePdfExportCreate
       * @summary Export the current tailored resume to PDF, returning either a cached download URL or an async export task.
       * @request POST:/public-api/progress-board/items/{itemId}/tailored-resume/pdf-export
       * @response `200` `ProgressBoardItemsTailoredResumePdfExportCreateData` Default Response
       * @response `202` `({
          cacheStatus: "hit" | "generated",
        /** @format uri *\/
          downloadResolveUrl: string,
        /** @format uri *\/
          downloadUrl: string,
          status: "ready",
      
      } | {
          status: "queued",
          task: {
        /**
         * @min 0
         * @max 9007199254740991
         *\/
          attemptCount: number,
        /** @format date-time *\/
          createdAt: string,
          error: {
          code: string,
          message: string,
      
      } | null,
        /** @format date-time *\/
          finishedAt: string | null,
          id: string,
        /**
         * @exclusiveMin true
         * @max 9007199254740991
         *\/
          maxAttempts: number,
          result: Record<string,any>,
          sourceModule: "resumes",
        /** @format date-time *\/
          startedAt: string | null,
          status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED",
          taskType: "resumes.tailored_resume_generate" | "resumes.tailored_resume_pdf_export",
        /** @format date-time *\/
          updatedAt: string,
      
      },
      
      })` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsTailoredResumePdfExportCreate: ({ itemId }, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume/pdf-export`,
        method: "POST",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Tailored Resumes, Background Tasks, AI Tasks
       * @name ProgressBoardItemsTailoredResumeTasksCreate
       * @summary Enqueue tailored resume generation for a progress board item.
       * @request POST:/public-api/progress-board/items/{itemId}/tailored-resume/tasks
       * @response `202` `ProgressBoardItemsTailoredResumeTasksCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsTailoredResumeTasksCreate: ({ itemId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume/tasks`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Tailored Resumes
       * @name ProgressBoardItemsTailoredResumeUpdate
       * @summary Save the full tailored resume JSON after manual editing.
       * @request PUT:/public-api/progress-board/items/{itemId}/tailored-resume
       * @response `200` `ProgressBoardItemsTailoredResumeUpdateData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       */
      progressBoardItemsTailoredResumeUpdate: ({ itemId }, data, params = {}) => this.http.request({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume`,
        method: "PUT",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Billing, Projects
       * @name ProjectsAiPricingCatalogList
       * @summary Get the effective AI pricing catalog for one project using its current AI preset settings and billing mode.
       * @request GET:/public-api/projects/{projectId}/ai-pricing-catalog
       * @response `200` `ProjectsAiPricingCatalogListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `500` `{
          message: string,
      
      }` Default Response
       */
      projectsAiPricingCatalogList: ({ projectId }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/ai-pricing-catalog`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Projects
       * @name ProjectsCandidateProfileList
       * @summary Get the markdown candidate profile for a project.
       * @request GET:/public-api/projects/{projectId}/candidate-profile
       * @response `200` `ProjectsCandidateProfileListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsCandidateProfileList: ({ projectId }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/candidate-profile`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Projects
       * @name ProjectsCandidateProfileUpdate
       * @summary Replace the markdown candidate profile for a project.
       * @request PUT:/public-api/projects/{projectId}/candidate-profile
       * @response `200` `ProjectsCandidateProfileUpdateData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsCandidateProfileUpdate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/candidate-profile`,
        method: "PUT",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Projects
       * @name ProjectsFirstSetupList
       * @summary Get the viewer-specific first setup checklist for a project.
       * @request GET:/public-api/projects/{projectId}/first-setup
       * @response `200` `ProjectsFirstSetupListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsFirstSetupList: ({ projectId }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/first-setup`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Projects
       * @name ProjectsFirstSetupPreferencesPartialUpdate
       * @summary Update viewer-specific first setup widget preferences for a project.
       * @request PATCH:/public-api/projects/{projectId}/first-setup/preferences
       * @response `200` `ProjectsFirstSetupPreferencesPartialUpdateData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsFirstSetupPreferencesPartialUpdate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/first-setup/preferences`,
        method: "PATCH",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Interviews
       * @name ProjectsInterviewsList
       * @summary List scheduled interviews for a project, optionally filtered by date range.
       * @request GET:/public-api/projects/{projectId}/interviews
       * @response `200` `ProjectsInterviewsListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsInterviewsList: ({ projectId, ...query }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/interviews`,
        method: "GET",
        query,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Projects
       * @name ProjectsList
       * @summary List projects available to the API key owner.
       * @request GET:/public-api/projects
       * @response `200` `ProjectsListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       */
      projectsList: (params = {}) => this.http.request({
        path: `/public-api/projects`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProjectsProgressBoardItemsCreate
       * @summary Create a new progress board item for a project.
       * @request POST:/public-api/projects/{projectId}/progress-board/items
       * @response `200` `ProjectsProgressBoardItemsCreateData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsProgressBoardItemsCreate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/progress-board/items`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Progress Board
       * @name ProjectsProgressBoardList
       * @summary Get the progress board for a project.
       * @request GET:/public-api/projects/{projectId}/progress-board
       * @response `200` `ProjectsProgressBoardListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsProgressBoardList: ({ projectId }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/progress-board`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks, AI Tasks
       * @name ProjectsVacancyEvaluationsCreate
       * @summary Enqueue AI evaluation of one normalized externally supplied vacancy against a project candidate profile.
       * @request POST:/public-api/projects/{projectId}/vacancy-evaluations
       * @response `202` `ProjectsVacancyEvaluationsCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyEvaluationsCreate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-evaluations`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks, AI Tasks
       * @name ProjectsVacancyExtractionsCreate
       * @summary Enqueue extraction of normalized vacancy fields from one externally supplied readable vacancy page text.
       * @request POST:/public-api/projects/{projectId}/vacancy-extractions
       * @response `202` `ProjectsVacancyExtractionsCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyExtractionsCreate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-extractions`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, AI Tasks
       * @name ProjectsVacancyScrapingGenerateSourcesCreate
       * @summary Generate suggested scraping search URLs for one project.
       * @request POST:/public-api/projects/{projectId}/vacancy-scraping/generate-sources
       * @response `200` `ProjectsVacancyScrapingGenerateSourcesCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingGenerateSourcesCreate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/generate-sources`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping
       * @name ProjectsVacancyScrapingResultsDetail
       * @summary Get heavy scraped vacancy details, including full description and AI rationale.
       * @request GET:/public-api/projects/{projectId}/vacancy-scraping/results/{vacancyId}
       * @response `200` `ProjectsVacancyScrapingResultsDetailData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingResultsDetail: ({ projectId, vacancyId }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results/${vacancyId}`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks, AI Tasks
       * @name ProjectsVacancyScrapingResultsEvaluateCreate
       * @summary Queue AI evaluation for selected scraped vacancies that are not already evaluated or already in progress.
       * @request POST:/public-api/projects/{projectId}/vacancy-scraping/results/evaluate
       * @response `200` `ProjectsVacancyScrapingResultsEvaluateCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingResultsEvaluateCreate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results/evaluate`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Progress Board
       * @name ProjectsVacancyScrapingResultsImportToBoardCreate
       * @summary Move selected scraped vacancies to the TODO board column.
       * @request POST:/public-api/projects/{projectId}/vacancy-scraping/results/import-to-board
       * @response `200` `ProjectsVacancyScrapingResultsImportToBoardCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingResultsImportToBoardCreate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results/import-to-board`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping
       * @name ProjectsVacancyScrapingResultsList
       * @summary List lightweight scraped vacancies for one project.
       * @request GET:/public-api/projects/{projectId}/vacancy-scraping/results
       * @response `200` `ProjectsVacancyScrapingResultsListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingResultsList: ({ projectId, ...query }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results`,
        method: "GET",
        query,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping
       * @name ProjectsVacancyScrapingResultsMarkReviewedCreate
       * @summary Mark the current project vacancy inbox as reviewed for the current user.
       * @request POST:/public-api/projects/{projectId}/vacancy-scraping/results/mark-reviewed
       * @response `200` `ProjectsVacancyScrapingResultsMarkReviewedCreateData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingResultsMarkReviewedCreate: ({ projectId }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results/mark-reviewed`,
        method: "POST",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks
       * @name ProjectsVacancyScrapingRunAllCreate
       * @summary Queue all enabled vacancy scraping sources for one project and return the first newly queued run.
       * @request POST:/public-api/projects/{projectId}/vacancy-scraping/run-all
       * @response `202` `ProjectsVacancyScrapingRunAllCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingRunAllCreate: ({ projectId }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/run-all`,
        method: "POST",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks
       * @name ProjectsVacancyScrapingRunsCreate
       * @summary Create one vacancy scraping run for a project.
       * @request POST:/public-api/projects/{projectId}/vacancy-scraping/runs
       * @response `202` `ProjectsVacancyScrapingRunsCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingRunsCreate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/runs`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping
       * @name ProjectsVacancyScrapingRunsList
       * @summary List all vacancy scraping runs for one project.
       * @request GET:/public-api/projects/{projectId}/vacancy-scraping/runs
       * @response `200` `ProjectsVacancyScrapingRunsListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingRunsList: ({ projectId }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/runs`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping
       * @name ProjectsVacancyScrapingSourcesCreate
       * @summary Create one project-scoped vacancy scraping source.
       * @request POST:/public-api/projects/{projectId}/vacancy-scraping/sources
       * @response `200` `ProjectsVacancyScrapingSourcesCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingSourcesCreate: ({ projectId }, data, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/sources`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping
       * @name ProjectsVacancyScrapingSourcesList
       * @summary List vacancy scraping sources for one project.
       * @request GET:/public-api/projects/{projectId}/vacancy-scraping/sources
       * @response `200` `ProjectsVacancyScrapingSourcesListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      projectsVacancyScrapingSourcesList: ({ projectId }, params = {}) => this.http.request({
        path: `/public-api/projects/${projectId}/vacancy-scraping/sources`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags public-api
       * @name StatusList
       * @summary External-facing endpoints and stable contracts for third parties. status
       * @request GET:/public-api/status
       * @response `200` `StatusListData` Default Response
       */
      statusList: (params = {}) => this.http.request({
        path: `/public-api/status`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Tailored Resumes, Files
       * @name TailoredResumesPhotoCompleteCreate
       * @summary Verify a previously uploaded resume-local photo and return its public URL.
       * @request POST:/public-api/tailored-resumes/{resumeId}/photo/complete
       * @response `200` `TailoredResumesPhotoCompleteCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      tailoredResumesPhotoCompleteCreate: ({ resumeId }, data, params = {}) => this.http.request({
        path: `/public-api/tailored-resumes/${resumeId}/photo/complete`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Tailored Resumes, Files
       * @name TailoredResumesPhotoUploadCreate
       * @summary Create a presigned upload target for a resume-local photo attached to one tailored resume artifact.
       * @request POST:/public-api/tailored-resumes/{resumeId}/photo/upload
       * @response `200` `TailoredResumesPhotoUploadCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      tailoredResumesPhotoUploadCreate: ({ resumeId }, data, params = {}) => this.http.request({
        path: `/public-api/tailored-resumes/${resumeId}/photo/upload`,
        method: "POST",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks, AI Tasks
       * @name VacancyEvaluationsAiTasksDetail
       * @summary Get the current state of a public vacancy evaluation task.
       * @request GET:/public-api/vacancy-evaluations/ai-tasks/{taskId}
       * @response `200` `VacancyEvaluationsAiTasksDetailData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      vacancyEvaluationsAiTasksDetail: ({ taskId }, params = {}) => this.http.request({
        path: `/public-api/vacancy-evaluations/ai-tasks/${taskId}`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks, AI Tasks
       * @name VacancyExtractionsAiTasksDetail
       * @summary Get the current state of a public vacancy extraction task.
       * @request GET:/public-api/vacancy-extractions/ai-tasks/{taskId}
       * @response `200` `VacancyExtractionsAiTasksDetailData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      vacancyExtractionsAiTasksDetail: ({ taskId }, params = {}) => this.http.request({
        path: `/public-api/vacancy-extractions/ai-tasks/${taskId}`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping
       * @name VacancyScrapingCatalogList
       * @summary List available Bright Data vacancy scrapers for the current billing tier.
       * @request GET:/public-api/vacancy-scraping/catalog
       * @response `200` `VacancyScrapingCatalogListData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       */
      vacancyScrapingCatalogList: (params = {}) => this.http.request({
        path: `/public-api/vacancy-scraping/catalog`,
        method: "GET",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks
       * @name VacancyScrapingRunsCancelCreate
       * @summary Cancel one queued vacancy scraping run.
       * @request POST:/public-api/vacancy-scraping/runs/{runId}/cancel
       * @response `200` `VacancyScrapingRunsCancelCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      vacancyScrapingRunsCancelCreate: ({ runId }, params = {}) => this.http.request({
        path: `/public-api/vacancy-scraping/runs/${runId}/cancel`,
        method: "POST",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks
       * @name VacancyScrapingRunsRetryCreate
       * @summary Retry one failed or canceled vacancy scraping run by creating a new run from its saved snapshot.
       * @request POST:/public-api/vacancy-scraping/runs/{runId}/retry
       * @response `202` `VacancyScrapingRunsRetryCreateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      vacancyScrapingRunsRetryCreate: ({ runId }, params = {}) => this.http.request({
        path: `/public-api/vacancy-scraping/runs/${runId}/retry`,
        method: "POST",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping
       * @name VacancyScrapingSourcesDelete
       * @summary Delete one vacancy scraping source and all scraping data currently owned by it.
       * @request DELETE:/public-api/vacancy-scraping/sources/{sourceId}
       * @response `204` `VacancyScrapingSourcesDeleteData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `409` `{
          message: string,
      
      }` Default Response
       */
      vacancyScrapingSourcesDelete: ({ sourceId }, params = {}) => this.http.request({
        path: `/public-api/vacancy-scraping/sources/${sourceId}`,
        method: "DELETE",
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping
       * @name VacancyScrapingSourcesPartialUpdate
       * @summary Update one vacancy scraping source.
       * @request PATCH:/public-api/vacancy-scraping/sources/{sourceId}
       * @response `200` `VacancyScrapingSourcesPartialUpdateData` Default Response
       * @response `400` `{
          message: string,
      
      }` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       */
      vacancyScrapingSourcesPartialUpdate: ({ sourceId }, data, params = {}) => this.http.request({
        path: `/public-api/vacancy-scraping/sources/${sourceId}`,
        method: "PATCH",
        body: data,
        type: "application/json" /* Json */,
        format: "json",
        ...params
      }),
      /**
       * No description
       *
       * @tags Vacancy Scraping, Background Tasks
       * @name VacancyScrapingSourcesRunCreate
       * @summary Reserve funds and enqueue one vacancy scraping source run.
       * @request POST:/public-api/vacancy-scraping/sources/{sourceId}/run
       * @response `202` `VacancyScrapingSourcesRunCreateData` Default Response
       * @response `401` `{
          message: string,
      
      }` Default Response
       * @response `402` `{
          message: string,
      
      }` Default Response
       * @response `404` `{
          message: string,
      
      }` Default Response
       * @response `503` `{
          message: string,
      
      }` Default Response
       */
      vacancyScrapingSourcesRunCreate: ({ sourceId }, params = {}) => this.http.request({
        path: `/public-api/vacancy-scraping/sources/${sourceId}/run`,
        method: "POST",
        format: "json",
        ...params
      })
    };
    this.http = http;
  }
};

// src/client.ts
var DEFAULT_CAREERBOARD_API_BASE_URL = "https://api.careerboard.leverton.dev";
function assertApiKey(apiKey) {
  const normalizedApiKey = apiKey.trim();
  if (!normalizedApiKey) {
    throw new Error("Careerboard API key is required.");
  }
  return normalizedApiKey;
}
function normalizeConfig(configOrApiKey) {
  if (typeof configOrApiKey === "string") {
    return {
      apiKey: assertApiKey(configOrApiKey)
    };
  }
  return {
    ...configOrApiKey,
    apiKey: assertApiKey(configOrApiKey.apiKey)
  };
}
function compactHeaders(headers) {
  return Object.fromEntries(
    Object.entries(headers ?? {}).filter(([, value]) => value !== void 0)
  );
}
function unwrap(method) {
  return async (...args) => {
    const response = await method(...args);
    return response.data;
  };
}
function createCareerboardClientInstance(configOrApiKey) {
  const { apiKey, baseUrl, headers, ...httpConfig } = normalizeConfig(configOrApiKey);
  const resolvedBaseUrl = baseUrl ?? DEFAULT_CAREERBOARD_API_BASE_URL;
  let currentApiKey = apiKey;
  const httpClient = new HttpClient({
    ...httpConfig,
    baseURL: resolvedBaseUrl,
    headers: compactHeaders(headers),
    secure: true,
    securityWorker: (securityData) => securityData ? {
      headers: {
        "x-api-key": securityData
      }
    } : void 0
  });
  httpClient.setSecurityData(currentApiKey);
  const raw = new PublicApi(httpClient);
  const client = {
    baseUrl: resolvedBaseUrl,
    get apiKey() {
      return currentApiKey;
    },
    setApiKey(nextApiKey) {
      currentApiKey = assertApiKey(nextApiKey);
      httpClient.setSecurityData(currentApiKey);
    },
    transport: httpClient.instance,
    httpClient,
    raw,
    downloads: {
      getUrl: unwrap(raw.downloads.getDownloads)
    },
    auth: {
      me: unwrap(raw.publicApi.getPublicApi)
    },
    status: {
      get: unwrap(raw.publicApi.statusList)
    },
    tasks: {
      get: unwrap(raw.publicApi.aiTasksDetail),
      getVacancyEvaluation: unwrap(raw.publicApi.vacancyEvaluationsAiTasksDetail),
      getVacancyExtraction: unwrap(raw.publicApi.vacancyExtractionsAiTasksDetail)
    },
    billing: {
      getPricingCatalog: unwrap(raw.publicApi.billingAiPricingCatalogList),
      getPublicPricingCatalog: unwrap(raw.publicApi.billingAiPricingCatalogList),
      getBalance: unwrap(raw.publicApi.billingMeBalanceList),
      listLedger: unwrap(raw.publicApi.billingMeLedgerList),
      getTier: unwrap(raw.publicApi.billingMeTierList),
      listUsageCharges: unwrap(raw.publicApi.billingMeUsageChargesList),
      getDailyUsageSummary: unwrap(
        raw.publicApi.billingMeUsageChargesDailySummaryList
      )
    },
    projects: {
      list: unwrap(raw.publicApi.projectsList),
      getPricingCatalog: unwrap(raw.publicApi.projectsAiPricingCatalogList),
      getProgressBoard: unwrap(raw.publicApi.projectsProgressBoardList),
      createProgressBoardItem: unwrap(
        raw.publicApi.projectsProgressBoardItemsCreate
      ),
      candidateProfile: {
        get: unwrap(raw.publicApi.projectsCandidateProfileList),
        update: unwrap(raw.publicApi.projectsCandidateProfileUpdate)
      },
      firstSetup: {
        get: unwrap(raw.publicApi.projectsFirstSetupList),
        updatePreferences: unwrap(
          raw.publicApi.projectsFirstSetupPreferencesPartialUpdate
        )
      },
      interviews: {
        list: unwrap(raw.publicApi.projectsInterviewsList)
      },
      vacancyEvaluations: {
        create: unwrap(raw.publicApi.projectsVacancyEvaluationsCreate)
      },
      vacancyExtractions: {
        create: unwrap(raw.publicApi.projectsVacancyExtractionsCreate)
      },
      vacancyScraping: {
        createSource: unwrap(raw.publicApi.projectsVacancyScrapingSourcesCreate),
        listSources: unwrap(raw.publicApi.projectsVacancyScrapingSourcesList),
        generateSources: unwrap(
          raw.publicApi.projectsVacancyScrapingGenerateSourcesCreate
        ),
        createRun: unwrap(raw.publicApi.projectsVacancyScrapingRunsCreate),
        runAll: unwrap(raw.publicApi.projectsVacancyScrapingRunAllCreate),
        listRuns: unwrap(raw.publicApi.projectsVacancyScrapingRunsList),
        listResults: unwrap(raw.publicApi.projectsVacancyScrapingResultsList),
        getResult: unwrap(raw.publicApi.projectsVacancyScrapingResultsDetail),
        evaluateResults: unwrap(
          raw.publicApi.projectsVacancyScrapingResultsEvaluateCreate
        ),
        importResultToBoard: unwrap(
          raw.publicApi.projectsVacancyScrapingResultsImportToBoardCreate
        ),
        markResultsReviewed: unwrap(
          raw.publicApi.projectsVacancyScrapingResultsMarkReviewedCreate
        )
      }
    },
    progressBoard: {
      attachments: {
        completeUpload: unwrap(
          raw.publicApi.progressBoardAttachmentsCompleteCreate
        )
      },
      interviews: {
        getAi: unwrap(raw.publicApi.progressBoardInterviewsAiList),
        update: unwrap(raw.publicApi.progressBoardInterviewsPartialUpdate),
        delete: unwrap(raw.publicApi.progressBoardInterviewsDelete)
      },
      comments: {
        createAttachment: unwrap(
          raw.publicApi.progressBoardCommentsAttachmentsCreate
        ),
        update: unwrap(raw.publicApi.progressBoardCommentsPartialUpdate),
        delete: unwrap(raw.publicApi.progressBoardCommentsDelete)
      },
      items: {
        get: unwrap(raw.publicApi.progressBoardItemsDetail),
        update: unwrap(raw.publicApi.progressBoardItemsPartialUpdate),
        delete: unwrap(raw.publicApi.progressBoardItemsDelete),
        move: unwrap(raw.publicApi.progressBoardItemsMoveCreate),
        createComment: unwrap(raw.publicApi.progressBoardItemsCommentsCreate),
        createInterview: unwrap(raw.publicApi.progressBoardItemsInterviewsCreate),
        comments: {
          create: unwrap(raw.publicApi.progressBoardItemsCommentsCreate),
          list: unwrap(raw.publicApi.progressBoardItemsCommentsList)
        },
        interviews: {
          create: unwrap(raw.publicApi.progressBoardItemsInterviewsCreate),
          list: unwrap(raw.publicApi.progressBoardItemsInterviewsList)
        },
        tailoredResume: {
          get: unwrap(raw.publicApi.progressBoardItemsTailoredResumeList),
          update: unwrap(raw.publicApi.progressBoardItemsTailoredResumeUpdate),
          delete: unwrap(raw.publicApi.progressBoardItemsTailoredResumeDelete),
          generate: unwrap(
            raw.publicApi.progressBoardItemsTailoredResumeTasksCreate
          ),
          exportPdf: unwrap(
            raw.publicApi.progressBoardItemsTailoredResumePdfExportCreate
          )
        },
        coverLetter: {
          get: unwrap(raw.publicApi.progressBoardItemsCoverLetterList),
          update: unwrap(raw.publicApi.progressBoardItemsCoverLetterUpdate),
          delete: unwrap(raw.publicApi.progressBoardItemsCoverLetterDelete),
          generate: unwrap(
            raw.publicApi.progressBoardItemsCoverLetterTasksCreate
          ),
          exportPdf: unwrap(
            raw.publicApi.progressBoardItemsCoverLetterPdfExportCreate
          )
        },
        interviewPreparation: {
          get: unwrap(
            raw.publicApi.progressBoardItemsInterviewPreparationList
          ),
          delete: unwrap(
            raw.publicApi.progressBoardItemsInterviewPreparationDelete
          ),
          generate: unwrap(
            raw.publicApi.progressBoardItemsInterviewPreparationTasksCreate
          )
        }
      }
    },
    tailoredResumes: {
      photo: {
        createUpload: unwrap(raw.publicApi.tailoredResumesPhotoUploadCreate),
        completeUpload: unwrap(raw.publicApi.tailoredResumesPhotoCompleteCreate)
      }
    },
    vacancyScraping: {
      getCatalog: unwrap(raw.publicApi.vacancyScrapingCatalogList),
      cancelRun: unwrap(raw.publicApi.vacancyScrapingRunsCancelCreate),
      retryRun: unwrap(raw.publicApi.vacancyScrapingRunsRetryCreate),
      deleteSource: unwrap(raw.publicApi.vacancyScrapingSourcesDelete),
      updateSource: unwrap(raw.publicApi.vacancyScrapingSourcesPartialUpdate),
      runSource: unwrap(raw.publicApi.vacancyScrapingSourcesRunCreate)
    }
  };
  return client;
}
function createCareerboardClient(configOrApiKey) {
  return createCareerboardClientInstance(configOrApiKey);
}
var createClient = createCareerboardClient;

exports.ContentType = ContentType;
exports.DEFAULT_CAREERBOARD_API_BASE_URL = DEFAULT_CAREERBOARD_API_BASE_URL;
exports.HttpClient = HttpClient;
exports.PublicApi = PublicApi;
exports.createCareerboardClient = createCareerboardClient;
exports.createClient = createClient;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map