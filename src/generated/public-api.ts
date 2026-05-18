/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type AiTasksDetailData =
  | {
      /**
       * @min 0
       * @max 9007199254740991
       */
      attemptCount: number;
      /** @format date-time */
      createdAt: string;
      error: {
        code: string;
        message: string;
      } | null;
      /** @format date-time */
      finishedAt: string | null;
      id: string;
      /**
       * @exclusiveMin true
       * @max 9007199254740991
       */
      maxAttempts: number;
      result: Record<string, any>;
      sourceModule: "resumes";
      /** @format date-time */
      startedAt: string | null;
      status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
      taskType:
        | "resumes.tailored_resume_generate"
        | "resumes.tailored_resume_pdf_export";
      /** @format date-time */
      updatedAt: string;
    }
  | {
      /**
       * @min 0
       * @max 9007199254740991
       */
      attemptCount: number;
      /** @format date-time */
      createdAt: string;
      error: {
        code: string;
        message: string;
      } | null;
      /** @format date-time */
      finishedAt: string | null;
      id: string;
      /**
       * @exclusiveMin true
       * @max 9007199254740991
       */
      maxAttempts: number;
      result: Record<string, any>;
      sourceModule: "cover-letters";
      /** @format date-time */
      startedAt: string | null;
      status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
      taskType:
        | "cover_letters.cover_letter_generate"
        | "cover_letters.cover_letter_pdf_export";
      /** @format date-time */
      updatedAt: string;
    }
  | {
      /**
       * @min 0
       * @max 9007199254740991
       */
      attemptCount: number;
      /** @format date-time */
      createdAt: string;
      error: {
        code: string;
        message: string;
      } | null;
      /** @format date-time */
      finishedAt: string | null;
      id: string;
      /**
       * @exclusiveMin true
       * @max 9007199254740991
       */
      maxAttempts: number;
      result: Record<string, any>;
      sourceModule: "interview-prep";
      /** @format date-time */
      startedAt: string | null;
      status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
      taskType: "interview_prep.interview_preparation_generate";
      /** @format date-time */
      updatedAt: string;
    }
  | {
      /**
       * @min 0
       * @max 9007199254740991
       */
      attemptCount: number;
      /** @format date-time */
      createdAt: string;
      error: {
        code: string;
        message: string;
      } | null;
      /** @format date-time */
      finishedAt: string | null;
      id: string;
      /**
       * @exclusiveMin true
       * @max 9007199254740991
       */
      maxAttempts: number;
      result: Record<string, any>;
      sourceModule: "vacancy-scraping";
      /** @format date-time */
      startedAt: string | null;
      status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
      taskType:
        | "vacancy_scraping.source_run"
        | "vacancy_scraping.first_evaluation"
        | "vacancy_scraping.main_evaluation"
        | "vacancy_scraping.manual_extraction"
        | "vacancy_scraping.manual_evaluation";
      /** @format date-time */
      updatedAt: string;
    };

export type AiTasksDetailError = {
  message: string;
};

export interface AiTasksDetailParams {
  /** @minLength 1 */
  taskId: string;
}

export interface BillingAiPricingCatalogListData {
  currency: "USD";
  disclaimer: string;
  externalOperations: {
    appliesToOperations: string[];
    billingKind: "external_run";
    externalOperation: string;
    key: string;
    label: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxResultsPerRun: number;
    pricingOperation: string;
    provider: string;
    scraperName: string;
    scraperSlug: string;
    site: "LINKEDIN" | "INDEED" | "GLASSDOOR";
    tierPrices: {
      /** @pattern ^\d+(?:\.\d{1,6})?$ */
      priceUsd: string;
      tierId: string;
    }[];
    unit: "per_1000_results";
    unitPricing: {
      kind: "external_results";
      tiers: {
        /** @pattern ^\d+(?:\.\d{1,6})?$ */
        usdPer1000Results: string;
        tierId: string;
        /** @pattern ^\d+(?:\.\d{1,6})?$ */
        usdPerResult: string;
      }[];
    };
  }[];
  operations: (
    | {
        appliesToOperations: string[];
        billingKind: "llm";
        key: string;
        label: string;
        pricingOperation: string;
        source: {
          addons: string[];
          kind: "preset" | "stt_model";
          model: string;
          name: string | null;
          provider: string;
          reasoning: string | null;
          slug: string | null;
        };
        tierPrices: {
          /** @pattern ^\d+(?:\.\d{1,6})?$ */
          priceUsd: string;
          tierId: string;
        }[];
        unit: "per_generation";
        unitPricing: {
          kind: "llm_tokens";
          tiers: {
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            cachedInputUsdPerMillionTokens: string;
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            inputUsdPerMillionTokens: string;
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            outputUsdPerMillionTokens: string;
            tierId: string;
          }[];
        };
      }
    | {
        appliesToOperations: string[];
        billingKind: "stt";
        key: string;
        label: string;
        pricingOperation: string;
        source: {
          addons: string[];
          kind: "preset" | "stt_model";
          model: string;
          name: string | null;
          provider: string;
          reasoning: string | null;
          slug: string | null;
        };
        tierPrices: {
          /** @pattern ^\d+(?:\.\d{1,6})?$ */
          priceUsd: string;
          tierId: string;
        }[];
        unit: "per_hour";
        unitPricing: {
          kind: "stt_audio";
          tiers: {
            tierId: string;
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            usdPerHour: string;
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            usdPerMinute: string;
          }[];
        };
      }
  )[];
  tiers: {
    id: string;
    /**
     * @min 0
     * @max 9007199254740991
     */
    level: number;
    name: string;
    /** @pattern ^\d+(?:\.\d{1,6})?$ */
    spendThresholdUsd: string;
  }[];
}

export type BillingAiPricingCatalogListError = {
  message: string;
};

export interface BillingMeBalanceListData {
  /** @pattern ^\d+(?:\.\d{1,6})?$ */
  availableUsd: string;
  /** @pattern ^\d+(?:\.\d{1,6})?$ */
  balanceUsd: string;
  operationHints: Record<
    string,
    {
      /** @pattern ^\d+(?:\.\d{1,6})?$ */
      minimumReservationUsd: string;
      /** @pattern ^\d+(?:\.\d{1,6})?$ */
      reservationStepUsd: string;
    }
  >;
  /** @pattern ^\d+(?:\.\d{1,6})?$ */
  reservedUsd: string;
}

export type BillingMeBalanceListError = {
  message: string;
};

export type BillingMeLedgerListData = {
  balanceAfterUsd: string;
  /** @format date-time */
  createdAt: string;
  deltaUsd: string;
  description: string;
  id: string;
  metadata: Record<string, any>;
  type: "DEPOSIT" | "AI_USAGE_CHARGE" | "MANUAL_ADJUSTMENT";
}[];

export type BillingMeLedgerListError = {
  message: string;
};

export interface BillingMeLedgerListParams {
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  from?: string;
  /**
   * @exclusiveMin true
   * @max 200
   * @default 100
   */
  limit?: number;
  /**
   * @format date-time
   * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
   */
  to?: string;
}

export interface BillingMeTierListData {
  currentTier: {
    id: string;
    isPublic: boolean;
    /**
     * @min 0
     * @max 9007199254740991
     */
    level: number;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxProjectOwners: number;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxProjects: number;
    name: string;
    operationPricing: {
      /** @pattern ^\d+(?:\.\d{1,6})?$ */
      minimumReservationUsd: string;
      operation: string;
      /** @pattern ^\d+(?:\.\d{1,6})?$ */
      reservationStepUsd: string;
    }[];
    /** @pattern ^\d+(?:\.\d{1,6})?$ */
    spendThresholdUsd: string;
  };
  nextTier: {
    id: string;
    isPublic: boolean;
    /**
     * @min 0
     * @max 9007199254740991
     */
    level: number;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxProjectOwners: number;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxProjects: number;
    name: string;
    operationPricing: {
      /** @pattern ^\d+(?:\.\d{1,6})?$ */
      minimumReservationUsd: string;
      operation: string;
      /** @pattern ^\d+(?:\.\d{1,6})?$ */
      reservationStepUsd: string;
    }[];
    /** @pattern ^\d+(?:\.\d{1,6})?$ */
    spendThresholdUsd: string;
  } | null;
  tierSource: "SPEND" | "ASSIGNED";
  /** @pattern ^\d+(?:\.\d{1,6})?$ */
  totalSpentUsd: string;
}

export type BillingMeTierListError = {
  message: string;
};

export type BillingMeUsageChargesDailySummaryListData = {
  /**
   * @min 0
   * @max 9007199254740991
   */
  chargeCount: number;
  /** @pattern ^\d{4}-\d{2}-\d{2}$ */
  date: string;
  groups: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    chargeCount: number;
    description: string;
    key: string;
    operation: string;
    sourceModule: string;
    /** @pattern ^\d+(?:\.\d{1,6})?$ */
    totalChargeUsd: string;
  }[];
  /** @pattern ^\d+(?:\.\d{1,6})?$ */
  totalChargeUsd: string;
}[];

export type BillingMeUsageChargesDailySummaryListError = {
  message: string;
};

export interface BillingMeUsageChargesDailySummaryListParams {
  /** @pattern ^\d{4}-\d{2}-\d{2}$ */
  fromDate: string;
  /** @pattern ^\d{4}-\d{2}-\d{2}$ */
  toDate: string;
}

export type BillingMeUsageChargesListData = {
  /** @pattern ^\d+(?:\.\d{1,6})?$ */
  baseCostUsd: string;
  /** @format date-time */
  createdAt: string;
  description: string;
  id: string;
  key: string;
  /** @pattern ^\d+(?:\.\d{1,6})?$ */
  markupUsd: string;
  operation: string;
  sourceModule: string;
  /** @pattern ^\d+(?:\.\d{1,6})?$ */
  totalChargeUsd: string;
}[];

export type BillingMeUsageChargesListError = {
  message: string;
};

export interface BillingMeUsageChargesListParams {
  /** @pattern ^\d{4}-\d{2}-\d{2}$ */
  fromDate: string;
  /** @pattern ^\d{4}-\d{2}-\d{2}$ */
  toDate: string;
}

export type DownloadsDetailError = {
  message: string;
};

export interface DownloadsDetailParams {
  /** @minLength 1 */
  storedFileId: string;
}

export interface GetDownloadsData {
  /** @format date-time */
  expiresAt: string;
  fileName: string | null;
  mimeType: string | null;
  /** @format uri */
  signedUrl: string;
}

export type GetDownloadsError = {
  message: string;
};

export interface GetDownloadsParams {
  /** @minLength 1 */
  storedFileId: string;
}

export interface GetPublicApiData {
  accountConfigured: boolean;
  /** @format date-time */
  createdAt: string;
  /**
   * @format email
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email: string | null;
  id: string;
  name: string | null;
  nativeLanguage: string | null;
  nickname: string;
  /** @format date-time */
  updatedAt: string;
}

export type GetPublicApiError = {
  message: string;
};

export interface ProgressBoardAttachmentsCompleteCreateData {
  /** @format date-time */
  createdAt: string;
  downloadResolveUrl: string | null;
  downloadUrl: string | null;
  filename: string;
  id: string;
  mimeType: string;
  /**
   * @min -9007199254740991
   * @max 9007199254740991
   */
  sizeBytes: number | null;
  storageProvider: "cloudflare_r2";
  /** @format date-time */
  updatedAt: string;
  uploadStatus: "pending" | "uploaded" | "failed" | "deleted";
  /** @format date-time */
  uploadedAt: string | null;
}

export type ProgressBoardAttachmentsCompleteCreateError = {
  message: string;
};

export interface ProgressBoardAttachmentsCompleteCreateParams {
  /** @minLength 1 */
  attachmentId: string;
}

export interface ProgressBoardCommentsAttachmentsCreateData {
  attachment: {
    /** @format date-time */
    createdAt: string;
    downloadResolveUrl: string | null;
    downloadUrl: string | null;
    filename: string;
    id: string;
    mimeType: string;
    /**
     * @min -9007199254740991
     * @max 9007199254740991
     */
    sizeBytes: number | null;
    storageProvider: "cloudflare_r2";
    /** @format date-time */
    updatedAt: string;
    uploadStatus: "pending" | "uploaded" | "failed" | "deleted";
    /** @format date-time */
    uploadedAt: string | null;
  };
  upload: {
    /** @format date-time */
    expiresAt: string;
    headers: Record<string, string>;
    method: "PUT";
    /** @format uri */
    url: string;
  };
}

export type ProgressBoardCommentsAttachmentsCreateError = {
  message: string;
};

export interface ProgressBoardCommentsAttachmentsCreateParams {
  /** @minLength 1 */
  commentId: string;
}

export interface ProgressBoardCommentsAttachmentsCreatePayload {
  /**
   * @minLength 1
   * @maxLength 255
   */
  filename: string;
  /**
   * @minLength 1
   * @maxLength 120
   */
  mimeType: string;
  /**
   * @min 0
   * @max 10485760
   */
  sizeBytes?: number;
}

export type ProgressBoardCommentsDeleteData = null;

export type ProgressBoardCommentsDeleteError = {
  message: string;
};

export interface ProgressBoardCommentsDeleteParams {
  /** @minLength 1 */
  commentId: string;
}

export interface ProgressBoardCommentsPartialUpdateData {
  attachments: {
    /** @format date-time */
    createdAt: string;
    downloadResolveUrl: string | null;
    downloadUrl: string | null;
    filename: string;
    id: string;
    mimeType: string;
    /**
     * @min -9007199254740991
     * @max 9007199254740991
     */
    sizeBytes: number | null;
    storageProvider: "cloudflare_r2";
    /** @format date-time */
    updatedAt: string;
    uploadStatus: "pending" | "uploaded" | "failed" | "deleted";
    /** @format date-time */
    uploadedAt: string | null;
  }[];
  author: {
    id: string;
    name: string | null;
    nickname: string;
  };
  body: string;
  /** @format date-time */
  createdAt: string;
  id: string;
  /** @format date-time */
  updatedAt: string;
}

export type ProgressBoardCommentsPartialUpdateError = {
  message: string;
};

export interface ProgressBoardCommentsPartialUpdateParams {
  /** @minLength 1 */
  commentId: string;
}

export interface ProgressBoardCommentsPartialUpdatePayload {
  /** @maxLength 50000 */
  body: string;
}

export interface ProgressBoardInterviewsAiListData {
  context: {
    companyName: string;
    interviewId: string;
    meetingUrl: string | null;
    progressBoardItemId: string;
    projectId: string;
    recruiterName: string;
    resumeLanguage: string;
    /** @format date-time */
    scheduledAt: string;
    title: string;
  };
  overview: {
    contentJson: {
      header: {
        candidateName: string;
        companyName: string;
        /**
         * @min 0
         * @max 9007199254740991
         */
        durationSeconds: number;
        executiveSummary: string;
        interviewTitle: string;
        interviewType:
          | "HR"
          | "TECHNICAL"
          | "SYSTEM_DESIGN"
          | "MANAGER"
          | "MIXED";
        interviewerName: string;
        language: string;
        roleTitle: string;
        scheduledAtIso: string;
        /**
         * @min 0
         * @max 9007199254740991
         */
        speakerCount: number;
      };
      notableMoments: {
        /**
         * @min 0
         * @max 9007199254740991
         */
        endedAtSeconds: number;
        kind:
          | "BEST_TECHNICAL_ANSWER"
          | "BEST_PRODUCT_THINKING_ANSWER"
          | "MOST_CONFIDENT_MOMENT"
          | "MOST_VAGUE_ANSWER"
          | "RED_FLAG"
          | "IMPORTANT_CONTEXT";
        speakerLabel: string;
        /**
         * @min 0
         * @max 9007199254740991
         */
        startedAtSeconds: number;
        summary: string;
        title: string;
        transcriptQuote: string;
        whyItMatters: string;
      }[];
      questionBreakdown: {
        answerSummary: string;
        askedBy: string;
        category: string;
        confidence: "HIGH" | "MEDIUM" | "LOW";
        directness: "DIRECT" | "PARTIAL" | "EVADED";
        /**
         * @min 0
         * @max 9007199254740991
         */
        endedAtSeconds: number;
        evidence: {
          /**
           * @min 0
           * @max 9007199254740991
           */
          endedAtSeconds: number;
          note: string;
          quote: string;
          speakerLabel: string;
          /**
           * @min 0
           * @max 9007199254740991
           */
          startedAtSeconds: number;
        }[];
        followUps: string[];
        notes: string[];
        quality: "STRONG" | "MEDIUM" | "WEAK" | "UNCLEAR";
        question: string;
        /**
         * @min 0
         * @max 9007199254740991
         */
        startedAtSeconds: number;
      }[];
      quickStats: {
        /** @min 0 */
        averageCandidateAnswerSeconds: number;
        /**
         * @min 0
         * @max 9007199254740991
         */
        directAnswerMissCount: number;
        /**
         * @min 0
         * @max 9007199254740991
         */
        durationSeconds: number;
        /**
         * @min 0
         * @max 9007199254740991
         */
        followUpQuestionCount: number;
        /**
         * @min 0
         * @max 9007199254740991
         */
        interviewerInterruptionsCount: number;
        metricNotes: string[];
        /**
         * @min 0
         * @max 9007199254740991
         */
        questionCount: number;
        scorecards: {
          key: "confidence" | "clarity" | "relevance" | "hesitation";
          label: "HIGH" | "MEDIUM" | "LOW";
          rationale: string;
          /**
           * @min 0
           * @max 100
           */
          score: number;
        }[];
        speakerTalkRatio: {
          /**
           * @min 0
           * @max 100
           */
          candidatePercent: number;
          /**
           * @min 0
           * @max 100
           */
          interviewerPercent: number;
          /**
           * @min 0
           * @max 100
           */
          otherPercent: number;
        };
        /**
         * @min 0
         * @max 9007199254740991
         */
        technicalTopicCount: number;
      };
      recommendation: {
        missingValidationAreas: string[];
        nextStageRecommendation: "YES" | "MAYBE" | "NO";
        overallRationale: string;
        suggestedNextRoundFocus: string[];
        suggestedQuestions: string[];
      };
      schemaVersion: "interview_overview_v2";
      signals: {
        dimension:
          | "TECHNICAL_DEPTH"
          | "COMMUNICATION"
          | "PROBLEM_SOLVING"
          | "OWNERSHIP"
          | "LEADERSHIP"
          | "CULTURE_FIT"
          | "ENGLISH_FLUENCY";
        evidence: {
          /**
           * @min 0
           * @max 9007199254740991
           */
          endedAtSeconds: number;
          note: string;
          quote: string;
          speakerLabel: string;
          /**
           * @min 0
           * @max 9007199254740991
           */
          startedAtSeconds: number;
        }[];
        label: "STRONG" | "MEDIUM" | "WEAK" | "UNCLEAR";
        summary: string;
      }[];
      summaryMarkdown: string;
      takeaways: {
        openQuestions: {
          evidence: {
            /**
             * @min 0
             * @max 9007199254740991
             */
            endedAtSeconds: number;
            note: string;
            quote: string;
            speakerLabel: string;
            /**
             * @min 0
             * @max 9007199254740991
             */
            startedAtSeconds: number;
          }[];
          summary: string;
          title: string;
        }[];
        positiveSignals: {
          evidence: {
            /**
             * @min 0
             * @max 9007199254740991
             */
            endedAtSeconds: number;
            note: string;
            quote: string;
            speakerLabel: string;
            /**
             * @min 0
             * @max 9007199254740991
             */
            startedAtSeconds: number;
          }[];
          summary: string;
          title: string;
        }[];
        redFlags: {
          evidence: {
            /**
             * @min 0
             * @max 9007199254740991
             */
            endedAtSeconds: number;
            note: string;
            quote: string;
            speakerLabel: string;
            /**
             * @min 0
             * @max 9007199254740991
             */
            startedAtSeconds: number;
          }[];
          summary: string;
          title: string;
        }[];
        risks: {
          evidence: {
            /**
             * @min 0
             * @max 9007199254740991
             */
            endedAtSeconds: number;
            note: string;
            quote: string;
            speakerLabel: string;
            /**
             * @min 0
             * @max 9007199254740991
             */
            startedAtSeconds: number;
          }[];
          summary: string;
          title: string;
        }[];
        strengths: {
          evidence: {
            /**
             * @min 0
             * @max 9007199254740991
             */
            endedAtSeconds: number;
            note: string;
            quote: string;
            speakerLabel: string;
            /**
             * @min 0
             * @max 9007199254740991
             */
            startedAtSeconds: number;
          }[];
          summary: string;
          title: string;
        }[];
      };
      timeline: {
        /**
         * @min 0
         * @max 9007199254740991
         */
        endedAtSeconds: number;
        markers: {
          /**
           * @min 0
           * @max 9007199254740991
           */
          endedAtSeconds: number;
          kind:
            | "STRONG_ANSWER"
            | "WEAK_ANSWER"
            | "UNCLEAR_MOMENT"
            | "RED_FLAG"
            | "IMPORTANT_CONTEXT";
          /**
           * @min 0
           * @max 9007199254740991
           */
          startedAtSeconds: number;
          summary: string;
          title: string;
        }[];
        /**
         * @min 0
         * @max 9007199254740991
         */
        startedAtSeconds: number;
        summary: string;
        title: string;
        topics: string[];
      }[];
      topicsCovered: {
        coverage: "NOT_TOUCHED" | "COVERED" | "LIGHT" | "MEDIUM" | "DEEP";
        evidence: {
          /**
           * @min 0
           * @max 9007199254740991
           */
          endedAtSeconds: number;
          note: string;
          quote: string;
          speakerLabel: string;
          /**
           * @min 0
           * @max 9007199254740991
           */
          startedAtSeconds: number;
        }[];
        summary: string;
        topic: string;
      }[];
    } | null;
    /** @format date-time */
    createdAt: string;
    errorMessage: string | null;
    /** @format date-time */
    generatedAt: string | null;
    hasContent: boolean;
    id: string;
    interviewId: string;
    status: "GENERATING" | "READY" | "FAILED";
    summaryMarkdown: string | null;
    /** @format date-time */
    updatedAt: string;
  };
  transcription: {
    /**
     * @min -9007199254740991
     * @max 9007199254740991
     */
    audioChannelCount: number | null;
    audioFileName: string | null;
    audioMimeType: string | null;
    /**
     * @min -9007199254740991
     * @max 9007199254740991
     */
    audioSizeBytes: number | null;
    /** @format date-time */
    createdAt: string;
    detectedLanguage: string | null;
    /**
     * @min -9007199254740991
     * @max 9007199254740991
     */
    durationSeconds: number | null;
    errorMessage: string | null;
    hasTranscript: boolean;
    id: string;
    interviewId: string;
    provider: string | null;
    providerModel: string | null;
    requestedLanguage: string;
    status:
      | "UPLOADING"
      | "PENDING_METADATA"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED";
    /** @format date-time */
    transcribedAt: string | null;
    transcriptFormattedJson: {
      segments: {
        /**
         * @min 0
         * @max 1
         */
        confidence: number | null;
        /** @min 0 */
        endedAtSeconds: number | null;
        speakerLabel: string;
        /** @min 0 */
        startedAtSeconds: number | null;
        text: string;
      }[];
    };
    transcriptFormattedText: string | null;
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProgressBoardInterviewsAiListError = {
  message: string;
};

export interface ProgressBoardInterviewsAiListParams {
  /** @minLength 1 */
  interviewId: string;
}

export type ProgressBoardInterviewsDeleteData = null;

export type ProgressBoardInterviewsDeleteError = {
  message: string;
};

export interface ProgressBoardInterviewsDeleteParams {
  /** @minLength 1 */
  interviewId: string;
}

export interface ProgressBoardInterviewsPartialUpdateData {
  /** @format date-time */
  createdAt: string;
  hasOverview: boolean;
  hasTranscript: boolean;
  id: string;
  meetingUrl: string | null;
  overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
  recruiterName: string;
  /** @format date-time */
  scheduledAt: string;
  transcriptionLanguage: string | null;
  transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
  /** @format date-time */
  updatedAt: string;
}

export type ProgressBoardInterviewsPartialUpdateError = {
  message: string;
};

export interface ProgressBoardInterviewsPartialUpdateParams {
  /** @minLength 1 */
  interviewId: string;
}

export interface ProgressBoardInterviewsPartialUpdatePayload {
  /** @format uri */
  meetingUrl?: string | null;
  /**
   * @minLength 1
   * @maxLength 180
   */
  recruiterName?: string;
  scheduledAt?: any;
}

export interface ProgressBoardItemsCommentsCreateData {
  attachments: {
    /** @format date-time */
    createdAt: string;
    downloadResolveUrl: string | null;
    downloadUrl: string | null;
    filename: string;
    id: string;
    mimeType: string;
    /**
     * @min -9007199254740991
     * @max 9007199254740991
     */
    sizeBytes: number | null;
    storageProvider: "cloudflare_r2";
    /** @format date-time */
    updatedAt: string;
    uploadStatus: "pending" | "uploaded" | "failed" | "deleted";
    /** @format date-time */
    uploadedAt: string | null;
  }[];
  author: {
    id: string;
    name: string | null;
    nickname: string;
  };
  body: string;
  /** @format date-time */
  createdAt: string;
  id: string;
  /** @format date-time */
  updatedAt: string;
}

export type ProgressBoardItemsCommentsCreateError = {
  message: string;
};

export interface ProgressBoardItemsCommentsCreateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsCommentsCreatePayload {
  /** @maxLength 50000 */
  body?: string;
}

export interface ProgressBoardItemsCommentsListData {
  comments: {
    attachments: {
      /** @format date-time */
      createdAt: string;
      downloadResolveUrl: string | null;
      downloadUrl: string | null;
      filename: string;
      id: string;
      mimeType: string;
      /**
       * @min -9007199254740991
       * @max 9007199254740991
       */
      sizeBytes: number | null;
      storageProvider: "cloudflare_r2";
      /** @format date-time */
      updatedAt: string;
      uploadStatus: "pending" | "uploaded" | "failed" | "deleted";
      /** @format date-time */
      uploadedAt: string | null;
    }[];
    author: {
      id: string;
      name: string | null;
      nickname: string;
    };
    body: string;
    /** @format date-time */
    createdAt: string;
    id: string;
    /** @format date-time */
    updatedAt: string;
  }[];
  itemId: string;
}

export type ProgressBoardItemsCommentsListError = {
  message: string;
};

export interface ProgressBoardItemsCommentsListParams {
  /** @minLength 1 */
  itemId: string;
}

export type ProgressBoardItemsCoverLetterDeleteData = null;

export type ProgressBoardItemsCoverLetterDeleteError = {
  message: string;
};

export interface ProgressBoardItemsCoverLetterDeleteParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsCoverLetterListData {
  context: {
    companyName: string;
    itemStatus: "todo" | "applied" | "active" | "declined" | "archived";
    progressBoardItemId: string;
    title: string;
    /** @format uri */
    vacancyUrl: string | null;
  };
  coverLetter: {
    contentJson: any;
    /** @format date-time */
    createdAt: string;
    hasContent: boolean;
    id: string;
    pdf: {
      /** @format uri */
      downloadResolveUrl: string;
      fileName: string;
      /** @format date-time */
      generatedAt: string;
      /**
       * @min 0
       * @max 9007199254740991
       */
      sizeBytes: number;
      /** @format uri */
      url: string;
    } | null;
    progressBoardItemId: string;
    status: "GENERATING" | "READY" | "FAILED";
    /** @format date-time */
    updatedAt: string;
  };
  progressBoardItemId: string;
  relatedArtifacts: {
    coverLetterId: string | null;
    /** @format date-time */
    coverLetterUpdatedAt: string | null;
    interviewPrepId: string | null;
    /** @format date-time */
    interviewPrepUpdatedAt: string | null;
    resumeId: string | null;
    /** @format date-time */
    resumeUpdatedAt: string | null;
  };
}

export type ProgressBoardItemsCoverLetterListError = {
  message: string;
};

export interface ProgressBoardItemsCoverLetterListParams {
  /** @minLength 1 */
  itemId: string;
}

export type ProgressBoardItemsCoverLetterPdfExportCreateData =
  | {
      cacheStatus: "hit" | "generated";
      /** @format uri */
      downloadResolveUrl: string;
      /** @format uri */
      downloadUrl: string;
      status: "ready";
    }
  | {
      status: "queued";
      task: {
        /**
         * @min 0
         * @max 9007199254740991
         */
        attemptCount: number;
        /** @format date-time */
        createdAt: string;
        error: {
          code: string;
          message: string;
        } | null;
        /** @format date-time */
        finishedAt: string | null;
        id: string;
        /**
         * @exclusiveMin true
         * @max 9007199254740991
         */
        maxAttempts: number;
        result: Record<string, any>;
        sourceModule: "cover-letters";
        /** @format date-time */
        startedAt: string | null;
        status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
        taskType:
          | "cover_letters.cover_letter_generate"
          | "cover_letters.cover_letter_pdf_export";
        /** @format date-time */
        updatedAt: string;
      };
    };

export type ProgressBoardItemsCoverLetterPdfExportCreateError = {
  message: string;
};

export interface ProgressBoardItemsCoverLetterPdfExportCreateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsCoverLetterTasksCreateData {
  task: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    attemptCount: number;
    /** @format date-time */
    createdAt: string;
    error: {
      code: string;
      message: string;
    } | null;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxAttempts: number;
    result: Record<string, any>;
    sourceModule: "cover-letters";
    /** @format date-time */
    startedAt: string | null;
    status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
    taskType:
      | "cover_letters.cover_letter_generate"
      | "cover_letters.cover_letter_pdf_export";
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProgressBoardItemsCoverLetterTasksCreateError = {
  message: string;
};

export interface ProgressBoardItemsCoverLetterTasksCreateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsCoverLetterTasksCreatePayload {
  /** Optional current cover letter JSON used for iterative regeneration. */
  currentContentJson?: any;
  /**
   * Optional wish text from the user with additional cover letter preferences.
   * @maxLength 20000
   */
  wishText?: string;
}

export interface ProgressBoardItemsCoverLetterUpdateData {
  context: {
    companyName: string;
    itemStatus: "todo" | "applied" | "active" | "declined" | "archived";
    progressBoardItemId: string;
    title: string;
    /** @format uri */
    vacancyUrl: string | null;
  };
  coverLetter: {
    contentJson: any;
    /** @format date-time */
    createdAt: string;
    hasContent: boolean;
    id: string;
    pdf: {
      /** @format uri */
      downloadResolveUrl: string;
      fileName: string;
      /** @format date-time */
      generatedAt: string;
      /**
       * @min 0
       * @max 9007199254740991
       */
      sizeBytes: number;
      /** @format uri */
      url: string;
    } | null;
    progressBoardItemId: string;
    status: "GENERATING" | "READY" | "FAILED";
    /** @format date-time */
    updatedAt: string;
  };
  progressBoardItemId: string;
  relatedArtifacts: {
    coverLetterId: string | null;
    /** @format date-time */
    coverLetterUpdatedAt: string | null;
    interviewPrepId: string | null;
    /** @format date-time */
    interviewPrepUpdatedAt: string | null;
    resumeId: string | null;
    /** @format date-time */
    resumeUpdatedAt: string | null;
  };
}

export type ProgressBoardItemsCoverLetterUpdateError = {
  message: string;
};

export interface ProgressBoardItemsCoverLetterUpdateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsCoverLetterUpdatePayload {
  /** Full cover letter JSON to persist after manual editing. */
  contentJson: any;
}

export type ProgressBoardItemsDeleteData = null;

export type ProgressBoardItemsDeleteError = {
  message: string;
};

export interface ProgressBoardItemsDeleteParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsDetailData {
  artifacts: {
    id: string;
    type: "resume" | "cover_letter" | "interview_preparation";
  }[];
  /**
   * @min 0
   * @max 9007199254740991
   */
  commentCount: number;
  comments: {
    attachments: {
      /** @format date-time */
      createdAt: string;
      downloadResolveUrl: string | null;
      downloadUrl: string | null;
      filename: string;
      id: string;
      mimeType: string;
      /**
       * @min -9007199254740991
       * @max 9007199254740991
       */
      sizeBytes: number | null;
      storageProvider: "cloudflare_r2";
      /** @format date-time */
      updatedAt: string;
      uploadStatus: "pending" | "uploaded" | "failed" | "deleted";
      /** @format date-time */
      uploadedAt: string | null;
    }[];
    author: {
      id: string;
      name: string | null;
      nickname: string;
    };
    body: string;
    /** @format date-time */
    createdAt: string;
    id: string;
    /** @format date-time */
    updatedAt: string;
  }[];
  companyName: string;
  /** @format date-time */
  createdAt: string;
  createdBy: {
    id: string;
    name: string | null;
    nickname: string;
  };
  id: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  interviewCount: number;
  interviews: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  }[];
  /** @format date-time */
  lastStatusChangedAt: string;
  nextInterview: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  };
  projectId: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  sortOrder: number;
  status: "todo" | "applied" | "active" | "declined" | "archived";
  statusHistory: {
    changedBy: {
      id: string;
      name: string | null;
      nickname: string;
    };
    /** @format date-time */
    createdAt: string;
    fromStatus: "todo" | "applied" | "active" | "declined" | "archived" | null;
    id: string;
    toStatus: "todo" | "applied" | "active" | "declined" | "archived";
  }[];
  title: string;
  /** @format date-time */
  updatedAt: string;
  vacancyText: string | null;
  vacancyUrl: string | null;
}

export type ProgressBoardItemsDetailError = {
  message: string;
};

export interface ProgressBoardItemsDetailParams {
  /** @minLength 1 */
  itemId: string;
}

export type ProgressBoardItemsInterviewPreparationDeleteData = null;

export type ProgressBoardItemsInterviewPreparationDeleteError = {
  message: string;
};

export interface ProgressBoardItemsInterviewPreparationDeleteParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsInterviewPreparationListData {
  context: {
    companyName: string;
    itemStatus: "todo" | "applied" | "active" | "declined" | "archived";
    progressBoardItemId: string;
    title: string;
    /** @format uri */
    vacancyUrl: string | null;
  };
  interviewPreparation: {
    contentJson: any;
    /** @format date-time */
    createdAt: string;
    hasContent: boolean;
    id: string;
    progressBoardItemId: string;
    status: "GENERATING" | "READY" | "FAILED";
    /** @format date-time */
    updatedAt: string;
  } | null;
  progressBoardItemId: string;
  relatedArtifacts: {
    coverLetterId: string | null;
    /** @format date-time */
    coverLetterUpdatedAt: string | null;
    interviewPrepId: string | null;
    /** @format date-time */
    interviewPrepUpdatedAt: string | null;
    resumeId: string | null;
    /** @format date-time */
    resumeUpdatedAt: string | null;
  };
}

export type ProgressBoardItemsInterviewPreparationListError = {
  message: string;
};

export interface ProgressBoardItemsInterviewPreparationListParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsInterviewPreparationTasksCreateData {
  task: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    attemptCount: number;
    /** @format date-time */
    createdAt: string;
    error: {
      code: string;
      message: string;
    } | null;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxAttempts: number;
    result: Record<string, any>;
    sourceModule: "interview-prep";
    /** @format date-time */
    startedAt: string | null;
    status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
    taskType: "interview_prep.interview_preparation_generate";
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProgressBoardItemsInterviewPreparationTasksCreateError = {
  message: string;
};

export interface ProgressBoardItemsInterviewPreparationTasksCreateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsInterviewPreparationTasksCreatePayload {
  /** Optional current interview preparation JSON used for iterative regeneration. */
  currentContentJson?: any;
}

export interface ProgressBoardItemsInterviewsCreateData {
  interview: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  };
  item: {
    artifacts: {
      id: string;
      type: "resume" | "cover_letter" | "interview_preparation";
    }[];
    /**
     * @min 0
     * @max 9007199254740991
     */
    commentCount: number;
    companyName: string;
    /** @format date-time */
    createdAt: string;
    id: string;
    /**
     * @min 0
     * @max 9007199254740991
     */
    interviewCount: number;
    /** @format date-time */
    lastStatusChangedAt: string;
    nextInterview: {
      /** @format date-time */
      createdAt: string;
      hasOverview: boolean;
      hasTranscript: boolean;
      id: string;
      meetingUrl: string | null;
      overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
      recruiterName: string;
      /** @format date-time */
      scheduledAt: string;
      transcriptionLanguage: string | null;
      transcriptionStatus:
        | "UPLOADING"
        | "TRANSCRIBING"
        | "READY"
        | "FAILED"
        | null;
      /** @format date-time */
      updatedAt: string;
    };
    /**
     * @min 0
     * @max 9007199254740991
     */
    sortOrder: number;
    status: "todo" | "applied" | "active" | "declined" | "archived";
    title: string;
    /** @format date-time */
    updatedAt: string;
    vacancyUrl: string | null;
  };
  itemStatusChange: {
    fromStatus: "todo" | "applied" | "active" | "declined" | "archived";
    toStatus: "todo" | "applied" | "active" | "declined" | "archived";
  } | null;
}

export type ProgressBoardItemsInterviewsCreateError = {
  message: string;
};

export interface ProgressBoardItemsInterviewsCreateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsInterviewsCreatePayload {
  /** @format uri */
  meetingUrl?: string;
  /**
   * @minLength 1
   * @maxLength 180
   */
  recruiterName: string;
  scheduledAt: any;
}

export interface ProgressBoardItemsInterviewsListData {
  interviews: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  }[];
  itemId: string;
}

export type ProgressBoardItemsInterviewsListError = {
  message: string;
};

export interface ProgressBoardItemsInterviewsListParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsMoveCreateData {
  artifacts: {
    id: string;
    type: "resume" | "cover_letter" | "interview_preparation";
  }[];
  /**
   * @min 0
   * @max 9007199254740991
   */
  commentCount: number;
  comments: {
    attachments: {
      /** @format date-time */
      createdAt: string;
      downloadResolveUrl: string | null;
      downloadUrl: string | null;
      filename: string;
      id: string;
      mimeType: string;
      /**
       * @min -9007199254740991
       * @max 9007199254740991
       */
      sizeBytes: number | null;
      storageProvider: "cloudflare_r2";
      /** @format date-time */
      updatedAt: string;
      uploadStatus: "pending" | "uploaded" | "failed" | "deleted";
      /** @format date-time */
      uploadedAt: string | null;
    }[];
    author: {
      id: string;
      name: string | null;
      nickname: string;
    };
    body: string;
    /** @format date-time */
    createdAt: string;
    id: string;
    /** @format date-time */
    updatedAt: string;
  }[];
  companyName: string;
  /** @format date-time */
  createdAt: string;
  createdBy: {
    id: string;
    name: string | null;
    nickname: string;
  };
  id: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  interviewCount: number;
  interviews: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  }[];
  /** @format date-time */
  lastStatusChangedAt: string;
  nextInterview: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  };
  projectId: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  sortOrder: number;
  status: "todo" | "applied" | "active" | "declined" | "archived";
  statusHistory: {
    changedBy: {
      id: string;
      name: string | null;
      nickname: string;
    };
    /** @format date-time */
    createdAt: string;
    fromStatus: "todo" | "applied" | "active" | "declined" | "archived" | null;
    id: string;
    toStatus: "todo" | "applied" | "active" | "declined" | "archived";
  }[];
  title: string;
  /** @format date-time */
  updatedAt: string;
  vacancyText: string | null;
  vacancyUrl: string | null;
}

export type ProgressBoardItemsMoveCreateError = {
  message: string;
};

export interface ProgressBoardItemsMoveCreateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsMoveCreatePayload {
  /**
   * @min 0
   * @max 9007199254740991
   */
  position: number;
  status: "todo" | "applied" | "active" | "declined" | "archived";
}

export interface ProgressBoardItemsPartialUpdateData {
  artifacts: {
    id: string;
    type: "resume" | "cover_letter" | "interview_preparation";
  }[];
  /**
   * @min 0
   * @max 9007199254740991
   */
  commentCount: number;
  comments: {
    attachments: {
      /** @format date-time */
      createdAt: string;
      downloadResolveUrl: string | null;
      downloadUrl: string | null;
      filename: string;
      id: string;
      mimeType: string;
      /**
       * @min -9007199254740991
       * @max 9007199254740991
       */
      sizeBytes: number | null;
      storageProvider: "cloudflare_r2";
      /** @format date-time */
      updatedAt: string;
      uploadStatus: "pending" | "uploaded" | "failed" | "deleted";
      /** @format date-time */
      uploadedAt: string | null;
    }[];
    author: {
      id: string;
      name: string | null;
      nickname: string;
    };
    body: string;
    /** @format date-time */
    createdAt: string;
    id: string;
    /** @format date-time */
    updatedAt: string;
  }[];
  companyName: string;
  /** @format date-time */
  createdAt: string;
  createdBy: {
    id: string;
    name: string | null;
    nickname: string;
  };
  id: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  interviewCount: number;
  interviews: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  }[];
  /** @format date-time */
  lastStatusChangedAt: string;
  nextInterview: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  };
  projectId: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  sortOrder: number;
  status: "todo" | "applied" | "active" | "declined" | "archived";
  statusHistory: {
    changedBy: {
      id: string;
      name: string | null;
      nickname: string;
    };
    /** @format date-time */
    createdAt: string;
    fromStatus: "todo" | "applied" | "active" | "declined" | "archived" | null;
    id: string;
    toStatus: "todo" | "applied" | "active" | "declined" | "archived";
  }[];
  title: string;
  /** @format date-time */
  updatedAt: string;
  vacancyText: string | null;
  vacancyUrl: string | null;
}

export type ProgressBoardItemsPartialUpdateError = {
  message: string;
};

export interface ProgressBoardItemsPartialUpdateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsPartialUpdatePayload {
  /**
   * @minLength 1
   * @maxLength 180
   */
  companyName?: string;
  status?: "todo" | "applied" | "active" | "declined" | "archived";
  /**
   * @minLength 1
   * @maxLength 180
   */
  title?: string;
  /** @maxLength 2000000 */
  vacancyText?: string | null;
  /** @format uri */
  vacancyUrl?: string | null;
}

export type ProgressBoardItemsTailoredResumeDeleteData = null;

export type ProgressBoardItemsTailoredResumeDeleteError = {
  message: string;
};

export interface ProgressBoardItemsTailoredResumeDeleteParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsTailoredResumeListData {
  context: {
    companyName: string;
    itemStatus: "todo" | "applied" | "active" | "declined" | "archived";
    progressBoardItemId: string;
    title: string;
    /** @format uri */
    vacancyUrl: string | null;
  };
  progressBoardItemId: string;
  relatedArtifacts: {
    coverLetterId: string | null;
    /** @format date-time */
    coverLetterUpdatedAt: string | null;
    interviewPrepId: string | null;
    /** @format date-time */
    interviewPrepUpdatedAt: string | null;
    resumeId: string | null;
    /** @format date-time */
    resumeUpdatedAt: string | null;
  };
  resume: {
    contentJson: any;
    /** @format date-time */
    createdAt: string;
    hasContent: boolean;
    id: string;
    pdf: {
      /** @format uri */
      downloadResolveUrl: string;
      fileName: string;
      /** @format date-time */
      generatedAt: string;
      /**
       * @min 0
       * @max 9007199254740991
       */
      sizeBytes: number;
      /** @format uri */
      url: string;
    } | null;
    progressBoardItemId: string;
    status: "GENERATING" | "READY" | "FAILED";
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProgressBoardItemsTailoredResumeListError = {
  message: string;
};

export interface ProgressBoardItemsTailoredResumeListParams {
  /** @minLength 1 */
  itemId: string;
}

export type ProgressBoardItemsTailoredResumePdfExportCreateData =
  | {
      cacheStatus: "hit" | "generated";
      /** @format uri */
      downloadResolveUrl: string;
      /** @format uri */
      downloadUrl: string;
      status: "ready";
    }
  | {
      status: "queued";
      task: {
        /**
         * @min 0
         * @max 9007199254740991
         */
        attemptCount: number;
        /** @format date-time */
        createdAt: string;
        error: {
          code: string;
          message: string;
        } | null;
        /** @format date-time */
        finishedAt: string | null;
        id: string;
        /**
         * @exclusiveMin true
         * @max 9007199254740991
         */
        maxAttempts: number;
        result: Record<string, any>;
        sourceModule: "resumes";
        /** @format date-time */
        startedAt: string | null;
        status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
        taskType:
          | "resumes.tailored_resume_generate"
          | "resumes.tailored_resume_pdf_export";
        /** @format date-time */
        updatedAt: string;
      };
    };

export type ProgressBoardItemsTailoredResumePdfExportCreateError = {
  message: string;
};

export interface ProgressBoardItemsTailoredResumePdfExportCreateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsTailoredResumeTasksCreateData {
  task: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    attemptCount: number;
    /** @format date-time */
    createdAt: string;
    error: {
      code: string;
      message: string;
    } | null;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxAttempts: number;
    result: Record<string, any>;
    sourceModule: "resumes";
    /** @format date-time */
    startedAt: string | null;
    status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
    taskType:
      | "resumes.tailored_resume_generate"
      | "resumes.tailored_resume_pdf_export";
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProgressBoardItemsTailoredResumeTasksCreateError = {
  message: string;
};

export interface ProgressBoardItemsTailoredResumeTasksCreateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsTailoredResumeTasksCreatePayload {
  /** Optional current resume JSON used for iterative regeneration. */
  currentContentJson?: any;
  /**
   * Optional wish text from the user with additional tailoring preferences.
   * @maxLength 20000
   */
  wishText?: string;
}

export interface ProgressBoardItemsTailoredResumeUpdateData {
  context: {
    companyName: string;
    itemStatus: "todo" | "applied" | "active" | "declined" | "archived";
    progressBoardItemId: string;
    title: string;
    /** @format uri */
    vacancyUrl: string | null;
  };
  progressBoardItemId: string;
  relatedArtifacts: {
    coverLetterId: string | null;
    /** @format date-time */
    coverLetterUpdatedAt: string | null;
    interviewPrepId: string | null;
    /** @format date-time */
    interviewPrepUpdatedAt: string | null;
    resumeId: string | null;
    /** @format date-time */
    resumeUpdatedAt: string | null;
  };
  resume: {
    contentJson: any;
    /** @format date-time */
    createdAt: string;
    hasContent: boolean;
    id: string;
    pdf: {
      /** @format uri */
      downloadResolveUrl: string;
      fileName: string;
      /** @format date-time */
      generatedAt: string;
      /**
       * @min 0
       * @max 9007199254740991
       */
      sizeBytes: number;
      /** @format uri */
      url: string;
    } | null;
    progressBoardItemId: string;
    status: "GENERATING" | "READY" | "FAILED";
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProgressBoardItemsTailoredResumeUpdateError = {
  message: string;
};

export interface ProgressBoardItemsTailoredResumeUpdateParams {
  /** @minLength 1 */
  itemId: string;
}

export interface ProgressBoardItemsTailoredResumeUpdatePayload {
  /** Full resume JSON to persist after manual editing. */
  contentJson: any;
}

export interface ProjectsAiPricingCatalogListData {
  aiBillingMode: "PROJECT_CREATOR" | "REQUEST_ACTOR";
  billedUserId: string;
  currency: "USD";
  disclaimer: string;
  effectiveTier: {
    id: string;
    isPublic: boolean;
    /**
     * @min 0
     * @max 9007199254740991
     */
    level: number;
    name: string;
    source: "SPEND" | "ASSIGNED";
    /** @pattern ^\d+(?:\.\d{1,6})?$ */
    spendThresholdUsd: string;
  };
  externalOperations: {
    appliesToOperations: string[];
    billingKind: "external_run";
    externalOperation: string;
    key: string;
    label: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxResultsPerRun: number;
    pricingOperation: string;
    provider: string;
    scraperName: string;
    scraperSlug: string;
    site: "LINKEDIN" | "INDEED" | "GLASSDOOR";
    tierPrices: {
      /** @pattern ^\d+(?:\.\d{1,6})?$ */
      priceUsd: string;
      tierId: string;
    }[];
    unit: "per_1000_results";
    unitPricing: {
      kind: "external_results";
      tiers: {
        /** @pattern ^\d+(?:\.\d{1,6})?$ */
        usdPer1000Results: string;
        tierId: string;
        /** @pattern ^\d+(?:\.\d{1,6})?$ */
        usdPerResult: string;
      }[];
    };
  }[];
  operations: (
    | {
        appliesToOperations: string[];
        billingKind: "llm";
        key: string;
        label: string;
        pricingOperation: string;
        projectPresetScope:
          | "artifact_generation"
          | "interview_preparation"
          | "interview_overview"
          | "ai_artifact_chat"
          | null;
        source: {
          addons: string[];
          kind: "preset" | "stt_model";
          model: string;
          name: string | null;
          provider: string;
          reasoning: string | null;
          slug: string | null;
        };
        sourceSelection: "project_preset" | "default_catalog";
        tierPrices: {
          /** @pattern ^\d+(?:\.\d{1,6})?$ */
          priceUsd: string;
          tierId: string;
        }[];
        unit: "per_generation";
        unitPricing: {
          kind: "llm_tokens";
          tiers: {
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            cachedInputUsdPerMillionTokens: string;
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            inputUsdPerMillionTokens: string;
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            outputUsdPerMillionTokens: string;
            tierId: string;
          }[];
        };
      }
    | {
        appliesToOperations: string[];
        billingKind: "stt";
        key: string;
        label: string;
        pricingOperation: string;
        projectPresetScope: null;
        source: {
          addons: string[];
          kind: "preset" | "stt_model";
          model: string;
          name: string | null;
          provider: string;
          reasoning: string | null;
          slug: string | null;
        };
        sourceSelection: "default_catalog";
        tierPrices: {
          /** @pattern ^\d+(?:\.\d{1,6})?$ */
          priceUsd: string;
          tierId: string;
        }[];
        unit: "per_hour";
        unitPricing: {
          kind: "stt_audio";
          tiers: {
            tierId: string;
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            usdPerHour: string;
            /** @pattern ^\d+(?:\.\d{1,6})?$ */
            usdPerMinute: string;
          }[];
        };
      }
  )[];
  projectId: string;
  projectPresets: {
    aiArtifactChatPreset: string;
    artifactAiPreset: string;
    interviewOverviewAiPreset: string;
    interviewPreparationAiPreset: string;
  };
  tiers: {
    id: string;
    isPublic: boolean;
    /**
     * @min 0
     * @max 9007199254740991
     */
    level: number;
    name: string;
    /** @pattern ^\d+(?:\.\d{1,6})?$ */
    spendThresholdUsd: string;
  }[];
}

export type ProjectsAiPricingCatalogListError = {
  message: string;
};

export interface ProjectsAiPricingCatalogListParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsCandidateProfileListData {
  contentMarkdown: string;
  /** @format date-time */
  createdAt: string | null;
  hasContent: boolean;
  hasMainEvaluationAdditionalInstructions: boolean;
  hasSummary: boolean;
  mainEvaluationAdditionalInstructions: string;
  projectId: string;
  summaryMarkdown: string;
  /** @format date-time */
  summaryUpdatedAt: string | null;
  /** @format date-time */
  updatedAt: string | null;
}

export type ProjectsCandidateProfileListError = {
  message: string;
};

export interface ProjectsCandidateProfileListParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsCandidateProfileUpdateData {
  contentMarkdown: string;
  /** @format date-time */
  createdAt: string | null;
  hasContent: boolean;
  hasMainEvaluationAdditionalInstructions: boolean;
  hasSummary: boolean;
  mainEvaluationAdditionalInstructions: string;
  projectId: string;
  summaryMarkdown: string;
  /** @format date-time */
  summaryUpdatedAt: string | null;
  /** @format date-time */
  updatedAt: string | null;
}

export type ProjectsCandidateProfileUpdateError = {
  message: string;
};

export interface ProjectsCandidateProfileUpdateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsCandidateProfileUpdatePayload {
  /** @maxLength 2000000 */
  contentMarkdown: string;
}

export interface ProjectsFirstSetupListData {
  /**
   * @min 0
   * @max 9007199254740991
   */
  completedRequiredCount: number;
  hiddenForCurrentUser: boolean;
  isComplete: boolean;
  shouldDisplay: boolean;
  steps: {
    id:
      | "candidate_profile"
      | "resume_photo"
      | "first_board_item"
      | "tailored_resume"
      | "tailored_cover_letter"
      | "first_interview_date"
      | "interview_prep"
      | "interview_audio";
    optional: boolean;
    /**
     * @min 0
     * @max 9007199254740991
     */
    sortOrder: number;
    status: "pending" | "completed";
    title: string;
  }[];
  /**
   * @min 0
   * @max 9007199254740991
   */
  totalRequiredCount: number;
  wasCompletedForCurrentUser: boolean;
}

export type ProjectsFirstSetupListError = {
  message: string;
};

export interface ProjectsFirstSetupListParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsFirstSetupPreferencesPartialUpdateData {
  /**
   * @min 0
   * @max 9007199254740991
   */
  completedRequiredCount: number;
  hiddenForCurrentUser: boolean;
  isComplete: boolean;
  shouldDisplay: boolean;
  steps: {
    id:
      | "candidate_profile"
      | "resume_photo"
      | "first_board_item"
      | "tailored_resume"
      | "tailored_cover_letter"
      | "first_interview_date"
      | "interview_prep"
      | "interview_audio";
    optional: boolean;
    /**
     * @min 0
     * @max 9007199254740991
     */
    sortOrder: number;
    status: "pending" | "completed";
    title: string;
  }[];
  /**
   * @min 0
   * @max 9007199254740991
   */
  totalRequiredCount: number;
  wasCompletedForCurrentUser: boolean;
}

export type ProjectsFirstSetupPreferencesPartialUpdateError = {
  message: string;
};

export interface ProjectsFirstSetupPreferencesPartialUpdateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsFirstSetupPreferencesPartialUpdatePayload {
  hiddenForCurrentUser: boolean;
}

export interface ProjectsInterviewsListData {
  interviews: {
    companyName: string;
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    interviewId: string;
    itemStatus: "todo" | "applied" | "active" | "declined" | "archived";
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    progressBoardItemId: string;
    projectId: string;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    title: string;
    transcriptionLanguage?: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  }[];
  projectId: string;
}

export type ProjectsInterviewsListError = {
  message: string;
};

export interface ProjectsInterviewsListParams {
  from?: any;
  /** @minLength 1 */
  projectId: string;
  to?: any;
}

export type ProjectsListData = {
  aiArtifactChatPreset: "essential" | "balanced" | "advanced" | "max";
  aiBillingMode: "PROJECT_CREATOR" | "REQUEST_ACTOR";
  artifactAiPreset: "essential" | "balanced" | "advanced" | "max";
  coverLetterPdfFileNameTemplate: string;
  coverLetterStructure: string;
  /** @format date-time */
  createdAt: string;
  createdBy: {
    id: string;
    name: string | null;
    nickname: string;
  };
  id: string;
  interviewOverviewAiPreset: "essential" | "balanced" | "advanced" | "max";
  interviewPreparationAiPreset: "essential" | "balanced" | "advanced" | "max";
  isArchived: boolean;
  location: string;
  name: string;
  owners: {
    id: string;
    isCurrentUser: boolean;
    name: string | null;
    nickname: string;
  }[];
  relationToViewer: "mine" | "shared";
  resumeLanguage: string;
  resumePdfFileNameTemplate: string;
  resumePhotoFilename: string | null;
  /** @format date-time */
  resumePhotoUploadedAt: string | null;
  /** @format uri */
  resumePhotoUrl: string | null;
  resumeStructure: string;
  /** @format date-time */
  scrapingLastTriggeredAt: string | null;
  scrapingSchedule: {
    slots: {
      /**
       * @min 0
       * @max 6
       */
      dayOfWeekUtc: number;
      /**
       * @min 0
       * @max 1439
       */
      minuteOfDayUtc: number;
    }[];
  };
  /** @format date-time */
  updatedAt: string;
}[];

export type ProjectsListError = {
  message: string;
};

export interface ProjectsProgressBoardItemsCreateData {
  artifacts: {
    id: string;
    type: "resume" | "cover_letter" | "interview_preparation";
  }[];
  /**
   * @min 0
   * @max 9007199254740991
   */
  commentCount: number;
  comments: {
    attachments: {
      /** @format date-time */
      createdAt: string;
      downloadResolveUrl: string | null;
      downloadUrl: string | null;
      filename: string;
      id: string;
      mimeType: string;
      /**
       * @min -9007199254740991
       * @max 9007199254740991
       */
      sizeBytes: number | null;
      storageProvider: "cloudflare_r2";
      /** @format date-time */
      updatedAt: string;
      uploadStatus: "pending" | "uploaded" | "failed" | "deleted";
      /** @format date-time */
      uploadedAt: string | null;
    }[];
    author: {
      id: string;
      name: string | null;
      nickname: string;
    };
    body: string;
    /** @format date-time */
    createdAt: string;
    id: string;
    /** @format date-time */
    updatedAt: string;
  }[];
  companyName: string;
  /** @format date-time */
  createdAt: string;
  createdBy: {
    id: string;
    name: string | null;
    nickname: string;
  };
  id: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  interviewCount: number;
  interviews: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  }[];
  /** @format date-time */
  lastStatusChangedAt: string;
  nextInterview: {
    /** @format date-time */
    createdAt: string;
    hasOverview: boolean;
    hasTranscript: boolean;
    id: string;
    meetingUrl: string | null;
    overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
    recruiterName: string;
    /** @format date-time */
    scheduledAt: string;
    transcriptionLanguage: string | null;
    transcriptionStatus:
      | "UPLOADING"
      | "TRANSCRIBING"
      | "READY"
      | "FAILED"
      | null;
    /** @format date-time */
    updatedAt: string;
  };
  projectId: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  sortOrder: number;
  status: "todo" | "applied" | "active" | "declined" | "archived";
  statusHistory: {
    changedBy: {
      id: string;
      name: string | null;
      nickname: string;
    };
    /** @format date-time */
    createdAt: string;
    fromStatus: "todo" | "applied" | "active" | "declined" | "archived" | null;
    id: string;
    toStatus: "todo" | "applied" | "active" | "declined" | "archived";
  }[];
  title: string;
  /** @format date-time */
  updatedAt: string;
  vacancyText: string | null;
  vacancyUrl: string | null;
}

export type ProjectsProgressBoardItemsCreateError = {
  message: string;
};

export interface ProjectsProgressBoardItemsCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsProgressBoardItemsCreatePayload {
  /**
   * @minLength 1
   * @maxLength 180
   */
  companyName: string;
  status?: "todo" | "applied" | "active" | "declined" | "archived";
  /**
   * @minLength 1
   * @maxLength 180
   */
  title: string;
  /** @maxLength 2000000 */
  vacancyText?: string;
  /** @format uri */
  vacancyUrl?: string;
}

export interface ProjectsProgressBoardListData {
  columns: {
    active: {
      artifacts: {
        id: string;
        type: "resume" | "cover_letter" | "interview_preparation";
      }[];
      /**
       * @min 0
       * @max 9007199254740991
       */
      commentCount: number;
      companyName: string;
      /** @format date-time */
      createdAt: string;
      id: string;
      /**
       * @min 0
       * @max 9007199254740991
       */
      interviewCount: number;
      /** @format date-time */
      lastStatusChangedAt: string;
      nextInterview: {
        /** @format date-time */
        createdAt: string;
        hasOverview: boolean;
        hasTranscript: boolean;
        id: string;
        meetingUrl: string | null;
        overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
        recruiterName: string;
        /** @format date-time */
        scheduledAt: string;
        transcriptionLanguage: string | null;
        transcriptionStatus:
          | "UPLOADING"
          | "TRANSCRIBING"
          | "READY"
          | "FAILED"
          | null;
        /** @format date-time */
        updatedAt: string;
      };
      /**
       * @min 0
       * @max 9007199254740991
       */
      sortOrder: number;
      status: "todo" | "applied" | "active" | "declined" | "archived";
      title: string;
      /** @format date-time */
      updatedAt: string;
      vacancyUrl: string | null;
    }[];
    applied: {
      artifacts: {
        id: string;
        type: "resume" | "cover_letter" | "interview_preparation";
      }[];
      /**
       * @min 0
       * @max 9007199254740991
       */
      commentCount: number;
      companyName: string;
      /** @format date-time */
      createdAt: string;
      id: string;
      /**
       * @min 0
       * @max 9007199254740991
       */
      interviewCount: number;
      /** @format date-time */
      lastStatusChangedAt: string;
      nextInterview: {
        /** @format date-time */
        createdAt: string;
        hasOverview: boolean;
        hasTranscript: boolean;
        id: string;
        meetingUrl: string | null;
        overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
        recruiterName: string;
        /** @format date-time */
        scheduledAt: string;
        transcriptionLanguage: string | null;
        transcriptionStatus:
          | "UPLOADING"
          | "TRANSCRIBING"
          | "READY"
          | "FAILED"
          | null;
        /** @format date-time */
        updatedAt: string;
      };
      /**
       * @min 0
       * @max 9007199254740991
       */
      sortOrder: number;
      status: "todo" | "applied" | "active" | "declined" | "archived";
      title: string;
      /** @format date-time */
      updatedAt: string;
      vacancyUrl: string | null;
    }[];
    archived: {
      artifacts: {
        id: string;
        type: "resume" | "cover_letter" | "interview_preparation";
      }[];
      /**
       * @min 0
       * @max 9007199254740991
       */
      commentCount: number;
      companyName: string;
      /** @format date-time */
      createdAt: string;
      id: string;
      /**
       * @min 0
       * @max 9007199254740991
       */
      interviewCount: number;
      /** @format date-time */
      lastStatusChangedAt: string;
      nextInterview: {
        /** @format date-time */
        createdAt: string;
        hasOverview: boolean;
        hasTranscript: boolean;
        id: string;
        meetingUrl: string | null;
        overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
        recruiterName: string;
        /** @format date-time */
        scheduledAt: string;
        transcriptionLanguage: string | null;
        transcriptionStatus:
          | "UPLOADING"
          | "TRANSCRIBING"
          | "READY"
          | "FAILED"
          | null;
        /** @format date-time */
        updatedAt: string;
      };
      /**
       * @min 0
       * @max 9007199254740991
       */
      sortOrder: number;
      status: "todo" | "applied" | "active" | "declined" | "archived";
      title: string;
      /** @format date-time */
      updatedAt: string;
      vacancyUrl: string | null;
    }[];
    declined: {
      artifacts: {
        id: string;
        type: "resume" | "cover_letter" | "interview_preparation";
      }[];
      /**
       * @min 0
       * @max 9007199254740991
       */
      commentCount: number;
      companyName: string;
      /** @format date-time */
      createdAt: string;
      id: string;
      /**
       * @min 0
       * @max 9007199254740991
       */
      interviewCount: number;
      /** @format date-time */
      lastStatusChangedAt: string;
      nextInterview: {
        /** @format date-time */
        createdAt: string;
        hasOverview: boolean;
        hasTranscript: boolean;
        id: string;
        meetingUrl: string | null;
        overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
        recruiterName: string;
        /** @format date-time */
        scheduledAt: string;
        transcriptionLanguage: string | null;
        transcriptionStatus:
          | "UPLOADING"
          | "TRANSCRIBING"
          | "READY"
          | "FAILED"
          | null;
        /** @format date-time */
        updatedAt: string;
      };
      /**
       * @min 0
       * @max 9007199254740991
       */
      sortOrder: number;
      status: "todo" | "applied" | "active" | "declined" | "archived";
      title: string;
      /** @format date-time */
      updatedAt: string;
      vacancyUrl: string | null;
    }[];
    todo: {
      artifacts: {
        id: string;
        type: "resume" | "cover_letter" | "interview_preparation";
      }[];
      /**
       * @min 0
       * @max 9007199254740991
       */
      commentCount: number;
      companyName: string;
      /** @format date-time */
      createdAt: string;
      id: string;
      /**
       * @min 0
       * @max 9007199254740991
       */
      interviewCount: number;
      /** @format date-time */
      lastStatusChangedAt: string;
      nextInterview: {
        /** @format date-time */
        createdAt: string;
        hasOverview: boolean;
        hasTranscript: boolean;
        id: string;
        meetingUrl: string | null;
        overviewStatus: "GENERATING" | "READY" | "FAILED" | null;
        recruiterName: string;
        /** @format date-time */
        scheduledAt: string;
        transcriptionLanguage: string | null;
        transcriptionStatus:
          | "UPLOADING"
          | "TRANSCRIBING"
          | "READY"
          | "FAILED"
          | null;
        /** @format date-time */
        updatedAt: string;
      };
      /**
       * @min 0
       * @max 9007199254740991
       */
      sortOrder: number;
      status: "todo" | "applied" | "active" | "declined" | "archived";
      title: string;
      /** @format date-time */
      updatedAt: string;
      vacancyUrl: string | null;
    }[];
  };
  projectId: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  totalItemCount: number;
}

export type ProjectsProgressBoardListError = {
  message: string;
};

export interface ProjectsProgressBoardListParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyEvaluationsCreateData {
  task: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    attemptCount: number;
    /** @format date-time */
    createdAt: string;
    error: {
      code: string;
      message: string;
    } | null;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxAttempts: number;
    result: Record<string, any>;
    sourceModule: "vacancy-scraping";
    /** @format date-time */
    startedAt: string | null;
    status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
    taskType:
      | "vacancy_scraping.source_run"
      | "vacancy_scraping.first_evaluation"
      | "vacancy_scraping.main_evaluation"
      | "vacancy_scraping.manual_extraction"
      | "vacancy_scraping.manual_evaluation";
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProjectsVacancyEvaluationsCreateError = {
  message: string;
};

export interface ProjectsVacancyEvaluationsCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyEvaluationsCreatePayload {
  /**
   * @minLength 1
   * @maxLength 500
   */
  companyName: string;
  /**
   * @minLength 1
   * @maxLength 500000
   */
  vacancyDescriptionText: string;
  /**
   * @minLength 1
   * @maxLength 500
   */
  vacancyTitle: string;
}

export interface ProjectsVacancyExtractionsCreateData {
  task: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    attemptCount: number;
    /** @format date-time */
    createdAt: string;
    error: {
      code: string;
      message: string;
    } | null;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxAttempts: number;
    result: Record<string, any>;
    sourceModule: "vacancy-scraping";
    /** @format date-time */
    startedAt: string | null;
    status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
    taskType:
      | "vacancy_scraping.source_run"
      | "vacancy_scraping.first_evaluation"
      | "vacancy_scraping.main_evaluation"
      | "vacancy_scraping.manual_extraction"
      | "vacancy_scraping.manual_evaluation";
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProjectsVacancyExtractionsCreateError = {
  message: string;
};

export interface ProjectsVacancyExtractionsCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyExtractionsCreatePayload {
  /**
   * @minLength 1
   * @maxLength 500000
   */
  pageReadableText: string;
}

export interface ProjectsVacancyScrapingGenerateSourcesCreateData {
  /** @minItems 1 */
  searchUrls: {
    /** @minLength 1 */
    scraperId: string;
    source: "linkedin" | "indeed" | "glassdoor";
    /** @minLength 1 */
    suggestedName: string;
    /** @format uri */
    url: string;
  }[];
}

export type ProjectsVacancyScrapingGenerateSourcesCreateError = {
  message: string;
};

export interface ProjectsVacancyScrapingGenerateSourcesCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyScrapingGenerateSourcesCreatePayload {
  /**
   * @minLength 1
   * @maxLength 1000
   */
  wish?: string;
}

export interface ProjectsVacancyScrapingResultsDetailData {
  companyName: string;
  descriptionText: string | null;
  evaluationConflictingSignals: string[];
  /**
   * @min -9007199254740991
   * @max 9007199254740991
   */
  evaluationMatchScore: number | null;
  evaluationMatchingSignals: string[];
  evaluationReasonSummary: string | null;
  evaluationStatus:
    | "PENDING"
    | "FIRST_STAGE_RUNNING"
    | "MAIN_STAGE_PENDING"
    | "MAIN_STAGE_RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "SKIPPED"
    | null;
  evaluationUnknownSignals: string[];
  evaluationVerdict: "YES" | "MAYBE" | "NO" | null;
  /** @format date-time */
  firstSeenAt: string;
  id: string;
  /** @format date-time */
  importedAt: string | null;
  importedProgressBoardItemId: string | null;
  isImportedToBoard: boolean;
  /** @format date-time */
  lastSeenAt: string;
  lastSeenRunId: string;
  location: string | null;
  rawJson: Record<string, any>;
  scraperId: string;
  scraperName: string;
  scraperSlug: string;
  sourceId: string;
  sourceName: string;
  title: string;
  /** @format uri */
  vacancyUrl: string;
}

export type ProjectsVacancyScrapingResultsDetailError = {
  message: string;
};

export interface ProjectsVacancyScrapingResultsDetailParams {
  /** @minLength 1 */
  projectId: string;
  /** @minLength 1 */
  vacancyId: string;
}

export interface ProjectsVacancyScrapingResultsEvaluateCreateData {
  projectId: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  queuedCount: number;
  queuedVacancyIds: string[];
  /**
   * @min 0
   * @max 9007199254740991
   */
  requestedCount: number;
  skippedAlreadyEvaluatedVacancyIds: string[];
  skippedInProgressVacancyIds: string[];
  skippedNotFoundVacancyIds: string[];
}

export type ProjectsVacancyScrapingResultsEvaluateCreateError = {
  message: string;
};

export interface ProjectsVacancyScrapingResultsEvaluateCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyScrapingResultsEvaluateCreatePayload {
  /**
   * @maxItems 500
   * @minItems 1
   */
  scrapedVacancyIds: string[];
}

export interface ProjectsVacancyScrapingResultsImportToBoardCreateData {
  importedItems: {
    progressBoardItemId: string;
    scrapedVacancyId: string;
    status: "CREATED" | "EXISTING";
  }[];
  projectId: string;
}

export type ProjectsVacancyScrapingResultsImportToBoardCreateError = {
  message: string;
};

export interface ProjectsVacancyScrapingResultsImportToBoardCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyScrapingResultsImportToBoardCreatePayload {
  /**
   * @maxItems 500
   * @minItems 1
   */
  scrapedVacancyIds: string[];
}

export interface ProjectsVacancyScrapingResultsListData {
  items: {
    companyName: string;
    descriptionText?: string | null;
    evaluationConflictingSignals: string[];
    /**
     * @min -9007199254740991
     * @max 9007199254740991
     */
    evaluationMatchScore: number | null;
    evaluationMatchingSignals: string[];
    evaluationReasonSummary: string | null;
    evaluationStatus:
      | "PENDING"
      | "FIRST_STAGE_RUNNING"
      | "MAIN_STAGE_PENDING"
      | "MAIN_STAGE_RUNNING"
      | "SUCCEEDED"
      | "FAILED"
      | "SKIPPED"
      | null;
    evaluationUnknownSignals: string[];
    evaluationVerdict: "YES" | "MAYBE" | "NO" | null;
    /** @format date-time */
    firstSeenAt: string;
    id: string;
    /** @format date-time */
    importedAt: string | null;
    importedProgressBoardItemId: string | null;
    isImportedToBoard: boolean;
    /** @format date-time */
    lastSeenAt: string;
    lastSeenRunId: string;
    location: string | null;
    scraperId: string;
    scraperName: string;
    scraperSlug: string;
    sourceId: string;
    sourceName: string;
    title: string;
    /** @format uri */
    vacancyUrl: string;
  }[];
  mode: "all" | "unreviewed";
  projectId: string;
  /**
   * @min 0
   * @max 9007199254740991
   */
  projectTotalCount: number;
  reviewState: {
    hasAnyRuns: boolean;
    /** @format date-time */
    lastReviewedAt: string | null;
    /**
     * @min 0
     * @max 9007199254740991
     */
    unreviewedApprovedCount: number;
    /**
     * @min 0
     * @max 9007199254740991
     */
    unreviewedCount: number;
  };
  /**
   * @min 0
   * @max 9007199254740991
   */
  totalCount: number;
}

export type ProjectsVacancyScrapingResultsListError = {
  message: string;
};

export interface ProjectsVacancyScrapingResultsListParams {
  boardImportState?: "all" | "imported" | "not_imported";
  mode?: "all" | "unreviewed";
  onlyEvaluated?: boolean;
  onlyNewInSelectedRuns?: boolean;
  onlyNotEvaluated?: boolean;
  /** @minLength 1 */
  projectId: string;
  runIds: string[];
  scraperIds: string[];
  /**
   * @minLength 1
   * @maxLength 200
   */
  search?: string;
  sortBy?:
    | "matchScore"
    | "lastSeenAt"
    | "firstSeenAt"
    | "companyName"
    | "title"
    | "importedAt";
  sortDirection?: "asc" | "desc";
  sourceIds: string[];
  verdicts: ("YES" | "MAYBE" | "NO")[];
  withDescription?: boolean;
}

export interface ProjectsVacancyScrapingResultsMarkReviewedCreateData {
  projectId: string;
  reviewState: {
    hasAnyRuns: boolean;
    /** @format date-time */
    lastReviewedAt: string | null;
    /**
     * @min 0
     * @max 9007199254740991
     */
    unreviewedApprovedCount: number;
    /**
     * @min 0
     * @max 9007199254740991
     */
    unreviewedCount: number;
  };
}

export type ProjectsVacancyScrapingResultsMarkReviewedCreateError = {
  message: string;
};

export interface ProjectsVacancyScrapingResultsMarkReviewedCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyScrapingRunAllCreateData {
  run: {
    backgroundTaskId: string;
    /** @format date-time */
    createdAt: string;
    errorMessage: string | null;
    evaluateEnabled: boolean;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    inputUrls: string[];
    /**
     * @min 0
     * @max 9007199254740991
     */
    newResultCount: number | null;
    origin: "SOURCE" | "AD_HOC";
    projectId: string;
    providerRunId: string | null;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    requestedLimit: number;
    /**
     * @min 0
     * @max 9007199254740991
     */
    resultCount: number | null;
    scraperId: string;
    scraperName: string;
    scraperSlug: string;
    sourceId: string | null;
    sourceName: string | null;
    /** @format date-time */
    startedAt: string | null;
    status:
      | "QUEUED"
      | "RUNNING"
      | "SCRAPED"
      | "EVALUATING"
      | "SUCCEEDED"
      | "FAILED"
      | "CANCELED";
    triggerKind: "MANUAL" | "PROJECT_SCHEDULE" | "RUN_ALL";
    /** @format date-time */
    updatedAt: string;
  };
  task: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    attemptCount: number;
    /** @format date-time */
    createdAt: string;
    error: {
      code: string;
      message: string;
    } | null;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxAttempts: number;
    result: Record<string, any>;
    sourceModule: "vacancy-scraping";
    /** @format date-time */
    startedAt: string | null;
    status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
    taskType:
      | "vacancy_scraping.source_run"
      | "vacancy_scraping.first_evaluation"
      | "vacancy_scraping.main_evaluation"
      | "vacancy_scraping.manual_extraction"
      | "vacancy_scraping.manual_evaluation";
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProjectsVacancyScrapingRunAllCreateError = {
  message: string;
};

export interface ProjectsVacancyScrapingRunAllCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyScrapingRunsCreateData {
  run: {
    backgroundTaskId: string;
    /** @format date-time */
    createdAt: string;
    errorMessage: string | null;
    evaluateEnabled: boolean;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    inputUrls: string[];
    /**
     * @min 0
     * @max 9007199254740991
     */
    newResultCount: number | null;
    origin: "SOURCE" | "AD_HOC";
    projectId: string;
    providerRunId: string | null;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    requestedLimit: number;
    /**
     * @min 0
     * @max 9007199254740991
     */
    resultCount: number | null;
    scraperId: string;
    scraperName: string;
    scraperSlug: string;
    sourceId: string | null;
    sourceName: string | null;
    /** @format date-time */
    startedAt: string | null;
    status:
      | "QUEUED"
      | "RUNNING"
      | "SCRAPED"
      | "EVALUATING"
      | "SUCCEEDED"
      | "FAILED"
      | "CANCELED";
    triggerKind: "MANUAL" | "PROJECT_SCHEDULE" | "RUN_ALL";
    /** @format date-time */
    updatedAt: string;
  };
  task: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    attemptCount: number;
    /** @format date-time */
    createdAt: string;
    error: {
      code: string;
      message: string;
    } | null;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxAttempts: number;
    result: Record<string, any>;
    sourceModule: "vacancy-scraping";
    /** @format date-time */
    startedAt: string | null;
    status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
    taskType:
      | "vacancy_scraping.source_run"
      | "vacancy_scraping.first_evaluation"
      | "vacancy_scraping.main_evaluation"
      | "vacancy_scraping.manual_extraction"
      | "vacancy_scraping.manual_evaluation";
    /** @format date-time */
    updatedAt: string;
  };
}

export type ProjectsVacancyScrapingRunsCreateError = {
  message: string;
};

export interface ProjectsVacancyScrapingRunsCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyScrapingRunsCreatePayload {
  evaluateEnabled?: boolean;
  /**
   * @exclusiveMin true
   * @max 1000
   */
  resultLimit: number;
  /** @minLength 1 */
  scraperId: string;
  /** @format uri */
  url: string;
}

export interface ProjectsVacancyScrapingRunsListData {
  projectId: string;
  runs: {
    backgroundTaskId: string;
    /** @format date-time */
    createdAt: string;
    errorMessage: string | null;
    evaluateEnabled: boolean;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    inputUrls: string[];
    /**
     * @min 0
     * @max 9007199254740991
     */
    newResultCount: number | null;
    origin: "SOURCE" | "AD_HOC";
    projectId: string;
    providerRunId: string | null;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    requestedLimit: number;
    /**
     * @min 0
     * @max 9007199254740991
     */
    resultCount: number | null;
    scraperId: string;
    scraperName: string;
    scraperSlug: string;
    sourceId: string | null;
    sourceName: string | null;
    /** @format date-time */
    startedAt: string | null;
    status:
      | "QUEUED"
      | "RUNNING"
      | "SCRAPED"
      | "EVALUATING"
      | "SUCCEEDED"
      | "FAILED"
      | "CANCELED";
    triggerKind: "MANUAL" | "PROJECT_SCHEDULE" | "RUN_ALL";
    /** @format date-time */
    updatedAt: string;
  }[];
}

export type ProjectsVacancyScrapingRunsListError = {
  message: string;
};

export interface ProjectsVacancyScrapingRunsListParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyScrapingSourcesCreateData {
  /** @format date-time */
  createdAt: string;
  evaluateEnabled: boolean;
  id: string;
  isEnabled: boolean;
  lastErrorMessage: string | null;
  /** @format date-time */
  lastFinishedAt: string | null;
  /** @format date-time */
  lastRunAt: string | null;
  name: string;
  projectId: string;
  recurrenceEnabled: boolean;
  /**
   * @exclusiveMin true
   * @max 9007199254740991
   */
  resultLimit: number;
  scraperId: string;
  scraperName: string;
  scraperSlug: string;
  status: "IDLE" | "QUEUED" | "RUNNING" | "PAUSED" | "FAILED";
  /** @format date-time */
  updatedAt: string;
  urls: string[];
}

export type ProjectsVacancyScrapingSourcesCreateError = {
  message: string;
};

export interface ProjectsVacancyScrapingSourcesCreateParams {
  /** @minLength 1 */
  projectId: string;
}

export interface ProjectsVacancyScrapingSourcesCreatePayload {
  evaluateEnabled?: boolean;
  isEnabled?: boolean;
  /**
   * @minLength 1
   * @maxLength 160
   */
  name: string;
  recurrenceEnabled?: boolean;
  /**
   * @exclusiveMin true
   * @max 1000
   */
  resultLimit: number;
  /** @minLength 1 */
  scraperId: string;
  /**
   * @maxItems 100
   * @minItems 1
   */
  urls: string[];
}

export interface ProjectsVacancyScrapingSourcesListData {
  projectId: string;
  sources: {
    /** @format date-time */
    createdAt: string;
    evaluateEnabled: boolean;
    id: string;
    isEnabled: boolean;
    lastErrorMessage: string | null;
    /** @format date-time */
    lastFinishedAt: string | null;
    /** @format date-time */
    lastRunAt: string | null;
    name: string;
    projectId: string;
    recurrenceEnabled: boolean;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    resultLimit: number;
    scraperId: string;
    scraperName: string;
    scraperSlug: string;
    status: "IDLE" | "QUEUED" | "RUNNING" | "PAUSED" | "FAILED";
    /** @format date-time */
    updatedAt: string;
    urls: string[];
  }[];
}

export type ProjectsVacancyScrapingSourcesListError = {
  message: string;
};

export interface ProjectsVacancyScrapingSourcesListParams {
  /** @minLength 1 */
  projectId: string;
}

export interface StatusListData {
  adapters: string[];
  capabilities: string[];
  layers: {
    business: "service";
    dataAccess: "repository";
    http: "routes";
    integration: "ports/adapters";
    permissions: "policy";
    validation: "schemas";
  };
  module: "public-api";
  ports: string[];
  status: "ok";
  summary: string;
}

export type StoredDetailError = {
  message: string;
};

export interface StoredDetailParams {
  /** @minLength 1 */
  storedFileId: string;
}

export interface TailoredResumesPhotoCompleteCreateData {
  /** @format uri */
  photoUrl: string;
}

export type TailoredResumesPhotoCompleteCreateError = {
  message: string;
};

export interface TailoredResumesPhotoCompleteCreateParams {
  /** @minLength 1 */
  resumeId: string;
}

export interface TailoredResumesPhotoCompleteCreatePayload {
  /**
   * @minLength 1
   * @maxLength 512
   */
  uploadKey: string;
}

export interface TailoredResumesPhotoUploadCreateData {
  upload: {
    /** @format date-time */
    expiresAt: string;
    headers: Record<string, string>;
    method: "PUT";
    /** @format uri */
    url: string;
  };
  uploadKey: string;
}

export type TailoredResumesPhotoUploadCreateError = {
  message: string;
};

export interface TailoredResumesPhotoUploadCreateParams {
  /** @minLength 1 */
  resumeId: string;
}

export interface TailoredResumesPhotoUploadCreatePayload {
  /**
   * @minLength 1
   * @maxLength 255
   */
  filename: string;
  mimeType: "image/jpeg" | "image/png" | "image/webp";
  /**
   * @exclusiveMin true
   * @max 5242880
   */
  sizeBytes?: number;
}

export interface VacancyEvaluationsAiTasksDetailData {
  /**
   * @min 0
   * @max 9007199254740991
   */
  attemptCount: number;
  /** @format date-time */
  createdAt: string;
  error: {
    code: string;
    message: string;
  } | null;
  /** @format date-time */
  finishedAt: string | null;
  id: string;
  /**
   * @exclusiveMin true
   * @max 9007199254740991
   */
  maxAttempts: number;
  result: Record<string, any>;
  sourceModule: "vacancy-scraping";
  /** @format date-time */
  startedAt: string | null;
  status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
  taskType:
    | "vacancy_scraping.source_run"
    | "vacancy_scraping.first_evaluation"
    | "vacancy_scraping.main_evaluation"
    | "vacancy_scraping.manual_extraction"
    | "vacancy_scraping.manual_evaluation";
  /** @format date-time */
  updatedAt: string;
}

export type VacancyEvaluationsAiTasksDetailError = {
  message: string;
};

export interface VacancyEvaluationsAiTasksDetailParams {
  /** @minLength 1 */
  taskId: string;
}

export interface VacancyExtractionsAiTasksDetailData {
  /**
   * @min 0
   * @max 9007199254740991
   */
  attemptCount: number;
  /** @format date-time */
  createdAt: string;
  error: {
    code: string;
    message: string;
  } | null;
  /** @format date-time */
  finishedAt: string | null;
  id: string;
  /**
   * @exclusiveMin true
   * @max 9007199254740991
   */
  maxAttempts: number;
  result: Record<string, any>;
  sourceModule: "vacancy-scraping";
  /** @format date-time */
  startedAt: string | null;
  status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
  taskType:
    | "vacancy_scraping.source_run"
    | "vacancy_scraping.first_evaluation"
    | "vacancy_scraping.main_evaluation"
    | "vacancy_scraping.manual_extraction"
    | "vacancy_scraping.manual_evaluation";
  /** @format date-time */
  updatedAt: string;
}

export type VacancyExtractionsAiTasksDetailError = {
  message: string;
};

export interface VacancyExtractionsAiTasksDetailParams {
  /** @minLength 1 */
  taskId: string;
}

export interface VacancyScrapingCatalogListData {
  scrapers: {
    description: string;
    estimatedHoldAtMaxResultsUsd: string;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxResultsPerRun: number;
    name: string;
    site: "LINKEDIN" | "INDEED" | "GLASSDOOR";
    slug: string;
  }[];
}

export type VacancyScrapingCatalogListError = {
  message: string;
};

export interface VacancyScrapingRunsCancelCreateData {
  runId: string;
  status: "CANCELED";
}

export type VacancyScrapingRunsCancelCreateError = {
  message: string;
};

export interface VacancyScrapingRunsCancelCreateParams {
  /** @minLength 1 */
  runId: string;
}

export interface VacancyScrapingRunsRetryCreateData {
  run: {
    backgroundTaskId: string;
    /** @format date-time */
    createdAt: string;
    errorMessage: string | null;
    evaluateEnabled: boolean;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    inputUrls: string[];
    /**
     * @min 0
     * @max 9007199254740991
     */
    newResultCount: number | null;
    origin: "SOURCE" | "AD_HOC";
    projectId: string;
    providerRunId: string | null;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    requestedLimit: number;
    /**
     * @min 0
     * @max 9007199254740991
     */
    resultCount: number | null;
    scraperId: string;
    scraperName: string;
    scraperSlug: string;
    sourceId: string | null;
    sourceName: string | null;
    /** @format date-time */
    startedAt: string | null;
    status:
      | "QUEUED"
      | "RUNNING"
      | "SCRAPED"
      | "EVALUATING"
      | "SUCCEEDED"
      | "FAILED"
      | "CANCELED";
    triggerKind: "MANUAL" | "PROJECT_SCHEDULE" | "RUN_ALL";
    /** @format date-time */
    updatedAt: string;
  };
  task: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    attemptCount: number;
    /** @format date-time */
    createdAt: string;
    error: {
      code: string;
      message: string;
    } | null;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxAttempts: number;
    result: Record<string, any>;
    sourceModule: "vacancy-scraping";
    /** @format date-time */
    startedAt: string | null;
    status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
    taskType:
      | "vacancy_scraping.source_run"
      | "vacancy_scraping.first_evaluation"
      | "vacancy_scraping.main_evaluation"
      | "vacancy_scraping.manual_extraction"
      | "vacancy_scraping.manual_evaluation";
    /** @format date-time */
    updatedAt: string;
  };
}

export type VacancyScrapingRunsRetryCreateError = {
  message: string;
};

export interface VacancyScrapingRunsRetryCreateParams {
  /** @minLength 1 */
  runId: string;
}

export type VacancyScrapingSourcesDeleteData = null;

export type VacancyScrapingSourcesDeleteError = {
  message: string;
};

export interface VacancyScrapingSourcesDeleteParams {
  /** @minLength 1 */
  sourceId: string;
}

export interface VacancyScrapingSourcesPartialUpdateData {
  /** @format date-time */
  createdAt: string;
  evaluateEnabled: boolean;
  id: string;
  isEnabled: boolean;
  lastErrorMessage: string | null;
  /** @format date-time */
  lastFinishedAt: string | null;
  /** @format date-time */
  lastRunAt: string | null;
  name: string;
  projectId: string;
  recurrenceEnabled: boolean;
  /**
   * @exclusiveMin true
   * @max 9007199254740991
   */
  resultLimit: number;
  scraperId: string;
  scraperName: string;
  scraperSlug: string;
  status: "IDLE" | "QUEUED" | "RUNNING" | "PAUSED" | "FAILED";
  /** @format date-time */
  updatedAt: string;
  urls: string[];
}

export type VacancyScrapingSourcesPartialUpdateError = {
  message: string;
};

export interface VacancyScrapingSourcesPartialUpdateParams {
  /** @minLength 1 */
  sourceId: string;
}

export interface VacancyScrapingSourcesPartialUpdatePayload {
  evaluateEnabled?: boolean;
  isEnabled?: boolean;
  /**
   * @minLength 1
   * @maxLength 160
   */
  name?: string;
  recurrenceEnabled?: boolean;
  /**
   * @exclusiveMin true
   * @max 1000
   */
  resultLimit?: number;
  /** @minLength 1 */
  scraperId?: string;
  status?: "IDLE" | "RUNNING" | "PAUSED" | "FAILED";
  /**
   * @maxItems 100
   * @minItems 1
   */
  urls?: string[];
}

export interface VacancyScrapingSourcesRunCreateData {
  run: {
    backgroundTaskId: string;
    /** @format date-time */
    createdAt: string;
    errorMessage: string | null;
    evaluateEnabled: boolean;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    inputUrls: string[];
    /**
     * @min 0
     * @max 9007199254740991
     */
    newResultCount: number | null;
    origin: "SOURCE" | "AD_HOC";
    projectId: string;
    providerRunId: string | null;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    requestedLimit: number;
    /**
     * @min 0
     * @max 9007199254740991
     */
    resultCount: number | null;
    scraperId: string;
    scraperName: string;
    scraperSlug: string;
    sourceId: string | null;
    sourceName: string | null;
    /** @format date-time */
    startedAt: string | null;
    status:
      | "QUEUED"
      | "RUNNING"
      | "SCRAPED"
      | "EVALUATING"
      | "SUCCEEDED"
      | "FAILED"
      | "CANCELED";
    triggerKind: "MANUAL" | "PROJECT_SCHEDULE" | "RUN_ALL";
    /** @format date-time */
    updatedAt: string;
  };
  task: {
    /**
     * @min 0
     * @max 9007199254740991
     */
    attemptCount: number;
    /** @format date-time */
    createdAt: string;
    error: {
      code: string;
      message: string;
    } | null;
    /** @format date-time */
    finishedAt: string | null;
    id: string;
    /**
     * @exclusiveMin true
     * @max 9007199254740991
     */
    maxAttempts: number;
    result: Record<string, any>;
    sourceModule: "vacancy-scraping";
    /** @format date-time */
    startedAt: string | null;
    status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";
    taskType:
      | "vacancy_scraping.source_run"
      | "vacancy_scraping.first_evaluation"
      | "vacancy_scraping.main_evaluation"
      | "vacancy_scraping.manual_extraction"
      | "vacancy_scraping.manual_evaluation";
    /** @format date-time */
    updatedAt: string;
  };
}

export type VacancyScrapingSourcesRunCreateError = {
  message: string;
};

export interface VacancyScrapingSourcesRunCreateParams {
  /** @minLength 1 */
  sourceId: string;
}

export namespace Stored {
  /**
 * No description
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
  export namespace StoredDetail {
    export type RequestParams = {
      /** @minLength 1 */
      storedFileId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Downloads {
  /**
 * No description
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
  export namespace DownloadsDetail {
    export type RequestParams = {
      /** @minLength 1 */
      storedFileId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
 * No description
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
  export namespace GetDownloads {
    export type RequestParams = {
      /** @minLength 1 */
      storedFileId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetDownloadsData;
  }
}

export namespace PublicApi {
  /**
 * No description
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
  export namespace AiTasksDetail {
    export type RequestParams = {
      /** @minLength 1 */
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AiTasksDetailData;
  }

  /**
 * No description
 * @tags Billing
 * @name BillingAiPricingCatalogList
 * @summary Get the public AI pricing catalog based on the connected database and visible billing tiers.
 * @request GET:/public-api/billing/ai-pricing-catalog
 * @response `200` `BillingAiPricingCatalogListData` Default Response
 * @response `500` `{
    message: string,

}` Default Response
*/
  export namespace BillingAiPricingCatalogList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingAiPricingCatalogListData;
  }

  /**
 * No description
 * @tags Billing
 * @name BillingMeBalanceList
 * @summary Get available wallet funds for the API key owner.
 * @request GET:/public-api/billing/me/balance
 * @response `200` `BillingMeBalanceListData` Default Response
 * @response `401` `{
    message: string,

}` Default Response
*/
  export namespace BillingMeBalanceList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingMeBalanceListData;
  }

  /**
 * No description
 * @tags Billing
 * @name BillingMeLedgerList
 * @summary List billing account actions for the API key owner.
 * @request GET:/public-api/billing/me/ledger
 * @response `200` `BillingMeLedgerListData` Default Response
 * @response `401` `{
    message: string,

}` Default Response
*/
  export namespace BillingMeLedgerList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * @format date-time
       * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
       */
      from?: string;
      /**
       * @exclusiveMin true
       * @max 200
       * @default 100
       */
      limit?: number;
      /**
       * @format date-time
       * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
       */
      to?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingMeLedgerListData;
  }

  /**
 * No description
 * @tags Billing
 * @name BillingMeTierList
 * @summary Get current user tier and cumulative spend for the API key owner.
 * @request GET:/public-api/billing/me/tier
 * @response `200` `BillingMeTierListData` Default Response
 * @response `401` `{
    message: string,

}` Default Response
*/
  export namespace BillingMeTierList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingMeTierListData;
  }

  /**
 * No description
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
  export namespace BillingMeUsageChargesDailySummaryList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @pattern ^\d{4}-\d{2}-\d{2}$ */
      fromDate: string;
      /** @pattern ^\d{4}-\d{2}-\d{2}$ */
      toDate: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingMeUsageChargesDailySummaryListData;
  }

  /**
 * No description
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
  export namespace BillingMeUsageChargesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @pattern ^\d{4}-\d{2}-\d{2}$ */
      fromDate: string;
      /** @pattern ^\d{4}-\d{2}-\d{2}$ */
      toDate: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BillingMeUsageChargesListData;
  }

  /**
 * No description
 * @tags Authentication
 * @name GetPublicApi
 * @summary Get the user who owns the supplied API key.
 * @request GET:/public-api/me
 * @response `200` `GetPublicApiData` Default Response
 * @response `401` `{
    message: string,

}` Default Response
*/
  export namespace GetPublicApi {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPublicApiData;
  }

  /**
 * No description
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
  export namespace ProgressBoardAttachmentsCompleteCreate {
    export type RequestParams = {
      /** @minLength 1 */
      attachmentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardAttachmentsCompleteCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardCommentsAttachmentsCreate {
    export type RequestParams = {
      /** @minLength 1 */
      commentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardCommentsAttachmentsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardCommentsAttachmentsCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardCommentsDelete {
    export type RequestParams = {
      /** @minLength 1 */
      commentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardCommentsDeleteData;
  }

  /**
 * No description
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
  export namespace ProgressBoardCommentsPartialUpdate {
    export type RequestParams = {
      /** @minLength 1 */
      commentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardCommentsPartialUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardCommentsPartialUpdateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardInterviewsAiList {
    export type RequestParams = {
      /** @minLength 1 */
      interviewId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardInterviewsAiListData;
  }

  /**
 * No description
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
  export namespace ProgressBoardInterviewsDelete {
    export type RequestParams = {
      /** @minLength 1 */
      interviewId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardInterviewsDeleteData;
  }

  /**
 * No description
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
  export namespace ProgressBoardInterviewsPartialUpdate {
    export type RequestParams = {
      /** @minLength 1 */
      interviewId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardInterviewsPartialUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardInterviewsPartialUpdateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsCommentsCreate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardItemsCommentsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsCommentsCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsCommentsList {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsCommentsListData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsCoverLetterDelete {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsCoverLetterDeleteData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsCoverLetterList {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsCoverLetterListData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsCoverLetterPdfExportCreate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsCoverLetterPdfExportCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsCoverLetterTasksCreate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardItemsCoverLetterTasksCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsCoverLetterTasksCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsCoverLetterUpdate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardItemsCoverLetterUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsCoverLetterUpdateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsDelete {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsDeleteData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsDetail {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsDetailData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsInterviewPreparationDelete {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsInterviewPreparationDeleteData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsInterviewPreparationList {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsInterviewPreparationListData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsInterviewPreparationTasksCreate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody =
      ProgressBoardItemsInterviewPreparationTasksCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody =
      ProgressBoardItemsInterviewPreparationTasksCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsInterviewsCreate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardItemsInterviewsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsInterviewsCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsInterviewsList {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsInterviewsListData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsMoveCreate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardItemsMoveCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsMoveCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsPartialUpdate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardItemsPartialUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsPartialUpdateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsTailoredResumeDelete {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsTailoredResumeDeleteData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsTailoredResumeList {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsTailoredResumeListData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsTailoredResumePdfExportCreate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      ProgressBoardItemsTailoredResumePdfExportCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsTailoredResumeTasksCreate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody =
      ProgressBoardItemsTailoredResumeTasksCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsTailoredResumeTasksCreateData;
  }

  /**
 * No description
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
  export namespace ProgressBoardItemsTailoredResumeUpdate {
    export type RequestParams = {
      /** @minLength 1 */
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProgressBoardItemsTailoredResumeUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProgressBoardItemsTailoredResumeUpdateData;
  }

  /**
 * No description
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
  export namespace ProjectsAiPricingCatalogList {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsAiPricingCatalogListData;
  }

  /**
 * No description
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
  export namespace ProjectsCandidateProfileList {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsCandidateProfileListData;
  }

  /**
 * No description
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
  export namespace ProjectsCandidateProfileUpdate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProjectsCandidateProfileUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsCandidateProfileUpdateData;
  }

  /**
 * No description
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
  export namespace ProjectsFirstSetupList {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsFirstSetupListData;
  }

  /**
 * No description
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
  export namespace ProjectsFirstSetupPreferencesPartialUpdate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProjectsFirstSetupPreferencesPartialUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsFirstSetupPreferencesPartialUpdateData;
  }

  /**
 * No description
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
  export namespace ProjectsInterviewsList {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {
      from?: any;
      to?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsInterviewsListData;
  }

  /**
 * No description
 * @tags Projects
 * @name ProjectsList
 * @summary List projects available to the API key owner.
 * @request GET:/public-api/projects
 * @response `200` `ProjectsListData` Default Response
 * @response `401` `{
    message: string,

}` Default Response
*/
  export namespace ProjectsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsListData;
  }

  /**
 * No description
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
  export namespace ProjectsProgressBoardItemsCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProjectsProgressBoardItemsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsProgressBoardItemsCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsProgressBoardList {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsProgressBoardListData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyEvaluationsCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProjectsVacancyEvaluationsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyEvaluationsCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyExtractionsCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProjectsVacancyExtractionsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyExtractionsCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingGenerateSourcesCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody =
      ProjectsVacancyScrapingGenerateSourcesCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyScrapingGenerateSourcesCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingResultsDetail {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
      /** @minLength 1 */
      vacancyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyScrapingResultsDetailData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingResultsEvaluateCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody =
      ProjectsVacancyScrapingResultsEvaluateCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyScrapingResultsEvaluateCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingResultsImportToBoardCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody =
      ProjectsVacancyScrapingResultsImportToBoardCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody =
      ProjectsVacancyScrapingResultsImportToBoardCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingResultsList {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {
      boardImportState?: "all" | "imported" | "not_imported";
      mode?: "all" | "unreviewed";
      onlyEvaluated?: boolean;
      onlyNewInSelectedRuns?: boolean;
      onlyNotEvaluated?: boolean;
      runIds: string[];
      scraperIds: string[];
      /**
       * @minLength 1
       * @maxLength 200
       */
      search?: string;
      sortBy?:
        | "matchScore"
        | "lastSeenAt"
        | "firstSeenAt"
        | "companyName"
        | "title"
        | "importedAt";
      sortDirection?: "asc" | "desc";
      sourceIds: string[];
      verdicts: ("YES" | "MAYBE" | "NO")[];
      withDescription?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyScrapingResultsListData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingResultsMarkReviewedCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      ProjectsVacancyScrapingResultsMarkReviewedCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingRunAllCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyScrapingRunAllCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingRunsCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProjectsVacancyScrapingRunsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyScrapingRunsCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingRunsList {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyScrapingRunsListData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingSourcesCreate {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProjectsVacancyScrapingSourcesCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyScrapingSourcesCreateData;
  }

  /**
 * No description
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
  export namespace ProjectsVacancyScrapingSourcesList {
    export type RequestParams = {
      /** @minLength 1 */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectsVacancyScrapingSourcesListData;
  }

  /**
   * No description
   * @tags public-api
   * @name StatusList
   * @summary External-facing endpoints and stable contracts for third parties. status
   * @request GET:/public-api/status
   * @response `200` `StatusListData` Default Response
   */
  export namespace StatusList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StatusListData;
  }

  /**
 * No description
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
  export namespace TailoredResumesPhotoCompleteCreate {
    export type RequestParams = {
      /** @minLength 1 */
      resumeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TailoredResumesPhotoCompleteCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = TailoredResumesPhotoCompleteCreateData;
  }

  /**
 * No description
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
  export namespace TailoredResumesPhotoUploadCreate {
    export type RequestParams = {
      /** @minLength 1 */
      resumeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TailoredResumesPhotoUploadCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = TailoredResumesPhotoUploadCreateData;
  }

  /**
 * No description
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
  export namespace VacancyEvaluationsAiTasksDetail {
    export type RequestParams = {
      /** @minLength 1 */
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VacancyEvaluationsAiTasksDetailData;
  }

  /**
 * No description
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
  export namespace VacancyExtractionsAiTasksDetail {
    export type RequestParams = {
      /** @minLength 1 */
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VacancyExtractionsAiTasksDetailData;
  }

  /**
 * No description
 * @tags Vacancy Scraping
 * @name VacancyScrapingCatalogList
 * @summary List available Bright Data vacancy scrapers for the current billing tier.
 * @request GET:/public-api/vacancy-scraping/catalog
 * @response `200` `VacancyScrapingCatalogListData` Default Response
 * @response `401` `{
    message: string,

}` Default Response
*/
  export namespace VacancyScrapingCatalogList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VacancyScrapingCatalogListData;
  }

  /**
 * No description
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
  export namespace VacancyScrapingRunsCancelCreate {
    export type RequestParams = {
      /** @minLength 1 */
      runId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VacancyScrapingRunsCancelCreateData;
  }

  /**
 * No description
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
  export namespace VacancyScrapingRunsRetryCreate {
    export type RequestParams = {
      /** @minLength 1 */
      runId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VacancyScrapingRunsRetryCreateData;
  }

  /**
 * No description
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
  export namespace VacancyScrapingSourcesDelete {
    export type RequestParams = {
      /** @minLength 1 */
      sourceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VacancyScrapingSourcesDeleteData;
  }

  /**
 * No description
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
  export namespace VacancyScrapingSourcesPartialUpdate {
    export type RequestParams = {
      /** @minLength 1 */
      sourceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VacancyScrapingSourcesPartialUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = VacancyScrapingSourcesPartialUpdateData;
  }

  /**
 * No description
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
  export namespace VacancyScrapingSourcesRunCreate {
    export type RequestParams = {
      /** @minLength 1 */
      sourceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VacancyScrapingSourcesRunCreateData;
  }
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://localhost:3000",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Careerboard Public API
 * @version 0.1.0
 * @baseUrl http://localhost:3000
 */
export class PublicApi<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  stored = {
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
    storedDetail: (
      { storedFileId }: StoredDetailParams,
      params: RequestParams = {},
    ) =>
      this.http.request<any, StoredDetailError>({
        path: `/stored/${storedFileId}`,
        method: "GET",
        ...params,
      }),
  };
  downloads = {
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
    downloadsDetail: (
      { storedFileId }: DownloadsDetailParams,
      params: RequestParams = {},
    ) =>
      this.http.request<any, DownloadsDetailError>({
        path: `/downloads/${storedFileId}`,
        method: "GET",
        ...params,
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
    getDownloads: (
      { storedFileId }: GetDownloadsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<GetDownloadsData, GetDownloadsError>({
        path: `/downloads/${storedFileId}/url`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  publicApi = {
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
    aiTasksDetail: (
      { taskId }: AiTasksDetailParams,
      params: RequestParams = {},
    ) =>
      this.http.request<AiTasksDetailData, AiTasksDetailError>({
        path: `/public-api/ai-tasks/${taskId}`,
        method: "GET",
        format: "json",
        ...params,
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
    billingAiPricingCatalogList: (params: RequestParams = {}) =>
      this.http.request<
        BillingAiPricingCatalogListData,
        BillingAiPricingCatalogListError
      >({
        path: `/public-api/billing/ai-pricing-catalog`,
        method: "GET",
        format: "json",
        ...params,
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
    billingMeBalanceList: (params: RequestParams = {}) =>
      this.http.request<BillingMeBalanceListData, BillingMeBalanceListError>({
        path: `/public-api/billing/me/balance`,
        method: "GET",
        format: "json",
        ...params,
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
    billingMeLedgerList: (
      query: BillingMeLedgerListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<BillingMeLedgerListData, BillingMeLedgerListError>({
        path: `/public-api/billing/me/ledger`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
    billingMeTierList: (params: RequestParams = {}) =>
      this.http.request<BillingMeTierListData, BillingMeTierListError>({
        path: `/public-api/billing/me/tier`,
        method: "GET",
        format: "json",
        ...params,
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
    billingMeUsageChargesDailySummaryList: (
      query: BillingMeUsageChargesDailySummaryListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        BillingMeUsageChargesDailySummaryListData,
        BillingMeUsageChargesDailySummaryListError
      >({
        path: `/public-api/billing/me/usage-charges/daily-summary`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
    billingMeUsageChargesList: (
      query: BillingMeUsageChargesListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        BillingMeUsageChargesListData,
        BillingMeUsageChargesListError
      >({
        path: `/public-api/billing/me/usage-charges`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
    getPublicApi: (params: RequestParams = {}) =>
      this.http.request<GetPublicApiData, GetPublicApiError>({
        path: `/public-api/me`,
        method: "GET",
        format: "json",
        ...params,
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
    progressBoardAttachmentsCompleteCreate: (
      { attachmentId }: ProgressBoardAttachmentsCompleteCreateParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardAttachmentsCompleteCreateData,
        ProgressBoardAttachmentsCompleteCreateError
      >({
        path: `/public-api/progress-board/attachments/${attachmentId}/complete`,
        method: "POST",
        format: "json",
        ...params,
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
    progressBoardCommentsAttachmentsCreate: (
      { commentId }: ProgressBoardCommentsAttachmentsCreateParams,
      data: ProgressBoardCommentsAttachmentsCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardCommentsAttachmentsCreateData,
        ProgressBoardCommentsAttachmentsCreateError
      >({
        path: `/public-api/progress-board/comments/${commentId}/attachments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardCommentsDelete: (
      { commentId }: ProgressBoardCommentsDeleteParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardCommentsDeleteData,
        ProgressBoardCommentsDeleteError
      >({
        path: `/public-api/progress-board/comments/${commentId}`,
        method: "DELETE",
        format: "json",
        ...params,
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
    progressBoardCommentsPartialUpdate: (
      { commentId }: ProgressBoardCommentsPartialUpdateParams,
      data: ProgressBoardCommentsPartialUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardCommentsPartialUpdateData,
        ProgressBoardCommentsPartialUpdateError
      >({
        path: `/public-api/progress-board/comments/${commentId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardInterviewsAiList: (
      { interviewId }: ProgressBoardInterviewsAiListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardInterviewsAiListData,
        ProgressBoardInterviewsAiListError
      >({
        path: `/public-api/progress-board/interviews/${interviewId}/ai`,
        method: "GET",
        format: "json",
        ...params,
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
    progressBoardInterviewsDelete: (
      { interviewId }: ProgressBoardInterviewsDeleteParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardInterviewsDeleteData,
        ProgressBoardInterviewsDeleteError
      >({
        path: `/public-api/progress-board/interviews/${interviewId}`,
        method: "DELETE",
        format: "json",
        ...params,
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
    progressBoardInterviewsPartialUpdate: (
      { interviewId }: ProgressBoardInterviewsPartialUpdateParams,
      data: ProgressBoardInterviewsPartialUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardInterviewsPartialUpdateData,
        ProgressBoardInterviewsPartialUpdateError
      >({
        path: `/public-api/progress-board/interviews/${interviewId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardItemsCommentsCreate: (
      { itemId }: ProgressBoardItemsCommentsCreateParams,
      data: ProgressBoardItemsCommentsCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsCommentsCreateData,
        ProgressBoardItemsCommentsCreateError
      >({
        path: `/public-api/progress-board/items/${itemId}/comments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardItemsCommentsList: (
      { itemId }: ProgressBoardItemsCommentsListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsCommentsListData,
        ProgressBoardItemsCommentsListError
      >({
        path: `/public-api/progress-board/items/${itemId}/comments`,
        method: "GET",
        format: "json",
        ...params,
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
    progressBoardItemsCoverLetterDelete: (
      { itemId }: ProgressBoardItemsCoverLetterDeleteParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsCoverLetterDeleteData,
        ProgressBoardItemsCoverLetterDeleteError
      >({
        path: `/public-api/progress-board/items/${itemId}/cover-letter`,
        method: "DELETE",
        format: "json",
        ...params,
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
    progressBoardItemsCoverLetterList: (
      { itemId }: ProgressBoardItemsCoverLetterListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsCoverLetterListData,
        ProgressBoardItemsCoverLetterListError
      >({
        path: `/public-api/progress-board/items/${itemId}/cover-letter`,
        method: "GET",
        format: "json",
        ...params,
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
    progressBoardItemsCoverLetterPdfExportCreate: (
      { itemId }: ProgressBoardItemsCoverLetterPdfExportCreateParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsCoverLetterPdfExportCreateData,
        ProgressBoardItemsCoverLetterPdfExportCreateError
      >({
        path: `/public-api/progress-board/items/${itemId}/cover-letter/pdf-export`,
        method: "POST",
        format: "json",
        ...params,
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
    progressBoardItemsCoverLetterTasksCreate: (
      { itemId }: ProgressBoardItemsCoverLetterTasksCreateParams,
      data: ProgressBoardItemsCoverLetterTasksCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsCoverLetterTasksCreateData,
        ProgressBoardItemsCoverLetterTasksCreateError
      >({
        path: `/public-api/progress-board/items/${itemId}/cover-letter/tasks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardItemsCoverLetterUpdate: (
      { itemId }: ProgressBoardItemsCoverLetterUpdateParams,
      data: ProgressBoardItemsCoverLetterUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsCoverLetterUpdateData,
        ProgressBoardItemsCoverLetterUpdateError
      >({
        path: `/public-api/progress-board/items/${itemId}/cover-letter`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardItemsDelete: (
      { itemId }: ProgressBoardItemsDeleteParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsDeleteData,
        ProgressBoardItemsDeleteError
      >({
        path: `/public-api/progress-board/items/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
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
    progressBoardItemsDetail: (
      { itemId }: ProgressBoardItemsDetailParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsDetailData,
        ProgressBoardItemsDetailError
      >({
        path: `/public-api/progress-board/items/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
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
    progressBoardItemsInterviewPreparationDelete: (
      { itemId }: ProgressBoardItemsInterviewPreparationDeleteParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsInterviewPreparationDeleteData,
        ProgressBoardItemsInterviewPreparationDeleteError
      >({
        path: `/public-api/progress-board/items/${itemId}/interview-preparation`,
        method: "DELETE",
        format: "json",
        ...params,
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
    progressBoardItemsInterviewPreparationList: (
      { itemId }: ProgressBoardItemsInterviewPreparationListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsInterviewPreparationListData,
        ProgressBoardItemsInterviewPreparationListError
      >({
        path: `/public-api/progress-board/items/${itemId}/interview-preparation`,
        method: "GET",
        format: "json",
        ...params,
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
    progressBoardItemsInterviewPreparationTasksCreate: (
      { itemId }: ProgressBoardItemsInterviewPreparationTasksCreateParams,
      data: ProgressBoardItemsInterviewPreparationTasksCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsInterviewPreparationTasksCreateData,
        ProgressBoardItemsInterviewPreparationTasksCreateError
      >({
        path: `/public-api/progress-board/items/${itemId}/interview-preparation/tasks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardItemsInterviewsCreate: (
      { itemId }: ProgressBoardItemsInterviewsCreateParams,
      data: ProgressBoardItemsInterviewsCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsInterviewsCreateData,
        ProgressBoardItemsInterviewsCreateError
      >({
        path: `/public-api/progress-board/items/${itemId}/interviews`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardItemsInterviewsList: (
      { itemId }: ProgressBoardItemsInterviewsListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsInterviewsListData,
        ProgressBoardItemsInterviewsListError
      >({
        path: `/public-api/progress-board/items/${itemId}/interviews`,
        method: "GET",
        format: "json",
        ...params,
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
    progressBoardItemsMoveCreate: (
      { itemId }: ProgressBoardItemsMoveCreateParams,
      data: ProgressBoardItemsMoveCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsMoveCreateData,
        ProgressBoardItemsMoveCreateError
      >({
        path: `/public-api/progress-board/items/${itemId}/move`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardItemsPartialUpdate: (
      { itemId }: ProgressBoardItemsPartialUpdateParams,
      data: ProgressBoardItemsPartialUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsPartialUpdateData,
        ProgressBoardItemsPartialUpdateError
      >({
        path: `/public-api/progress-board/items/${itemId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardItemsTailoredResumeDelete: (
      { itemId }: ProgressBoardItemsTailoredResumeDeleteParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsTailoredResumeDeleteData,
        ProgressBoardItemsTailoredResumeDeleteError
      >({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume`,
        method: "DELETE",
        format: "json",
        ...params,
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
    progressBoardItemsTailoredResumeList: (
      { itemId }: ProgressBoardItemsTailoredResumeListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsTailoredResumeListData,
        ProgressBoardItemsTailoredResumeListError
      >({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume`,
        method: "GET",
        format: "json",
        ...params,
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
    progressBoardItemsTailoredResumePdfExportCreate: (
      { itemId }: ProgressBoardItemsTailoredResumePdfExportCreateParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsTailoredResumePdfExportCreateData,
        ProgressBoardItemsTailoredResumePdfExportCreateError
      >({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume/pdf-export`,
        method: "POST",
        format: "json",
        ...params,
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
    progressBoardItemsTailoredResumeTasksCreate: (
      { itemId }: ProgressBoardItemsTailoredResumeTasksCreateParams,
      data: ProgressBoardItemsTailoredResumeTasksCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsTailoredResumeTasksCreateData,
        ProgressBoardItemsTailoredResumeTasksCreateError
      >({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume/tasks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    progressBoardItemsTailoredResumeUpdate: (
      { itemId }: ProgressBoardItemsTailoredResumeUpdateParams,
      data: ProgressBoardItemsTailoredResumeUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProgressBoardItemsTailoredResumeUpdateData,
        ProgressBoardItemsTailoredResumeUpdateError
      >({
        path: `/public-api/progress-board/items/${itemId}/tailored-resume`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsAiPricingCatalogList: (
      { projectId }: ProjectsAiPricingCatalogListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsAiPricingCatalogListData,
        ProjectsAiPricingCatalogListError
      >({
        path: `/public-api/projects/${projectId}/ai-pricing-catalog`,
        method: "GET",
        format: "json",
        ...params,
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
    projectsCandidateProfileList: (
      { projectId }: ProjectsCandidateProfileListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsCandidateProfileListData,
        ProjectsCandidateProfileListError
      >({
        path: `/public-api/projects/${projectId}/candidate-profile`,
        method: "GET",
        format: "json",
        ...params,
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
    projectsCandidateProfileUpdate: (
      { projectId }: ProjectsCandidateProfileUpdateParams,
      data: ProjectsCandidateProfileUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsCandidateProfileUpdateData,
        ProjectsCandidateProfileUpdateError
      >({
        path: `/public-api/projects/${projectId}/candidate-profile`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsFirstSetupList: (
      { projectId }: ProjectsFirstSetupListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsFirstSetupListData,
        ProjectsFirstSetupListError
      >({
        path: `/public-api/projects/${projectId}/first-setup`,
        method: "GET",
        format: "json",
        ...params,
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
    projectsFirstSetupPreferencesPartialUpdate: (
      { projectId }: ProjectsFirstSetupPreferencesPartialUpdateParams,
      data: ProjectsFirstSetupPreferencesPartialUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsFirstSetupPreferencesPartialUpdateData,
        ProjectsFirstSetupPreferencesPartialUpdateError
      >({
        path: `/public-api/projects/${projectId}/first-setup/preferences`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsInterviewsList: (
      { projectId, ...query }: ProjectsInterviewsListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsInterviewsListData,
        ProjectsInterviewsListError
      >({
        path: `/public-api/projects/${projectId}/interviews`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
    projectsList: (params: RequestParams = {}) =>
      this.http.request<ProjectsListData, ProjectsListError>({
        path: `/public-api/projects`,
        method: "GET",
        format: "json",
        ...params,
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
    projectsProgressBoardItemsCreate: (
      { projectId }: ProjectsProgressBoardItemsCreateParams,
      data: ProjectsProgressBoardItemsCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsProgressBoardItemsCreateData,
        ProjectsProgressBoardItemsCreateError
      >({
        path: `/public-api/projects/${projectId}/progress-board/items`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsProgressBoardList: (
      { projectId }: ProjectsProgressBoardListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsProgressBoardListData,
        ProjectsProgressBoardListError
      >({
        path: `/public-api/projects/${projectId}/progress-board`,
        method: "GET",
        format: "json",
        ...params,
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
    projectsVacancyEvaluationsCreate: (
      { projectId }: ProjectsVacancyEvaluationsCreateParams,
      data: ProjectsVacancyEvaluationsCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyEvaluationsCreateData,
        ProjectsVacancyEvaluationsCreateError
      >({
        path: `/public-api/projects/${projectId}/vacancy-evaluations`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsVacancyExtractionsCreate: (
      { projectId }: ProjectsVacancyExtractionsCreateParams,
      data: ProjectsVacancyExtractionsCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyExtractionsCreateData,
        ProjectsVacancyExtractionsCreateError
      >({
        path: `/public-api/projects/${projectId}/vacancy-extractions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsVacancyScrapingGenerateSourcesCreate: (
      { projectId }: ProjectsVacancyScrapingGenerateSourcesCreateParams,
      data: ProjectsVacancyScrapingGenerateSourcesCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingGenerateSourcesCreateData,
        ProjectsVacancyScrapingGenerateSourcesCreateError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/generate-sources`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsVacancyScrapingResultsDetail: (
      { projectId, vacancyId }: ProjectsVacancyScrapingResultsDetailParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingResultsDetailData,
        ProjectsVacancyScrapingResultsDetailError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results/${vacancyId}`,
        method: "GET",
        format: "json",
        ...params,
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
    projectsVacancyScrapingResultsEvaluateCreate: (
      { projectId }: ProjectsVacancyScrapingResultsEvaluateCreateParams,
      data: ProjectsVacancyScrapingResultsEvaluateCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingResultsEvaluateCreateData,
        ProjectsVacancyScrapingResultsEvaluateCreateError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results/evaluate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsVacancyScrapingResultsImportToBoardCreate: (
      { projectId }: ProjectsVacancyScrapingResultsImportToBoardCreateParams,
      data: ProjectsVacancyScrapingResultsImportToBoardCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingResultsImportToBoardCreateData,
        ProjectsVacancyScrapingResultsImportToBoardCreateError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results/import-to-board`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsVacancyScrapingResultsList: (
      { projectId, ...query }: ProjectsVacancyScrapingResultsListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingResultsListData,
        ProjectsVacancyScrapingResultsListError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
    projectsVacancyScrapingResultsMarkReviewedCreate: (
      { projectId }: ProjectsVacancyScrapingResultsMarkReviewedCreateParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingResultsMarkReviewedCreateData,
        ProjectsVacancyScrapingResultsMarkReviewedCreateError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/results/mark-reviewed`,
        method: "POST",
        format: "json",
        ...params,
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
    projectsVacancyScrapingRunAllCreate: (
      { projectId }: ProjectsVacancyScrapingRunAllCreateParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingRunAllCreateData,
        ProjectsVacancyScrapingRunAllCreateError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/run-all`,
        method: "POST",
        format: "json",
        ...params,
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
    projectsVacancyScrapingRunsCreate: (
      { projectId }: ProjectsVacancyScrapingRunsCreateParams,
      data: ProjectsVacancyScrapingRunsCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingRunsCreateData,
        ProjectsVacancyScrapingRunsCreateError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/runs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsVacancyScrapingRunsList: (
      { projectId }: ProjectsVacancyScrapingRunsListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingRunsListData,
        ProjectsVacancyScrapingRunsListError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/runs`,
        method: "GET",
        format: "json",
        ...params,
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
    projectsVacancyScrapingSourcesCreate: (
      { projectId }: ProjectsVacancyScrapingSourcesCreateParams,
      data: ProjectsVacancyScrapingSourcesCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingSourcesCreateData,
        ProjectsVacancyScrapingSourcesCreateError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/sources`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    projectsVacancyScrapingSourcesList: (
      { projectId }: ProjectsVacancyScrapingSourcesListParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        ProjectsVacancyScrapingSourcesListData,
        ProjectsVacancyScrapingSourcesListError
      >({
        path: `/public-api/projects/${projectId}/vacancy-scraping/sources`,
        method: "GET",
        format: "json",
        ...params,
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
    statusList: (params: RequestParams = {}) =>
      this.http.request<StatusListData, any>({
        path: `/public-api/status`,
        method: "GET",
        format: "json",
        ...params,
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
    tailoredResumesPhotoCompleteCreate: (
      { resumeId }: TailoredResumesPhotoCompleteCreateParams,
      data: TailoredResumesPhotoCompleteCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        TailoredResumesPhotoCompleteCreateData,
        TailoredResumesPhotoCompleteCreateError
      >({
        path: `/public-api/tailored-resumes/${resumeId}/photo/complete`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    tailoredResumesPhotoUploadCreate: (
      { resumeId }: TailoredResumesPhotoUploadCreateParams,
      data: TailoredResumesPhotoUploadCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        TailoredResumesPhotoUploadCreateData,
        TailoredResumesPhotoUploadCreateError
      >({
        path: `/public-api/tailored-resumes/${resumeId}/photo/upload`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    vacancyEvaluationsAiTasksDetail: (
      { taskId }: VacancyEvaluationsAiTasksDetailParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        VacancyEvaluationsAiTasksDetailData,
        VacancyEvaluationsAiTasksDetailError
      >({
        path: `/public-api/vacancy-evaluations/ai-tasks/${taskId}`,
        method: "GET",
        format: "json",
        ...params,
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
    vacancyExtractionsAiTasksDetail: (
      { taskId }: VacancyExtractionsAiTasksDetailParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        VacancyExtractionsAiTasksDetailData,
        VacancyExtractionsAiTasksDetailError
      >({
        path: `/public-api/vacancy-extractions/ai-tasks/${taskId}`,
        method: "GET",
        format: "json",
        ...params,
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
    vacancyScrapingCatalogList: (params: RequestParams = {}) =>
      this.http.request<
        VacancyScrapingCatalogListData,
        VacancyScrapingCatalogListError
      >({
        path: `/public-api/vacancy-scraping/catalog`,
        method: "GET",
        format: "json",
        ...params,
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
    vacancyScrapingRunsCancelCreate: (
      { runId }: VacancyScrapingRunsCancelCreateParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        VacancyScrapingRunsCancelCreateData,
        VacancyScrapingRunsCancelCreateError
      >({
        path: `/public-api/vacancy-scraping/runs/${runId}/cancel`,
        method: "POST",
        format: "json",
        ...params,
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
    vacancyScrapingRunsRetryCreate: (
      { runId }: VacancyScrapingRunsRetryCreateParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        VacancyScrapingRunsRetryCreateData,
        VacancyScrapingRunsRetryCreateError
      >({
        path: `/public-api/vacancy-scraping/runs/${runId}/retry`,
        method: "POST",
        format: "json",
        ...params,
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
    vacancyScrapingSourcesDelete: (
      { sourceId }: VacancyScrapingSourcesDeleteParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        VacancyScrapingSourcesDeleteData,
        VacancyScrapingSourcesDeleteError
      >({
        path: `/public-api/vacancy-scraping/sources/${sourceId}`,
        method: "DELETE",
        format: "json",
        ...params,
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
    vacancyScrapingSourcesPartialUpdate: (
      { sourceId }: VacancyScrapingSourcesPartialUpdateParams,
      data: VacancyScrapingSourcesPartialUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        VacancyScrapingSourcesPartialUpdateData,
        VacancyScrapingSourcesPartialUpdateError
      >({
        path: `/public-api/vacancy-scraping/sources/${sourceId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    vacancyScrapingSourcesRunCreate: (
      { sourceId }: VacancyScrapingSourcesRunCreateParams,
      params: RequestParams = {},
    ) =>
      this.http.request<
        VacancyScrapingSourcesRunCreateData,
        VacancyScrapingSourcesRunCreateError
      >({
        path: `/public-api/vacancy-scraping/sources/${sourceId}/run`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
}
