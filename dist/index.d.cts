import * as axios from 'axios';
import { AxiosRequestConfig, ResponseType, AxiosInstance, AxiosResponse } from 'axios';

type AiTasksDetailData = {
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
    taskType: "resumes.tailored_resume_generate" | "resumes.tailored_resume_pdf_export";
    /** @format date-time */
    updatedAt: string;
} | {
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
    taskType: "cover_letters.cover_letter_generate" | "cover_letters.cover_letter_pdf_export";
    /** @format date-time */
    updatedAt: string;
} | {
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
} | {
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
    taskType: "vacancy_scraping.source_run" | "vacancy_scraping.first_evaluation" | "vacancy_scraping.main_evaluation" | "vacancy_scraping.manual_extraction" | "vacancy_scraping.manual_evaluation";
    /** @format date-time */
    updatedAt: string;
};
type AiTasksDetailError = {
    message: string;
};
interface AiTasksDetailParams {
    /** @minLength 1 */
    taskId: string;
}
interface BillingAiPricingCatalogListData {
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
    operations: ({
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
    } | {
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
    })[];
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
type BillingAiPricingCatalogListError = {
    message: string;
};
interface BillingMeBalanceListData {
    /** @pattern ^\d+(?:\.\d{1,6})?$ */
    availableUsd: string;
    /** @pattern ^\d+(?:\.\d{1,6})?$ */
    balanceUsd: string;
    operationHints: Record<string, {
        /** @pattern ^\d+(?:\.\d{1,6})?$ */
        minimumReservationUsd: string;
        /** @pattern ^\d+(?:\.\d{1,6})?$ */
        reservationStepUsd: string;
    }>;
    /** @pattern ^\d+(?:\.\d{1,6})?$ */
    reservedUsd: string;
}
type BillingMeBalanceListError = {
    message: string;
};
type BillingMeLedgerListData = {
    balanceAfterUsd: string;
    /** @format date-time */
    createdAt: string;
    deltaUsd: string;
    description: string;
    id: string;
    metadata: Record<string, any>;
    type: "DEPOSIT" | "AI_USAGE_CHARGE" | "MANUAL_ADJUSTMENT";
}[];
type BillingMeLedgerListError = {
    message: string;
};
interface BillingMeLedgerListParams {
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
interface BillingMeTierListData {
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
type BillingMeTierListError = {
    message: string;
};
type BillingMeUsageChargesDailySummaryListData = {
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
type BillingMeUsageChargesDailySummaryListError = {
    message: string;
};
interface BillingMeUsageChargesDailySummaryListParams {
    /** @pattern ^\d{4}-\d{2}-\d{2}$ */
    fromDate: string;
    /** @pattern ^\d{4}-\d{2}-\d{2}$ */
    toDate: string;
}
type BillingMeUsageChargesListData = {
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
type BillingMeUsageChargesListError = {
    message: string;
};
interface BillingMeUsageChargesListParams {
    /** @pattern ^\d{4}-\d{2}-\d{2}$ */
    fromDate: string;
    /** @pattern ^\d{4}-\d{2}-\d{2}$ */
    toDate: string;
}
type DownloadsDetailError = {
    message: string;
};
interface DownloadsDetailParams {
    /** @minLength 1 */
    storedFileId: string;
}
interface GetDownloadsData {
    /** @format date-time */
    expiresAt: string;
    fileName: string | null;
    mimeType: string | null;
    /** @format uri */
    signedUrl: string;
}
type GetDownloadsError = {
    message: string;
};
interface GetDownloadsParams {
    /** @minLength 1 */
    storedFileId: string;
}
interface GetPublicApiData {
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
type GetPublicApiError = {
    message: string;
};
interface ProgressBoardAttachmentsCompleteCreateData {
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
type ProgressBoardAttachmentsCompleteCreateError = {
    message: string;
};
interface ProgressBoardAttachmentsCompleteCreateParams {
    /** @minLength 1 */
    attachmentId: string;
}
interface ProgressBoardCommentsAttachmentsCreateData {
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
type ProgressBoardCommentsAttachmentsCreateError = {
    message: string;
};
interface ProgressBoardCommentsAttachmentsCreateParams {
    /** @minLength 1 */
    commentId: string;
}
interface ProgressBoardCommentsAttachmentsCreatePayload {
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
type ProgressBoardCommentsDeleteData = null;
type ProgressBoardCommentsDeleteError = {
    message: string;
};
interface ProgressBoardCommentsDeleteParams {
    /** @minLength 1 */
    commentId: string;
}
interface ProgressBoardCommentsPartialUpdateData {
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
type ProgressBoardCommentsPartialUpdateError = {
    message: string;
};
interface ProgressBoardCommentsPartialUpdateParams {
    /** @minLength 1 */
    commentId: string;
}
interface ProgressBoardCommentsPartialUpdatePayload {
    /** @maxLength 50000 */
    body: string;
}
interface ProgressBoardInterviewsAiListData {
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
                interviewType: "HR" | "TECHNICAL" | "SYSTEM_DESIGN" | "MANAGER" | "MIXED";
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
                kind: "BEST_TECHNICAL_ANSWER" | "BEST_PRODUCT_THINKING_ANSWER" | "MOST_CONFIDENT_MOMENT" | "MOST_VAGUE_ANSWER" | "RED_FLAG" | "IMPORTANT_CONTEXT";
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
                dimension: "TECHNICAL_DEPTH" | "COMMUNICATION" | "PROBLEM_SOLVING" | "OWNERSHIP" | "LEADERSHIP" | "CULTURE_FIT" | "ENGLISH_FLUENCY";
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
                    kind: "STRONG_ANSWER" | "WEAK_ANSWER" | "UNCLEAR_MOMENT" | "RED_FLAG" | "IMPORTANT_CONTEXT";
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
        status: "UPLOADING" | "PENDING_METADATA" | "TRANSCRIBING" | "READY" | "FAILED";
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
type ProgressBoardInterviewsAiListError = {
    message: string;
};
interface ProgressBoardInterviewsAiListParams {
    /** @minLength 1 */
    interviewId: string;
}
type ProgressBoardInterviewsDeleteData = null;
type ProgressBoardInterviewsDeleteError = {
    message: string;
};
interface ProgressBoardInterviewsDeleteParams {
    /** @minLength 1 */
    interviewId: string;
}
interface ProgressBoardInterviewsPartialUpdateData {
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
type ProgressBoardInterviewsPartialUpdateError = {
    message: string;
};
interface ProgressBoardInterviewsPartialUpdateParams {
    /** @minLength 1 */
    interviewId: string;
}
interface ProgressBoardInterviewsPartialUpdatePayload {
    /** @format uri */
    meetingUrl?: string | null;
    /**
     * @minLength 1
     * @maxLength 180
     */
    recruiterName?: string;
    scheduledAt?: any;
}
interface ProgressBoardItemsCommentsCreateData {
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
type ProgressBoardItemsCommentsCreateError = {
    message: string;
};
interface ProgressBoardItemsCommentsCreateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsCommentsCreatePayload {
    /** @maxLength 50000 */
    body?: string;
}
interface ProgressBoardItemsCommentsListData {
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
type ProgressBoardItemsCommentsListError = {
    message: string;
};
interface ProgressBoardItemsCommentsListParams {
    /** @minLength 1 */
    itemId: string;
}
type ProgressBoardItemsCoverLetterDeleteData = null;
type ProgressBoardItemsCoverLetterDeleteError = {
    message: string;
};
interface ProgressBoardItemsCoverLetterDeleteParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsCoverLetterListData {
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
type ProgressBoardItemsCoverLetterListError = {
    message: string;
};
interface ProgressBoardItemsCoverLetterListParams {
    /** @minLength 1 */
    itemId: string;
}
type ProgressBoardItemsCoverLetterPdfExportCreateData = {
    cacheStatus: "hit" | "generated";
    /** @format uri */
    downloadResolveUrl: string;
    /** @format uri */
    downloadUrl: string;
    status: "ready";
} | {
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
        taskType: "cover_letters.cover_letter_generate" | "cover_letters.cover_letter_pdf_export";
        /** @format date-time */
        updatedAt: string;
    };
};
type ProgressBoardItemsCoverLetterPdfExportCreateError = {
    message: string;
};
interface ProgressBoardItemsCoverLetterPdfExportCreateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsCoverLetterTasksCreateData {
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
        taskType: "cover_letters.cover_letter_generate" | "cover_letters.cover_letter_pdf_export";
        /** @format date-time */
        updatedAt: string;
    };
}
type ProgressBoardItemsCoverLetterTasksCreateError = {
    message: string;
};
interface ProgressBoardItemsCoverLetterTasksCreateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsCoverLetterTasksCreatePayload {
    /** Optional current cover letter JSON used for iterative regeneration. */
    currentContentJson?: any;
    /**
     * Optional wish text from the user with additional cover letter preferences.
     * @maxLength 20000
     */
    wishText?: string;
}
interface ProgressBoardItemsCoverLetterUpdateData {
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
type ProgressBoardItemsCoverLetterUpdateError = {
    message: string;
};
interface ProgressBoardItemsCoverLetterUpdateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsCoverLetterUpdatePayload {
    /** Full cover letter JSON to persist after manual editing. */
    contentJson: any;
}
type ProgressBoardItemsDeleteData = null;
type ProgressBoardItemsDeleteError = {
    message: string;
};
interface ProgressBoardItemsDeleteParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsDetailData {
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
type ProgressBoardItemsDetailError = {
    message: string;
};
interface ProgressBoardItemsDetailParams {
    /** @minLength 1 */
    itemId: string;
}
type ProgressBoardItemsInterviewPreparationDeleteData = null;
type ProgressBoardItemsInterviewPreparationDeleteError = {
    message: string;
};
interface ProgressBoardItemsInterviewPreparationDeleteParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsInterviewPreparationListData {
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
type ProgressBoardItemsInterviewPreparationListError = {
    message: string;
};
interface ProgressBoardItemsInterviewPreparationListParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsInterviewPreparationTasksCreateData {
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
type ProgressBoardItemsInterviewPreparationTasksCreateError = {
    message: string;
};
interface ProgressBoardItemsInterviewPreparationTasksCreateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsInterviewPreparationTasksCreatePayload {
    /** Optional current interview preparation JSON used for iterative regeneration. */
    currentContentJson?: any;
}
interface ProgressBoardItemsInterviewsCreateData {
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
            transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
type ProgressBoardItemsInterviewsCreateError = {
    message: string;
};
interface ProgressBoardItemsInterviewsCreateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsInterviewsCreatePayload {
    /** @format uri */
    meetingUrl?: string;
    /**
     * @minLength 1
     * @maxLength 180
     */
    recruiterName: string;
    scheduledAt: any;
}
interface ProgressBoardItemsInterviewsListData {
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
        /** @format date-time */
        updatedAt: string;
    }[];
    itemId: string;
}
type ProgressBoardItemsInterviewsListError = {
    message: string;
};
interface ProgressBoardItemsInterviewsListParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsMoveCreateData {
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
type ProgressBoardItemsMoveCreateError = {
    message: string;
};
interface ProgressBoardItemsMoveCreateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsMoveCreatePayload {
    /**
     * @min 0
     * @max 9007199254740991
     */
    position: number;
    status: "todo" | "applied" | "active" | "declined" | "archived";
}
interface ProgressBoardItemsPartialUpdateData {
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
type ProgressBoardItemsPartialUpdateError = {
    message: string;
};
interface ProgressBoardItemsPartialUpdateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsPartialUpdatePayload {
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
type ProgressBoardItemsTailoredResumeDeleteData = null;
type ProgressBoardItemsTailoredResumeDeleteError = {
    message: string;
};
interface ProgressBoardItemsTailoredResumeDeleteParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsTailoredResumeListData {
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
type ProgressBoardItemsTailoredResumeListError = {
    message: string;
};
interface ProgressBoardItemsTailoredResumeListParams {
    /** @minLength 1 */
    itemId: string;
}
type ProgressBoardItemsTailoredResumePdfExportCreateData = {
    cacheStatus: "hit" | "generated";
    /** @format uri */
    downloadResolveUrl: string;
    /** @format uri */
    downloadUrl: string;
    status: "ready";
} | {
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
        taskType: "resumes.tailored_resume_generate" | "resumes.tailored_resume_pdf_export";
        /** @format date-time */
        updatedAt: string;
    };
};
type ProgressBoardItemsTailoredResumePdfExportCreateError = {
    message: string;
};
interface ProgressBoardItemsTailoredResumePdfExportCreateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsTailoredResumeTasksCreateData {
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
        taskType: "resumes.tailored_resume_generate" | "resumes.tailored_resume_pdf_export";
        /** @format date-time */
        updatedAt: string;
    };
}
type ProgressBoardItemsTailoredResumeTasksCreateError = {
    message: string;
};
interface ProgressBoardItemsTailoredResumeTasksCreateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsTailoredResumeTasksCreatePayload {
    /** Optional current resume JSON used for iterative regeneration. */
    currentContentJson?: any;
    /**
     * Optional wish text from the user with additional tailoring preferences.
     * @maxLength 20000
     */
    wishText?: string;
}
interface ProgressBoardItemsTailoredResumeUpdateData {
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
type ProgressBoardItemsTailoredResumeUpdateError = {
    message: string;
};
interface ProgressBoardItemsTailoredResumeUpdateParams {
    /** @minLength 1 */
    itemId: string;
}
interface ProgressBoardItemsTailoredResumeUpdatePayload {
    /** Full resume JSON to persist after manual editing. */
    contentJson: any;
}
interface ProjectsAiPricingCatalogListData {
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
    operations: ({
        appliesToOperations: string[];
        billingKind: "llm";
        key: string;
        label: string;
        pricingOperation: string;
        projectPresetScope: "artifact_generation" | "interview_preparation" | "interview_overview" | "ai_artifact_chat" | null;
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
    } | {
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
    })[];
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
type ProjectsAiPricingCatalogListError = {
    message: string;
};
interface ProjectsAiPricingCatalogListParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsCandidateProfileListData {
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
type ProjectsCandidateProfileListError = {
    message: string;
};
interface ProjectsCandidateProfileListParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsCandidateProfileUpdateData {
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
type ProjectsCandidateProfileUpdateError = {
    message: string;
};
interface ProjectsCandidateProfileUpdateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsCandidateProfileUpdatePayload {
    /** @maxLength 2000000 */
    contentMarkdown: string;
}
interface ProjectsFirstSetupListData {
    /**
     * @min 0
     * @max 9007199254740991
     */
    completedRequiredCount: number;
    hiddenForCurrentUser: boolean;
    isComplete: boolean;
    shouldDisplay: boolean;
    steps: {
        id: "candidate_profile" | "resume_photo" | "first_board_item" | "tailored_resume" | "tailored_cover_letter" | "first_interview_date" | "interview_prep" | "interview_audio";
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
type ProjectsFirstSetupListError = {
    message: string;
};
interface ProjectsFirstSetupListParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsFirstSetupPreferencesPartialUpdateData {
    /**
     * @min 0
     * @max 9007199254740991
     */
    completedRequiredCount: number;
    hiddenForCurrentUser: boolean;
    isComplete: boolean;
    shouldDisplay: boolean;
    steps: {
        id: "candidate_profile" | "resume_photo" | "first_board_item" | "tailored_resume" | "tailored_cover_letter" | "first_interview_date" | "interview_prep" | "interview_audio";
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
type ProjectsFirstSetupPreferencesPartialUpdateError = {
    message: string;
};
interface ProjectsFirstSetupPreferencesPartialUpdateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsFirstSetupPreferencesPartialUpdatePayload {
    hiddenForCurrentUser: boolean;
}
interface ProjectsInterviewsListData {
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
        /** @format date-time */
        updatedAt: string;
    }[];
    projectId: string;
}
type ProjectsInterviewsListError = {
    message: string;
};
interface ProjectsInterviewsListParams {
    from?: any;
    /** @minLength 1 */
    projectId: string;
    to?: any;
}
type ProjectsListData = {
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
type ProjectsListError = {
    message: string;
};
interface ProjectsProgressBoardItemsCreateData {
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
        transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
type ProjectsProgressBoardItemsCreateError = {
    message: string;
};
interface ProjectsProgressBoardItemsCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsProgressBoardItemsCreatePayload {
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
interface ProjectsProgressBoardListData {
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
                transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
                transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
                transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
                transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
                transcriptionStatus: "UPLOADING" | "TRANSCRIBING" | "READY" | "FAILED" | null;
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
type ProjectsProgressBoardListError = {
    message: string;
};
interface ProjectsProgressBoardListParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyEvaluationsCreateData {
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
        taskType: "vacancy_scraping.source_run" | "vacancy_scraping.first_evaluation" | "vacancy_scraping.main_evaluation" | "vacancy_scraping.manual_extraction" | "vacancy_scraping.manual_evaluation";
        /** @format date-time */
        updatedAt: string;
    };
}
type ProjectsVacancyEvaluationsCreateError = {
    message: string;
};
interface ProjectsVacancyEvaluationsCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyEvaluationsCreatePayload {
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
interface ProjectsVacancyExtractionsCreateData {
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
        taskType: "vacancy_scraping.source_run" | "vacancy_scraping.first_evaluation" | "vacancy_scraping.main_evaluation" | "vacancy_scraping.manual_extraction" | "vacancy_scraping.manual_evaluation";
        /** @format date-time */
        updatedAt: string;
    };
}
type ProjectsVacancyExtractionsCreateError = {
    message: string;
};
interface ProjectsVacancyExtractionsCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyExtractionsCreatePayload {
    /**
     * @minLength 1
     * @maxLength 500000
     */
    pageReadableText: string;
}
interface ProjectsVacancyScrapingGenerateSourcesCreateData {
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
type ProjectsVacancyScrapingGenerateSourcesCreateError = {
    message: string;
};
interface ProjectsVacancyScrapingGenerateSourcesCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyScrapingGenerateSourcesCreatePayload {
    /**
     * @minLength 1
     * @maxLength 1000
     */
    wish?: string;
}
interface ProjectsVacancyScrapingResultsDetailData {
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
    evaluationStatus: "PENDING" | "FIRST_STAGE_RUNNING" | "MAIN_STAGE_PENDING" | "MAIN_STAGE_RUNNING" | "SUCCEEDED" | "FAILED" | "SKIPPED" | null;
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
type ProjectsVacancyScrapingResultsDetailError = {
    message: string;
};
interface ProjectsVacancyScrapingResultsDetailParams {
    /** @minLength 1 */
    projectId: string;
    /** @minLength 1 */
    vacancyId: string;
}
interface ProjectsVacancyScrapingResultsEvaluateCreateData {
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
type ProjectsVacancyScrapingResultsEvaluateCreateError = {
    message: string;
};
interface ProjectsVacancyScrapingResultsEvaluateCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyScrapingResultsEvaluateCreatePayload {
    /**
     * @maxItems 500
     * @minItems 1
     */
    scrapedVacancyIds: string[];
}
interface ProjectsVacancyScrapingResultsImportToBoardCreateData {
    importedItems: {
        progressBoardItemId: string;
        scrapedVacancyId: string;
        status: "CREATED" | "EXISTING";
    }[];
    projectId: string;
}
type ProjectsVacancyScrapingResultsImportToBoardCreateError = {
    message: string;
};
interface ProjectsVacancyScrapingResultsImportToBoardCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyScrapingResultsImportToBoardCreatePayload {
    /**
     * @maxItems 500
     * @minItems 1
     */
    scrapedVacancyIds: string[];
}
interface ProjectsVacancyScrapingResultsListData {
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
        evaluationStatus: "PENDING" | "FIRST_STAGE_RUNNING" | "MAIN_STAGE_PENDING" | "MAIN_STAGE_RUNNING" | "SUCCEEDED" | "FAILED" | "SKIPPED" | null;
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
type ProjectsVacancyScrapingResultsListError = {
    message: string;
};
interface ProjectsVacancyScrapingResultsListParams {
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
    sortBy?: "matchScore" | "lastSeenAt" | "firstSeenAt" | "companyName" | "title" | "importedAt";
    sortDirection?: "asc" | "desc";
    sourceIds: string[];
    verdicts: ("YES" | "MAYBE" | "NO")[];
    withDescription?: boolean;
}
interface ProjectsVacancyScrapingResultsMarkReviewedCreateData {
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
type ProjectsVacancyScrapingResultsMarkReviewedCreateError = {
    message: string;
};
interface ProjectsVacancyScrapingResultsMarkReviewedCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyScrapingRunAllCreateData {
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
        status: "QUEUED" | "RUNNING" | "SCRAPED" | "EVALUATING" | "SUCCEEDED" | "FAILED" | "CANCELED";
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
        taskType: "vacancy_scraping.source_run" | "vacancy_scraping.first_evaluation" | "vacancy_scraping.main_evaluation" | "vacancy_scraping.manual_extraction" | "vacancy_scraping.manual_evaluation";
        /** @format date-time */
        updatedAt: string;
    };
}
type ProjectsVacancyScrapingRunAllCreateError = {
    message: string;
};
interface ProjectsVacancyScrapingRunAllCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyScrapingRunsCreateData {
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
        status: "QUEUED" | "RUNNING" | "SCRAPED" | "EVALUATING" | "SUCCEEDED" | "FAILED" | "CANCELED";
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
        taskType: "vacancy_scraping.source_run" | "vacancy_scraping.first_evaluation" | "vacancy_scraping.main_evaluation" | "vacancy_scraping.manual_extraction" | "vacancy_scraping.manual_evaluation";
        /** @format date-time */
        updatedAt: string;
    };
}
type ProjectsVacancyScrapingRunsCreateError = {
    message: string;
};
interface ProjectsVacancyScrapingRunsCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyScrapingRunsCreatePayload {
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
interface ProjectsVacancyScrapingRunsListData {
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
        status: "QUEUED" | "RUNNING" | "SCRAPED" | "EVALUATING" | "SUCCEEDED" | "FAILED" | "CANCELED";
        triggerKind: "MANUAL" | "PROJECT_SCHEDULE" | "RUN_ALL";
        /** @format date-time */
        updatedAt: string;
    }[];
}
type ProjectsVacancyScrapingRunsListError = {
    message: string;
};
interface ProjectsVacancyScrapingRunsListParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyScrapingSourcesCreateData {
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
type ProjectsVacancyScrapingSourcesCreateError = {
    message: string;
};
interface ProjectsVacancyScrapingSourcesCreateParams {
    /** @minLength 1 */
    projectId: string;
}
interface ProjectsVacancyScrapingSourcesCreatePayload {
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
interface ProjectsVacancyScrapingSourcesListData {
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
type ProjectsVacancyScrapingSourcesListError = {
    message: string;
};
interface ProjectsVacancyScrapingSourcesListParams {
    /** @minLength 1 */
    projectId: string;
}
interface StatusListData {
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
type StoredDetailError = {
    message: string;
};
interface StoredDetailParams {
    /** @minLength 1 */
    storedFileId: string;
}
interface TailoredResumesPhotoCompleteCreateData {
    /** @format uri */
    photoUrl: string;
}
type TailoredResumesPhotoCompleteCreateError = {
    message: string;
};
interface TailoredResumesPhotoCompleteCreateParams {
    /** @minLength 1 */
    resumeId: string;
}
interface TailoredResumesPhotoCompleteCreatePayload {
    /**
     * @minLength 1
     * @maxLength 512
     */
    uploadKey: string;
}
interface TailoredResumesPhotoUploadCreateData {
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
type TailoredResumesPhotoUploadCreateError = {
    message: string;
};
interface TailoredResumesPhotoUploadCreateParams {
    /** @minLength 1 */
    resumeId: string;
}
interface TailoredResumesPhotoUploadCreatePayload {
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
interface VacancyEvaluationsAiTasksDetailData {
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
    taskType: "vacancy_scraping.source_run" | "vacancy_scraping.first_evaluation" | "vacancy_scraping.main_evaluation" | "vacancy_scraping.manual_extraction" | "vacancy_scraping.manual_evaluation";
    /** @format date-time */
    updatedAt: string;
}
type VacancyEvaluationsAiTasksDetailError = {
    message: string;
};
interface VacancyEvaluationsAiTasksDetailParams {
    /** @minLength 1 */
    taskId: string;
}
interface VacancyExtractionsAiTasksDetailData {
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
    taskType: "vacancy_scraping.source_run" | "vacancy_scraping.first_evaluation" | "vacancy_scraping.main_evaluation" | "vacancy_scraping.manual_extraction" | "vacancy_scraping.manual_evaluation";
    /** @format date-time */
    updatedAt: string;
}
type VacancyExtractionsAiTasksDetailError = {
    message: string;
};
interface VacancyExtractionsAiTasksDetailParams {
    /** @minLength 1 */
    taskId: string;
}
interface VacancyScrapingCatalogListData {
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
type VacancyScrapingCatalogListError = {
    message: string;
};
interface VacancyScrapingRunsCancelCreateData {
    runId: string;
    status: "CANCELED";
}
type VacancyScrapingRunsCancelCreateError = {
    message: string;
};
interface VacancyScrapingRunsCancelCreateParams {
    /** @minLength 1 */
    runId: string;
}
interface VacancyScrapingRunsRetryCreateData {
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
        status: "QUEUED" | "RUNNING" | "SCRAPED" | "EVALUATING" | "SUCCEEDED" | "FAILED" | "CANCELED";
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
        taskType: "vacancy_scraping.source_run" | "vacancy_scraping.first_evaluation" | "vacancy_scraping.main_evaluation" | "vacancy_scraping.manual_extraction" | "vacancy_scraping.manual_evaluation";
        /** @format date-time */
        updatedAt: string;
    };
}
type VacancyScrapingRunsRetryCreateError = {
    message: string;
};
interface VacancyScrapingRunsRetryCreateParams {
    /** @minLength 1 */
    runId: string;
}
type VacancyScrapingSourcesDeleteData = null;
type VacancyScrapingSourcesDeleteError = {
    message: string;
};
interface VacancyScrapingSourcesDeleteParams {
    /** @minLength 1 */
    sourceId: string;
}
interface VacancyScrapingSourcesPartialUpdateData {
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
type VacancyScrapingSourcesPartialUpdateError = {
    message: string;
};
interface VacancyScrapingSourcesPartialUpdateParams {
    /** @minLength 1 */
    sourceId: string;
}
interface VacancyScrapingSourcesPartialUpdatePayload {
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
interface VacancyScrapingSourcesRunCreateData {
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
        status: "QUEUED" | "RUNNING" | "SCRAPED" | "EVALUATING" | "SUCCEEDED" | "FAILED" | "CANCELED";
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
        taskType: "vacancy_scraping.source_run" | "vacancy_scraping.first_evaluation" | "vacancy_scraping.main_evaluation" | "vacancy_scraping.manual_extraction" | "vacancy_scraping.manual_evaluation";
        /** @format date-time */
        updatedAt: string;
    };
}
type VacancyScrapingSourcesRunCreateError = {
    message: string;
};
interface VacancyScrapingSourcesRunCreateParams {
    /** @minLength 1 */
    sourceId: string;
}
declare namespace Stored {
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
    namespace StoredDetail {
        type RequestParams = {
            /** @minLength 1 */
            storedFileId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = any;
    }
}
declare namespace Downloads {
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
    namespace DownloadsDetail {
        type RequestParams = {
            /** @minLength 1 */
            storedFileId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = any;
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
    namespace GetDownloads {
        type RequestParams = {
            /** @minLength 1 */
            storedFileId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = GetDownloadsData;
    }
}

type QueryParamsType = Record<string | number, any>;
interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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
type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
declare enum ContentType {
    Json = "application/json",
    JsonApi = "application/vnd.api+json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
declare namespace PublicApi {
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
    namespace AiTasksDetail {
        type RequestParams = {
            /** @minLength 1 */
            taskId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = AiTasksDetailData;
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
    namespace BillingAiPricingCatalogList {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = BillingAiPricingCatalogListData;
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
    namespace BillingMeBalanceList {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = BillingMeBalanceListData;
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
    namespace BillingMeLedgerList {
        type RequestParams = {};
        type RequestQuery = {
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
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = BillingMeLedgerListData;
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
    namespace BillingMeTierList {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = BillingMeTierListData;
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
    namespace BillingMeUsageChargesDailySummaryList {
        type RequestParams = {};
        type RequestQuery = {
            /** @pattern ^\d{4}-\d{2}-\d{2}$ */
            fromDate: string;
            /** @pattern ^\d{4}-\d{2}-\d{2}$ */
            toDate: string;
        };
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = BillingMeUsageChargesDailySummaryListData;
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
    namespace BillingMeUsageChargesList {
        type RequestParams = {};
        type RequestQuery = {
            /** @pattern ^\d{4}-\d{2}-\d{2}$ */
            fromDate: string;
            /** @pattern ^\d{4}-\d{2}-\d{2}$ */
            toDate: string;
        };
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = BillingMeUsageChargesListData;
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
    namespace GetPublicApi {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = GetPublicApiData;
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
    namespace ProgressBoardAttachmentsCompleteCreate {
        type RequestParams = {
            /** @minLength 1 */
            attachmentId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardAttachmentsCompleteCreateData;
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
    namespace ProgressBoardCommentsAttachmentsCreate {
        type RequestParams = {
            /** @minLength 1 */
            commentId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardCommentsAttachmentsCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardCommentsAttachmentsCreateData;
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
    namespace ProgressBoardCommentsDelete {
        type RequestParams = {
            /** @minLength 1 */
            commentId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardCommentsDeleteData;
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
    namespace ProgressBoardCommentsPartialUpdate {
        type RequestParams = {
            /** @minLength 1 */
            commentId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardCommentsPartialUpdatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardCommentsPartialUpdateData;
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
    namespace ProgressBoardInterviewsAiList {
        type RequestParams = {
            /** @minLength 1 */
            interviewId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardInterviewsAiListData;
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
    namespace ProgressBoardInterviewsDelete {
        type RequestParams = {
            /** @minLength 1 */
            interviewId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardInterviewsDeleteData;
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
    namespace ProgressBoardInterviewsPartialUpdate {
        type RequestParams = {
            /** @minLength 1 */
            interviewId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardInterviewsPartialUpdatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardInterviewsPartialUpdateData;
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
    namespace ProgressBoardItemsCommentsCreate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardItemsCommentsCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsCommentsCreateData;
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
    namespace ProgressBoardItemsCommentsList {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsCommentsListData;
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
    namespace ProgressBoardItemsCoverLetterDelete {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsCoverLetterDeleteData;
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
    namespace ProgressBoardItemsCoverLetterList {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsCoverLetterListData;
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
    namespace ProgressBoardItemsCoverLetterPdfExportCreate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsCoverLetterPdfExportCreateData;
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
    namespace ProgressBoardItemsCoverLetterTasksCreate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardItemsCoverLetterTasksCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsCoverLetterTasksCreateData;
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
    namespace ProgressBoardItemsCoverLetterUpdate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardItemsCoverLetterUpdatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsCoverLetterUpdateData;
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
    namespace ProgressBoardItemsDelete {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsDeleteData;
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
    namespace ProgressBoardItemsDetail {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsDetailData;
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
    namespace ProgressBoardItemsInterviewPreparationDelete {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsInterviewPreparationDeleteData;
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
    namespace ProgressBoardItemsInterviewPreparationList {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsInterviewPreparationListData;
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
    namespace ProgressBoardItemsInterviewPreparationTasksCreate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardItemsInterviewPreparationTasksCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsInterviewPreparationTasksCreateData;
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
    namespace ProgressBoardItemsInterviewsCreate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardItemsInterviewsCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsInterviewsCreateData;
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
    namespace ProgressBoardItemsInterviewsList {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsInterviewsListData;
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
    namespace ProgressBoardItemsMoveCreate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardItemsMoveCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsMoveCreateData;
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
    namespace ProgressBoardItemsPartialUpdate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardItemsPartialUpdatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsPartialUpdateData;
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
    namespace ProgressBoardItemsTailoredResumeDelete {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsTailoredResumeDeleteData;
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
    namespace ProgressBoardItemsTailoredResumeList {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsTailoredResumeListData;
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
    namespace ProgressBoardItemsTailoredResumePdfExportCreate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsTailoredResumePdfExportCreateData;
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
    namespace ProgressBoardItemsTailoredResumeTasksCreate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardItemsTailoredResumeTasksCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsTailoredResumeTasksCreateData;
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
    namespace ProgressBoardItemsTailoredResumeUpdate {
        type RequestParams = {
            /** @minLength 1 */
            itemId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProgressBoardItemsTailoredResumeUpdatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProgressBoardItemsTailoredResumeUpdateData;
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
    namespace ProjectsAiPricingCatalogList {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsAiPricingCatalogListData;
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
    namespace ProjectsCandidateProfileList {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsCandidateProfileListData;
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
    namespace ProjectsCandidateProfileUpdate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsCandidateProfileUpdatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsCandidateProfileUpdateData;
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
    namespace ProjectsFirstSetupList {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsFirstSetupListData;
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
    namespace ProjectsFirstSetupPreferencesPartialUpdate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsFirstSetupPreferencesPartialUpdatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsFirstSetupPreferencesPartialUpdateData;
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
    namespace ProjectsInterviewsList {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {
            from?: any;
            to?: any;
        };
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsInterviewsListData;
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
    namespace ProjectsList {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsListData;
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
    namespace ProjectsProgressBoardItemsCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsProgressBoardItemsCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsProgressBoardItemsCreateData;
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
    namespace ProjectsProgressBoardList {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsProgressBoardListData;
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
    namespace ProjectsVacancyEvaluationsCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsVacancyEvaluationsCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyEvaluationsCreateData;
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
    namespace ProjectsVacancyExtractionsCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsVacancyExtractionsCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyExtractionsCreateData;
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
    namespace ProjectsVacancyScrapingGenerateSourcesCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsVacancyScrapingGenerateSourcesCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingGenerateSourcesCreateData;
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
    namespace ProjectsVacancyScrapingResultsDetail {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
            /** @minLength 1 */
            vacancyId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingResultsDetailData;
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
    namespace ProjectsVacancyScrapingResultsEvaluateCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsVacancyScrapingResultsEvaluateCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingResultsEvaluateCreateData;
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
    namespace ProjectsVacancyScrapingResultsImportToBoardCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsVacancyScrapingResultsImportToBoardCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingResultsImportToBoardCreateData;
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
    namespace ProjectsVacancyScrapingResultsList {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {
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
            sortBy?: "matchScore" | "lastSeenAt" | "firstSeenAt" | "companyName" | "title" | "importedAt";
            sortDirection?: "asc" | "desc";
            sourceIds: string[];
            verdicts: ("YES" | "MAYBE" | "NO")[];
            withDescription?: boolean;
        };
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingResultsListData;
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
    namespace ProjectsVacancyScrapingResultsMarkReviewedCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingResultsMarkReviewedCreateData;
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
    namespace ProjectsVacancyScrapingRunAllCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingRunAllCreateData;
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
    namespace ProjectsVacancyScrapingRunsCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsVacancyScrapingRunsCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingRunsCreateData;
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
    namespace ProjectsVacancyScrapingRunsList {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingRunsListData;
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
    namespace ProjectsVacancyScrapingSourcesCreate {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = ProjectsVacancyScrapingSourcesCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingSourcesCreateData;
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
    namespace ProjectsVacancyScrapingSourcesList {
        type RequestParams = {
            /** @minLength 1 */
            projectId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ProjectsVacancyScrapingSourcesListData;
    }
    /**
     * No description
     * @tags public-api
     * @name StatusList
     * @summary External-facing endpoints and stable contracts for third parties. status
     * @request GET:/public-api/status
     * @response `200` `StatusListData` Default Response
     */
    namespace StatusList {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = StatusListData;
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
    namespace TailoredResumesPhotoCompleteCreate {
        type RequestParams = {
            /** @minLength 1 */
            resumeId: string;
        };
        type RequestQuery = {};
        type RequestBody = TailoredResumesPhotoCompleteCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = TailoredResumesPhotoCompleteCreateData;
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
    namespace TailoredResumesPhotoUploadCreate {
        type RequestParams = {
            /** @minLength 1 */
            resumeId: string;
        };
        type RequestQuery = {};
        type RequestBody = TailoredResumesPhotoUploadCreatePayload;
        type RequestHeaders = {};
        type ResponseBody = TailoredResumesPhotoUploadCreateData;
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
    namespace VacancyEvaluationsAiTasksDetail {
        type RequestParams = {
            /** @minLength 1 */
            taskId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = VacancyEvaluationsAiTasksDetailData;
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
    namespace VacancyExtractionsAiTasksDetail {
        type RequestParams = {
            /** @minLength 1 */
            taskId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = VacancyExtractionsAiTasksDetailData;
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
    namespace VacancyScrapingCatalogList {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = VacancyScrapingCatalogListData;
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
    namespace VacancyScrapingRunsCancelCreate {
        type RequestParams = {
            /** @minLength 1 */
            runId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = VacancyScrapingRunsCancelCreateData;
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
    namespace VacancyScrapingRunsRetryCreate {
        type RequestParams = {
            /** @minLength 1 */
            runId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = VacancyScrapingRunsRetryCreateData;
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
    namespace VacancyScrapingSourcesDelete {
        type RequestParams = {
            /** @minLength 1 */
            sourceId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = VacancyScrapingSourcesDeleteData;
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
    namespace VacancyScrapingSourcesPartialUpdate {
        type RequestParams = {
            /** @minLength 1 */
            sourceId: string;
        };
        type RequestQuery = {};
        type RequestBody = VacancyScrapingSourcesPartialUpdatePayload;
        type RequestHeaders = {};
        type ResponseBody = VacancyScrapingSourcesPartialUpdateData;
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
    namespace VacancyScrapingSourcesRunCreate {
        type RequestParams = {
            /** @minLength 1 */
            sourceId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = VacancyScrapingSourcesRunCreateData;
    }
}
/**
 * @title Careerboard Public API
 * @version 0.1.0
 * @baseUrl http://localhost:3000
 */
declare class PublicApi<SecurityDataType extends unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    stored: {
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
        storedDetail: ({ storedFileId }: StoredDetailParams, params?: RequestParams) => Promise<AxiosResponse<any, any, {}>>;
    };
    downloads: {
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
        downloadsDetail: ({ storedFileId }: DownloadsDetailParams, params?: RequestParams) => Promise<AxiosResponse<any, any, {}>>;
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
        getDownloads: ({ storedFileId }: GetDownloadsParams, params?: RequestParams) => Promise<AxiosResponse<GetDownloadsData, any, {}>>;
    };
    publicApi: {
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
        aiTasksDetail: ({ taskId }: AiTasksDetailParams, params?: RequestParams) => Promise<AxiosResponse<AiTasksDetailData, any, {}>>;
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
        billingAiPricingCatalogList: (params?: RequestParams) => Promise<AxiosResponse<BillingAiPricingCatalogListData, any, {}>>;
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
        billingMeBalanceList: (params?: RequestParams) => Promise<AxiosResponse<BillingMeBalanceListData, any, {}>>;
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
        billingMeLedgerList: (query: BillingMeLedgerListParams, params?: RequestParams) => Promise<AxiosResponse<BillingMeLedgerListData, any, {}>>;
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
        billingMeTierList: (params?: RequestParams) => Promise<AxiosResponse<BillingMeTierListData, any, {}>>;
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
        billingMeUsageChargesDailySummaryList: (query: BillingMeUsageChargesDailySummaryListParams, params?: RequestParams) => Promise<AxiosResponse<BillingMeUsageChargesDailySummaryListData, any, {}>>;
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
        billingMeUsageChargesList: (query: BillingMeUsageChargesListParams, params?: RequestParams) => Promise<AxiosResponse<BillingMeUsageChargesListData, any, {}>>;
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
        getPublicApi: (params?: RequestParams) => Promise<AxiosResponse<GetPublicApiData, any, {}>>;
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
        progressBoardAttachmentsCompleteCreate: ({ attachmentId }: ProgressBoardAttachmentsCompleteCreateParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardAttachmentsCompleteCreateData, any, {}>>;
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
        progressBoardCommentsAttachmentsCreate: ({ commentId }: ProgressBoardCommentsAttachmentsCreateParams, data: ProgressBoardCommentsAttachmentsCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardCommentsAttachmentsCreateData, any, {}>>;
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
        progressBoardCommentsDelete: ({ commentId }: ProgressBoardCommentsDeleteParams, params?: RequestParams) => Promise<AxiosResponse<null, any, {}>>;
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
        progressBoardCommentsPartialUpdate: ({ commentId }: ProgressBoardCommentsPartialUpdateParams, data: ProgressBoardCommentsPartialUpdatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardCommentsPartialUpdateData, any, {}>>;
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
        progressBoardInterviewsAiList: ({ interviewId }: ProgressBoardInterviewsAiListParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardInterviewsAiListData, any, {}>>;
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
        progressBoardInterviewsDelete: ({ interviewId }: ProgressBoardInterviewsDeleteParams, params?: RequestParams) => Promise<AxiosResponse<null, any, {}>>;
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
        progressBoardInterviewsPartialUpdate: ({ interviewId }: ProgressBoardInterviewsPartialUpdateParams, data: ProgressBoardInterviewsPartialUpdatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardInterviewsPartialUpdateData, any, {}>>;
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
        progressBoardItemsCommentsCreate: ({ itemId }: ProgressBoardItemsCommentsCreateParams, data: ProgressBoardItemsCommentsCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsCommentsCreateData, any, {}>>;
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
        progressBoardItemsCommentsList: ({ itemId }: ProgressBoardItemsCommentsListParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsCommentsListData, any, {}>>;
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
        progressBoardItemsCoverLetterDelete: ({ itemId }: ProgressBoardItemsCoverLetterDeleteParams, params?: RequestParams) => Promise<AxiosResponse<null, any, {}>>;
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
        progressBoardItemsCoverLetterList: ({ itemId }: ProgressBoardItemsCoverLetterListParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsCoverLetterListData, any, {}>>;
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
        progressBoardItemsCoverLetterPdfExportCreate: ({ itemId }: ProgressBoardItemsCoverLetterPdfExportCreateParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsCoverLetterPdfExportCreateData, any, {}>>;
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
        progressBoardItemsCoverLetterTasksCreate: ({ itemId }: ProgressBoardItemsCoverLetterTasksCreateParams, data: ProgressBoardItemsCoverLetterTasksCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsCoverLetterTasksCreateData, any, {}>>;
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
        progressBoardItemsCoverLetterUpdate: ({ itemId }: ProgressBoardItemsCoverLetterUpdateParams, data: ProgressBoardItemsCoverLetterUpdatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsCoverLetterUpdateData, any, {}>>;
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
        progressBoardItemsDelete: ({ itemId }: ProgressBoardItemsDeleteParams, params?: RequestParams) => Promise<AxiosResponse<null, any, {}>>;
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
        progressBoardItemsDetail: ({ itemId }: ProgressBoardItemsDetailParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsDetailData, any, {}>>;
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
        progressBoardItemsInterviewPreparationDelete: ({ itemId }: ProgressBoardItemsInterviewPreparationDeleteParams, params?: RequestParams) => Promise<AxiosResponse<null, any, {}>>;
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
        progressBoardItemsInterviewPreparationList: ({ itemId }: ProgressBoardItemsInterviewPreparationListParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsInterviewPreparationListData, any, {}>>;
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
        progressBoardItemsInterviewPreparationTasksCreate: ({ itemId }: ProgressBoardItemsInterviewPreparationTasksCreateParams, data: ProgressBoardItemsInterviewPreparationTasksCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsInterviewPreparationTasksCreateData, any, {}>>;
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
        progressBoardItemsInterviewsCreate: ({ itemId }: ProgressBoardItemsInterviewsCreateParams, data: ProgressBoardItemsInterviewsCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsInterviewsCreateData, any, {}>>;
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
        progressBoardItemsInterviewsList: ({ itemId }: ProgressBoardItemsInterviewsListParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsInterviewsListData, any, {}>>;
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
        progressBoardItemsMoveCreate: ({ itemId }: ProgressBoardItemsMoveCreateParams, data: ProgressBoardItemsMoveCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsMoveCreateData, any, {}>>;
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
        progressBoardItemsPartialUpdate: ({ itemId }: ProgressBoardItemsPartialUpdateParams, data: ProgressBoardItemsPartialUpdatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsPartialUpdateData, any, {}>>;
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
        progressBoardItemsTailoredResumeDelete: ({ itemId }: ProgressBoardItemsTailoredResumeDeleteParams, params?: RequestParams) => Promise<AxiosResponse<null, any, {}>>;
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
        progressBoardItemsTailoredResumeList: ({ itemId }: ProgressBoardItemsTailoredResumeListParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsTailoredResumeListData, any, {}>>;
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
        progressBoardItemsTailoredResumePdfExportCreate: ({ itemId }: ProgressBoardItemsTailoredResumePdfExportCreateParams, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsTailoredResumePdfExportCreateData, any, {}>>;
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
        progressBoardItemsTailoredResumeTasksCreate: ({ itemId }: ProgressBoardItemsTailoredResumeTasksCreateParams, data: ProgressBoardItemsTailoredResumeTasksCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsTailoredResumeTasksCreateData, any, {}>>;
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
        progressBoardItemsTailoredResumeUpdate: ({ itemId }: ProgressBoardItemsTailoredResumeUpdateParams, data: ProgressBoardItemsTailoredResumeUpdatePayload, params?: RequestParams) => Promise<AxiosResponse<ProgressBoardItemsTailoredResumeUpdateData, any, {}>>;
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
        projectsAiPricingCatalogList: ({ projectId }: ProjectsAiPricingCatalogListParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsAiPricingCatalogListData, any, {}>>;
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
        projectsCandidateProfileList: ({ projectId }: ProjectsCandidateProfileListParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsCandidateProfileListData, any, {}>>;
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
        projectsCandidateProfileUpdate: ({ projectId }: ProjectsCandidateProfileUpdateParams, data: ProjectsCandidateProfileUpdatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsCandidateProfileUpdateData, any, {}>>;
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
        projectsFirstSetupList: ({ projectId }: ProjectsFirstSetupListParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsFirstSetupListData, any, {}>>;
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
        projectsFirstSetupPreferencesPartialUpdate: ({ projectId }: ProjectsFirstSetupPreferencesPartialUpdateParams, data: ProjectsFirstSetupPreferencesPartialUpdatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsFirstSetupPreferencesPartialUpdateData, any, {}>>;
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
        projectsInterviewsList: ({ projectId, ...query }: ProjectsInterviewsListParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsInterviewsListData, any, {}>>;
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
        projectsList: (params?: RequestParams) => Promise<AxiosResponse<ProjectsListData, any, {}>>;
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
        projectsProgressBoardItemsCreate: ({ projectId }: ProjectsProgressBoardItemsCreateParams, data: ProjectsProgressBoardItemsCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsProgressBoardItemsCreateData, any, {}>>;
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
        projectsProgressBoardList: ({ projectId }: ProjectsProgressBoardListParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsProgressBoardListData, any, {}>>;
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
        projectsVacancyEvaluationsCreate: ({ projectId }: ProjectsVacancyEvaluationsCreateParams, data: ProjectsVacancyEvaluationsCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyEvaluationsCreateData, any, {}>>;
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
        projectsVacancyExtractionsCreate: ({ projectId }: ProjectsVacancyExtractionsCreateParams, data: ProjectsVacancyExtractionsCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyExtractionsCreateData, any, {}>>;
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
        projectsVacancyScrapingGenerateSourcesCreate: ({ projectId }: ProjectsVacancyScrapingGenerateSourcesCreateParams, data: ProjectsVacancyScrapingGenerateSourcesCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingGenerateSourcesCreateData, any, {}>>;
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
        projectsVacancyScrapingResultsDetail: ({ projectId, vacancyId }: ProjectsVacancyScrapingResultsDetailParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingResultsDetailData, any, {}>>;
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
        projectsVacancyScrapingResultsEvaluateCreate: ({ projectId }: ProjectsVacancyScrapingResultsEvaluateCreateParams, data: ProjectsVacancyScrapingResultsEvaluateCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingResultsEvaluateCreateData, any, {}>>;
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
        projectsVacancyScrapingResultsImportToBoardCreate: ({ projectId }: ProjectsVacancyScrapingResultsImportToBoardCreateParams, data: ProjectsVacancyScrapingResultsImportToBoardCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingResultsImportToBoardCreateData, any, {}>>;
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
        projectsVacancyScrapingResultsList: ({ projectId, ...query }: ProjectsVacancyScrapingResultsListParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingResultsListData, any, {}>>;
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
        projectsVacancyScrapingResultsMarkReviewedCreate: ({ projectId }: ProjectsVacancyScrapingResultsMarkReviewedCreateParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingResultsMarkReviewedCreateData, any, {}>>;
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
        projectsVacancyScrapingRunAllCreate: ({ projectId }: ProjectsVacancyScrapingRunAllCreateParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingRunAllCreateData, any, {}>>;
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
        projectsVacancyScrapingRunsCreate: ({ projectId }: ProjectsVacancyScrapingRunsCreateParams, data: ProjectsVacancyScrapingRunsCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingRunsCreateData, any, {}>>;
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
        projectsVacancyScrapingRunsList: ({ projectId }: ProjectsVacancyScrapingRunsListParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingRunsListData, any, {}>>;
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
        projectsVacancyScrapingSourcesCreate: ({ projectId }: ProjectsVacancyScrapingSourcesCreateParams, data: ProjectsVacancyScrapingSourcesCreatePayload, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingSourcesCreateData, any, {}>>;
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
        projectsVacancyScrapingSourcesList: ({ projectId }: ProjectsVacancyScrapingSourcesListParams, params?: RequestParams) => Promise<AxiosResponse<ProjectsVacancyScrapingSourcesListData, any, {}>>;
        /**
         * No description
         *
         * @tags public-api
         * @name StatusList
         * @summary External-facing endpoints and stable contracts for third parties. status
         * @request GET:/public-api/status
         * @response `200` `StatusListData` Default Response
         */
        statusList: (params?: RequestParams) => Promise<AxiosResponse<StatusListData, any, {}>>;
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
        tailoredResumesPhotoCompleteCreate: ({ resumeId }: TailoredResumesPhotoCompleteCreateParams, data: TailoredResumesPhotoCompleteCreatePayload, params?: RequestParams) => Promise<AxiosResponse<TailoredResumesPhotoCompleteCreateData, any, {}>>;
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
        tailoredResumesPhotoUploadCreate: ({ resumeId }: TailoredResumesPhotoUploadCreateParams, data: TailoredResumesPhotoUploadCreatePayload, params?: RequestParams) => Promise<AxiosResponse<TailoredResumesPhotoUploadCreateData, any, {}>>;
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
        vacancyEvaluationsAiTasksDetail: ({ taskId }: VacancyEvaluationsAiTasksDetailParams, params?: RequestParams) => Promise<AxiosResponse<VacancyEvaluationsAiTasksDetailData, any, {}>>;
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
        vacancyExtractionsAiTasksDetail: ({ taskId }: VacancyExtractionsAiTasksDetailParams, params?: RequestParams) => Promise<AxiosResponse<VacancyExtractionsAiTasksDetailData, any, {}>>;
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
        vacancyScrapingCatalogList: (params?: RequestParams) => Promise<AxiosResponse<VacancyScrapingCatalogListData, any, {}>>;
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
        vacancyScrapingRunsCancelCreate: ({ runId }: VacancyScrapingRunsCancelCreateParams, params?: RequestParams) => Promise<AxiosResponse<VacancyScrapingRunsCancelCreateData, any, {}>>;
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
        vacancyScrapingRunsRetryCreate: ({ runId }: VacancyScrapingRunsRetryCreateParams, params?: RequestParams) => Promise<AxiosResponse<VacancyScrapingRunsRetryCreateData, any, {}>>;
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
        vacancyScrapingSourcesDelete: ({ sourceId }: VacancyScrapingSourcesDeleteParams, params?: RequestParams) => Promise<AxiosResponse<null, any, {}>>;
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
        vacancyScrapingSourcesPartialUpdate: ({ sourceId }: VacancyScrapingSourcesPartialUpdateParams, data: VacancyScrapingSourcesPartialUpdatePayload, params?: RequestParams) => Promise<AxiosResponse<VacancyScrapingSourcesPartialUpdateData, any, {}>>;
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
        vacancyScrapingSourcesRunCreate: ({ sourceId }: VacancyScrapingSourcesRunCreateParams, params?: RequestParams) => Promise<AxiosResponse<VacancyScrapingSourcesRunCreateData, any, {}>>;
    };
}

declare const DEFAULT_CAREERBOARD_API_BASE_URL = "https://api.careerboard.leverton.dev";
type ClientMethod = (...args: any[]) => Promise<{
    data: unknown;
}>;
type MethodData<TMethod extends ClientMethod> = Awaited<ReturnType<TMethod>>["data"];
type MethodWrapper<TMethod extends ClientMethod> = (...args: Parameters<TMethod>) => Promise<MethodData<TMethod>>;
interface CareerboardClientConfig extends Omit<ApiConfig<string>, "baseURL" | "headers" | "securityWorker" | "secure"> {
    apiKey: string;
    baseUrl?: string;
    headers?: Record<string, string | undefined>;
}
type CareerboardRawApi = PublicApi<string>;
declare function createCareerboardClientInstance(configOrApiKey: CareerboardClientConfig | string): {
    readonly baseUrl: string;
    readonly apiKey: string;
    readonly setApiKey: (nextApiKey: string) => void;
    readonly transport: axios.AxiosInstance;
    readonly httpClient: HttpClient<string>;
    readonly raw: PublicApi<string>;
    readonly downloads: {
        readonly getUrl: MethodWrapper<({ storedFileId }: GetDownloadsParams, params?: RequestParams) => Promise<axios.AxiosResponse<GetDownloadsData, any, {}>>>;
    };
    readonly auth: {
        readonly me: MethodWrapper<(params?: RequestParams) => Promise<axios.AxiosResponse<GetPublicApiData, any, {}>>>;
    };
    readonly status: {
        readonly get: MethodWrapper<(params?: RequestParams) => Promise<axios.AxiosResponse<StatusListData, any, {}>>>;
    };
    readonly tasks: {
        readonly get: MethodWrapper<({ taskId }: AiTasksDetailParams, params?: RequestParams) => Promise<axios.AxiosResponse<AiTasksDetailData, any, {}>>>;
        readonly getVacancyEvaluation: MethodWrapper<({ taskId }: VacancyEvaluationsAiTasksDetailParams, params?: RequestParams) => Promise<axios.AxiosResponse<VacancyEvaluationsAiTasksDetailData, any, {}>>>;
        readonly getVacancyExtraction: MethodWrapper<({ taskId }: VacancyExtractionsAiTasksDetailParams, params?: RequestParams) => Promise<axios.AxiosResponse<VacancyExtractionsAiTasksDetailData, any, {}>>>;
    };
    readonly billing: {
        readonly getPricingCatalog: MethodWrapper<(params?: RequestParams) => Promise<axios.AxiosResponse<BillingAiPricingCatalogListData, any, {}>>>;
        readonly getPublicPricingCatalog: MethodWrapper<(params?: RequestParams) => Promise<axios.AxiosResponse<BillingAiPricingCatalogListData, any, {}>>>;
        readonly getBalance: MethodWrapper<(params?: RequestParams) => Promise<axios.AxiosResponse<BillingMeBalanceListData, any, {}>>>;
        readonly listLedger: MethodWrapper<(query: BillingMeLedgerListParams, params?: RequestParams) => Promise<axios.AxiosResponse<BillingMeLedgerListData, any, {}>>>;
        readonly getTier: MethodWrapper<(params?: RequestParams) => Promise<axios.AxiosResponse<BillingMeTierListData, any, {}>>>;
        readonly listUsageCharges: MethodWrapper<(query: BillingMeUsageChargesListParams, params?: RequestParams) => Promise<axios.AxiosResponse<BillingMeUsageChargesListData, any, {}>>>;
        readonly getDailyUsageSummary: MethodWrapper<(query: BillingMeUsageChargesDailySummaryListParams, params?: RequestParams) => Promise<axios.AxiosResponse<BillingMeUsageChargesDailySummaryListData, any, {}>>>;
    };
    readonly projects: {
        readonly list: MethodWrapper<(params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsListData, any, {}>>>;
        readonly getPricingCatalog: MethodWrapper<({ projectId }: ProjectsAiPricingCatalogListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsAiPricingCatalogListData, any, {}>>>;
        readonly getProgressBoard: MethodWrapper<({ projectId }: ProjectsProgressBoardListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsProgressBoardListData, any, {}>>>;
        readonly createProgressBoardItem: MethodWrapper<({ projectId }: ProjectsProgressBoardItemsCreateParams, data: ProjectsProgressBoardItemsCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsProgressBoardItemsCreateData, any, {}>>>;
        readonly candidateProfile: {
            readonly get: MethodWrapper<({ projectId }: ProjectsCandidateProfileListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsCandidateProfileListData, any, {}>>>;
            readonly update: MethodWrapper<({ projectId }: ProjectsCandidateProfileUpdateParams, data: ProjectsCandidateProfileUpdatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsCandidateProfileUpdateData, any, {}>>>;
        };
        readonly firstSetup: {
            readonly get: MethodWrapper<({ projectId }: ProjectsFirstSetupListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsFirstSetupListData, any, {}>>>;
            readonly updatePreferences: MethodWrapper<({ projectId }: ProjectsFirstSetupPreferencesPartialUpdateParams, data: ProjectsFirstSetupPreferencesPartialUpdatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsFirstSetupPreferencesPartialUpdateData, any, {}>>>;
        };
        readonly interviews: {
            readonly list: MethodWrapper<({ projectId, ...query }: ProjectsInterviewsListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsInterviewsListData, any, {}>>>;
        };
        readonly vacancyEvaluations: {
            readonly create: MethodWrapper<({ projectId }: ProjectsVacancyEvaluationsCreateParams, data: ProjectsVacancyEvaluationsCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyEvaluationsCreateData, any, {}>>>;
        };
        readonly vacancyExtractions: {
            readonly create: MethodWrapper<({ projectId }: ProjectsVacancyExtractionsCreateParams, data: ProjectsVacancyExtractionsCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyExtractionsCreateData, any, {}>>>;
        };
        readonly vacancyScraping: {
            readonly createSource: MethodWrapper<({ projectId }: ProjectsVacancyScrapingSourcesCreateParams, data: ProjectsVacancyScrapingSourcesCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingSourcesCreateData, any, {}>>>;
            readonly listSources: MethodWrapper<({ projectId }: ProjectsVacancyScrapingSourcesListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingSourcesListData, any, {}>>>;
            readonly generateSources: MethodWrapper<({ projectId }: ProjectsVacancyScrapingGenerateSourcesCreateParams, data: ProjectsVacancyScrapingGenerateSourcesCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingGenerateSourcesCreateData, any, {}>>>;
            readonly createRun: MethodWrapper<({ projectId }: ProjectsVacancyScrapingRunsCreateParams, data: ProjectsVacancyScrapingRunsCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingRunsCreateData, any, {}>>>;
            readonly runAll: MethodWrapper<({ projectId }: ProjectsVacancyScrapingRunAllCreateParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingRunAllCreateData, any, {}>>>;
            readonly listRuns: MethodWrapper<({ projectId }: ProjectsVacancyScrapingRunsListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingRunsListData, any, {}>>>;
            readonly listResults: MethodWrapper<({ projectId, ...query }: ProjectsVacancyScrapingResultsListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingResultsListData, any, {}>>>;
            readonly getResult: MethodWrapper<({ projectId, vacancyId }: ProjectsVacancyScrapingResultsDetailParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingResultsDetailData, any, {}>>>;
            readonly evaluateResults: MethodWrapper<({ projectId }: ProjectsVacancyScrapingResultsEvaluateCreateParams, data: ProjectsVacancyScrapingResultsEvaluateCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingResultsEvaluateCreateData, any, {}>>>;
            readonly importResultToBoard: MethodWrapper<({ projectId }: ProjectsVacancyScrapingResultsImportToBoardCreateParams, data: ProjectsVacancyScrapingResultsImportToBoardCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingResultsImportToBoardCreateData, any, {}>>>;
            readonly markResultsReviewed: MethodWrapper<({ projectId }: ProjectsVacancyScrapingResultsMarkReviewedCreateParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProjectsVacancyScrapingResultsMarkReviewedCreateData, any, {}>>>;
        };
    };
    readonly progressBoard: {
        readonly attachments: {
            readonly completeUpload: MethodWrapper<({ attachmentId }: ProgressBoardAttachmentsCompleteCreateParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardAttachmentsCompleteCreateData, any, {}>>>;
        };
        readonly interviews: {
            readonly getAi: MethodWrapper<({ interviewId }: ProgressBoardInterviewsAiListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardInterviewsAiListData, any, {}>>>;
            readonly update: MethodWrapper<({ interviewId }: ProgressBoardInterviewsPartialUpdateParams, data: ProgressBoardInterviewsPartialUpdatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardInterviewsPartialUpdateData, any, {}>>>;
            readonly delete: MethodWrapper<({ interviewId }: ProgressBoardInterviewsDeleteParams, params?: RequestParams) => Promise<axios.AxiosResponse<null, any, {}>>>;
        };
        readonly comments: {
            readonly createAttachment: MethodWrapper<({ commentId }: ProgressBoardCommentsAttachmentsCreateParams, data: ProgressBoardCommentsAttachmentsCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardCommentsAttachmentsCreateData, any, {}>>>;
            readonly update: MethodWrapper<({ commentId }: ProgressBoardCommentsPartialUpdateParams, data: ProgressBoardCommentsPartialUpdatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardCommentsPartialUpdateData, any, {}>>>;
            readonly delete: MethodWrapper<({ commentId }: ProgressBoardCommentsDeleteParams, params?: RequestParams) => Promise<axios.AxiosResponse<null, any, {}>>>;
        };
        readonly items: {
            readonly get: MethodWrapper<({ itemId }: ProgressBoardItemsDetailParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsDetailData, any, {}>>>;
            readonly update: MethodWrapper<({ itemId }: ProgressBoardItemsPartialUpdateParams, data: ProgressBoardItemsPartialUpdatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsPartialUpdateData, any, {}>>>;
            readonly delete: MethodWrapper<({ itemId }: ProgressBoardItemsDeleteParams, params?: RequestParams) => Promise<axios.AxiosResponse<null, any, {}>>>;
            readonly move: MethodWrapper<({ itemId }: ProgressBoardItemsMoveCreateParams, data: ProgressBoardItemsMoveCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsMoveCreateData, any, {}>>>;
            readonly createComment: MethodWrapper<({ itemId }: ProgressBoardItemsCommentsCreateParams, data: ProgressBoardItemsCommentsCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsCommentsCreateData, any, {}>>>;
            readonly createInterview: MethodWrapper<({ itemId }: ProgressBoardItemsInterviewsCreateParams, data: ProgressBoardItemsInterviewsCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsInterviewsCreateData, any, {}>>>;
            readonly comments: {
                readonly create: MethodWrapper<({ itemId }: ProgressBoardItemsCommentsCreateParams, data: ProgressBoardItemsCommentsCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsCommentsCreateData, any, {}>>>;
                readonly list: MethodWrapper<({ itemId }: ProgressBoardItemsCommentsListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsCommentsListData, any, {}>>>;
            };
            readonly interviews: {
                readonly create: MethodWrapper<({ itemId }: ProgressBoardItemsInterviewsCreateParams, data: ProgressBoardItemsInterviewsCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsInterviewsCreateData, any, {}>>>;
                readonly list: MethodWrapper<({ itemId }: ProgressBoardItemsInterviewsListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsInterviewsListData, any, {}>>>;
            };
            readonly tailoredResume: {
                readonly get: MethodWrapper<({ itemId }: ProgressBoardItemsTailoredResumeListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsTailoredResumeListData, any, {}>>>;
                readonly update: MethodWrapper<({ itemId }: ProgressBoardItemsTailoredResumeUpdateParams, data: ProgressBoardItemsTailoredResumeUpdatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsTailoredResumeUpdateData, any, {}>>>;
                readonly delete: MethodWrapper<({ itemId }: ProgressBoardItemsTailoredResumeDeleteParams, params?: RequestParams) => Promise<axios.AxiosResponse<null, any, {}>>>;
                readonly generate: MethodWrapper<({ itemId }: ProgressBoardItemsTailoredResumeTasksCreateParams, data: ProgressBoardItemsTailoredResumeTasksCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsTailoredResumeTasksCreateData, any, {}>>>;
                readonly exportPdf: MethodWrapper<({ itemId }: ProgressBoardItemsTailoredResumePdfExportCreateParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsTailoredResumePdfExportCreateData, any, {}>>>;
            };
            readonly coverLetter: {
                readonly get: MethodWrapper<({ itemId }: ProgressBoardItemsCoverLetterListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsCoverLetterListData, any, {}>>>;
                readonly update: MethodWrapper<({ itemId }: ProgressBoardItemsCoverLetterUpdateParams, data: ProgressBoardItemsCoverLetterUpdatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsCoverLetterUpdateData, any, {}>>>;
                readonly delete: MethodWrapper<({ itemId }: ProgressBoardItemsCoverLetterDeleteParams, params?: RequestParams) => Promise<axios.AxiosResponse<null, any, {}>>>;
                readonly generate: MethodWrapper<({ itemId }: ProgressBoardItemsCoverLetterTasksCreateParams, data: ProgressBoardItemsCoverLetterTasksCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsCoverLetterTasksCreateData, any, {}>>>;
                readonly exportPdf: MethodWrapper<({ itemId }: ProgressBoardItemsCoverLetterPdfExportCreateParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsCoverLetterPdfExportCreateData, any, {}>>>;
            };
            readonly interviewPreparation: {
                readonly get: MethodWrapper<({ itemId }: ProgressBoardItemsInterviewPreparationListParams, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsInterviewPreparationListData, any, {}>>>;
                readonly delete: MethodWrapper<({ itemId }: ProgressBoardItemsInterviewPreparationDeleteParams, params?: RequestParams) => Promise<axios.AxiosResponse<null, any, {}>>>;
                readonly generate: MethodWrapper<({ itemId }: ProgressBoardItemsInterviewPreparationTasksCreateParams, data: ProgressBoardItemsInterviewPreparationTasksCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<ProgressBoardItemsInterviewPreparationTasksCreateData, any, {}>>>;
            };
        };
    };
    readonly tailoredResumes: {
        readonly photo: {
            readonly createUpload: MethodWrapper<({ resumeId }: TailoredResumesPhotoUploadCreateParams, data: TailoredResumesPhotoUploadCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<TailoredResumesPhotoUploadCreateData, any, {}>>>;
            readonly completeUpload: MethodWrapper<({ resumeId }: TailoredResumesPhotoCompleteCreateParams, data: TailoredResumesPhotoCompleteCreatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<TailoredResumesPhotoCompleteCreateData, any, {}>>>;
        };
    };
    readonly vacancyScraping: {
        readonly getCatalog: MethodWrapper<(params?: RequestParams) => Promise<axios.AxiosResponse<VacancyScrapingCatalogListData, any, {}>>>;
        readonly cancelRun: MethodWrapper<({ runId }: VacancyScrapingRunsCancelCreateParams, params?: RequestParams) => Promise<axios.AxiosResponse<VacancyScrapingRunsCancelCreateData, any, {}>>>;
        readonly retryRun: MethodWrapper<({ runId }: VacancyScrapingRunsRetryCreateParams, params?: RequestParams) => Promise<axios.AxiosResponse<VacancyScrapingRunsRetryCreateData, any, {}>>>;
        readonly deleteSource: MethodWrapper<({ sourceId }: VacancyScrapingSourcesDeleteParams, params?: RequestParams) => Promise<axios.AxiosResponse<null, any, {}>>>;
        readonly updateSource: MethodWrapper<({ sourceId }: VacancyScrapingSourcesPartialUpdateParams, data: VacancyScrapingSourcesPartialUpdatePayload, params?: RequestParams) => Promise<axios.AxiosResponse<VacancyScrapingSourcesPartialUpdateData, any, {}>>>;
        readonly runSource: MethodWrapper<({ sourceId }: VacancyScrapingSourcesRunCreateParams, params?: RequestParams) => Promise<axios.AxiosResponse<VacancyScrapingSourcesRunCreateData, any, {}>>>;
    };
};
type CareerboardClient = ReturnType<typeof createCareerboardClientInstance>;
declare function createCareerboardClient(configOrApiKey: CareerboardClientConfig | string): CareerboardClient;
declare const createClient: typeof createCareerboardClient;

export { type AiTasksDetailData, type AiTasksDetailError, type AiTasksDetailParams, type ApiConfig, type BillingAiPricingCatalogListData, type BillingAiPricingCatalogListError, type BillingMeBalanceListData, type BillingMeBalanceListError, type BillingMeLedgerListData, type BillingMeLedgerListError, type BillingMeLedgerListParams, type BillingMeTierListData, type BillingMeTierListError, type BillingMeUsageChargesDailySummaryListData, type BillingMeUsageChargesDailySummaryListError, type BillingMeUsageChargesDailySummaryListParams, type BillingMeUsageChargesListData, type BillingMeUsageChargesListError, type BillingMeUsageChargesListParams, type CareerboardClient, type CareerboardClientConfig, type CareerboardRawApi, ContentType, DEFAULT_CAREERBOARD_API_BASE_URL, Downloads, type DownloadsDetailError, type DownloadsDetailParams, type FullRequestParams, type GetDownloadsData, type GetDownloadsError, type GetDownloadsParams, type GetPublicApiData, type GetPublicApiError, HttpClient, type ProgressBoardAttachmentsCompleteCreateData, type ProgressBoardAttachmentsCompleteCreateError, type ProgressBoardAttachmentsCompleteCreateParams, type ProgressBoardCommentsAttachmentsCreateData, type ProgressBoardCommentsAttachmentsCreateError, type ProgressBoardCommentsAttachmentsCreateParams, type ProgressBoardCommentsAttachmentsCreatePayload, type ProgressBoardCommentsDeleteData, type ProgressBoardCommentsDeleteError, type ProgressBoardCommentsDeleteParams, type ProgressBoardCommentsPartialUpdateData, type ProgressBoardCommentsPartialUpdateError, type ProgressBoardCommentsPartialUpdateParams, type ProgressBoardCommentsPartialUpdatePayload, type ProgressBoardInterviewsAiListData, type ProgressBoardInterviewsAiListError, type ProgressBoardInterviewsAiListParams, type ProgressBoardInterviewsDeleteData, type ProgressBoardInterviewsDeleteError, type ProgressBoardInterviewsDeleteParams, type ProgressBoardInterviewsPartialUpdateData, type ProgressBoardInterviewsPartialUpdateError, type ProgressBoardInterviewsPartialUpdateParams, type ProgressBoardInterviewsPartialUpdatePayload, type ProgressBoardItemsCommentsCreateData, type ProgressBoardItemsCommentsCreateError, type ProgressBoardItemsCommentsCreateParams, type ProgressBoardItemsCommentsCreatePayload, type ProgressBoardItemsCommentsListData, type ProgressBoardItemsCommentsListError, type ProgressBoardItemsCommentsListParams, type ProgressBoardItemsCoverLetterDeleteData, type ProgressBoardItemsCoverLetterDeleteError, type ProgressBoardItemsCoverLetterDeleteParams, type ProgressBoardItemsCoverLetterListData, type ProgressBoardItemsCoverLetterListError, type ProgressBoardItemsCoverLetterListParams, type ProgressBoardItemsCoverLetterPdfExportCreateData, type ProgressBoardItemsCoverLetterPdfExportCreateError, type ProgressBoardItemsCoverLetterPdfExportCreateParams, type ProgressBoardItemsCoverLetterTasksCreateData, type ProgressBoardItemsCoverLetterTasksCreateError, type ProgressBoardItemsCoverLetterTasksCreateParams, type ProgressBoardItemsCoverLetterTasksCreatePayload, type ProgressBoardItemsCoverLetterUpdateData, type ProgressBoardItemsCoverLetterUpdateError, type ProgressBoardItemsCoverLetterUpdateParams, type ProgressBoardItemsCoverLetterUpdatePayload, type ProgressBoardItemsDeleteData, type ProgressBoardItemsDeleteError, type ProgressBoardItemsDeleteParams, type ProgressBoardItemsDetailData, type ProgressBoardItemsDetailError, type ProgressBoardItemsDetailParams, type ProgressBoardItemsInterviewPreparationDeleteData, type ProgressBoardItemsInterviewPreparationDeleteError, type ProgressBoardItemsInterviewPreparationDeleteParams, type ProgressBoardItemsInterviewPreparationListData, type ProgressBoardItemsInterviewPreparationListError, type ProgressBoardItemsInterviewPreparationListParams, type ProgressBoardItemsInterviewPreparationTasksCreateData, type ProgressBoardItemsInterviewPreparationTasksCreateError, type ProgressBoardItemsInterviewPreparationTasksCreateParams, type ProgressBoardItemsInterviewPreparationTasksCreatePayload, type ProgressBoardItemsInterviewsCreateData, type ProgressBoardItemsInterviewsCreateError, type ProgressBoardItemsInterviewsCreateParams, type ProgressBoardItemsInterviewsCreatePayload, type ProgressBoardItemsInterviewsListData, type ProgressBoardItemsInterviewsListError, type ProgressBoardItemsInterviewsListParams, type ProgressBoardItemsMoveCreateData, type ProgressBoardItemsMoveCreateError, type ProgressBoardItemsMoveCreateParams, type ProgressBoardItemsMoveCreatePayload, type ProgressBoardItemsPartialUpdateData, type ProgressBoardItemsPartialUpdateError, type ProgressBoardItemsPartialUpdateParams, type ProgressBoardItemsPartialUpdatePayload, type ProgressBoardItemsTailoredResumeDeleteData, type ProgressBoardItemsTailoredResumeDeleteError, type ProgressBoardItemsTailoredResumeDeleteParams, type ProgressBoardItemsTailoredResumeListData, type ProgressBoardItemsTailoredResumeListError, type ProgressBoardItemsTailoredResumeListParams, type ProgressBoardItemsTailoredResumePdfExportCreateData, type ProgressBoardItemsTailoredResumePdfExportCreateError, type ProgressBoardItemsTailoredResumePdfExportCreateParams, type ProgressBoardItemsTailoredResumeTasksCreateData, type ProgressBoardItemsTailoredResumeTasksCreateError, type ProgressBoardItemsTailoredResumeTasksCreateParams, type ProgressBoardItemsTailoredResumeTasksCreatePayload, type ProgressBoardItemsTailoredResumeUpdateData, type ProgressBoardItemsTailoredResumeUpdateError, type ProgressBoardItemsTailoredResumeUpdateParams, type ProgressBoardItemsTailoredResumeUpdatePayload, type ProjectsAiPricingCatalogListData, type ProjectsAiPricingCatalogListError, type ProjectsAiPricingCatalogListParams, type ProjectsCandidateProfileListData, type ProjectsCandidateProfileListError, type ProjectsCandidateProfileListParams, type ProjectsCandidateProfileUpdateData, type ProjectsCandidateProfileUpdateError, type ProjectsCandidateProfileUpdateParams, type ProjectsCandidateProfileUpdatePayload, type ProjectsFirstSetupListData, type ProjectsFirstSetupListError, type ProjectsFirstSetupListParams, type ProjectsFirstSetupPreferencesPartialUpdateData, type ProjectsFirstSetupPreferencesPartialUpdateError, type ProjectsFirstSetupPreferencesPartialUpdateParams, type ProjectsFirstSetupPreferencesPartialUpdatePayload, type ProjectsInterviewsListData, type ProjectsInterviewsListError, type ProjectsInterviewsListParams, type ProjectsListData, type ProjectsListError, type ProjectsProgressBoardItemsCreateData, type ProjectsProgressBoardItemsCreateError, type ProjectsProgressBoardItemsCreateParams, type ProjectsProgressBoardItemsCreatePayload, type ProjectsProgressBoardListData, type ProjectsProgressBoardListError, type ProjectsProgressBoardListParams, type ProjectsVacancyEvaluationsCreateData, type ProjectsVacancyEvaluationsCreateError, type ProjectsVacancyEvaluationsCreateParams, type ProjectsVacancyEvaluationsCreatePayload, type ProjectsVacancyExtractionsCreateData, type ProjectsVacancyExtractionsCreateError, type ProjectsVacancyExtractionsCreateParams, type ProjectsVacancyExtractionsCreatePayload, type ProjectsVacancyScrapingGenerateSourcesCreateData, type ProjectsVacancyScrapingGenerateSourcesCreateError, type ProjectsVacancyScrapingGenerateSourcesCreateParams, type ProjectsVacancyScrapingGenerateSourcesCreatePayload, type ProjectsVacancyScrapingResultsDetailData, type ProjectsVacancyScrapingResultsDetailError, type ProjectsVacancyScrapingResultsDetailParams, type ProjectsVacancyScrapingResultsEvaluateCreateData, type ProjectsVacancyScrapingResultsEvaluateCreateError, type ProjectsVacancyScrapingResultsEvaluateCreateParams, type ProjectsVacancyScrapingResultsEvaluateCreatePayload, type ProjectsVacancyScrapingResultsImportToBoardCreateData, type ProjectsVacancyScrapingResultsImportToBoardCreateError, type ProjectsVacancyScrapingResultsImportToBoardCreateParams, type ProjectsVacancyScrapingResultsImportToBoardCreatePayload, type ProjectsVacancyScrapingResultsListData, type ProjectsVacancyScrapingResultsListError, type ProjectsVacancyScrapingResultsListParams, type ProjectsVacancyScrapingResultsMarkReviewedCreateData, type ProjectsVacancyScrapingResultsMarkReviewedCreateError, type ProjectsVacancyScrapingResultsMarkReviewedCreateParams, type ProjectsVacancyScrapingRunAllCreateData, type ProjectsVacancyScrapingRunAllCreateError, type ProjectsVacancyScrapingRunAllCreateParams, type ProjectsVacancyScrapingRunsCreateData, type ProjectsVacancyScrapingRunsCreateError, type ProjectsVacancyScrapingRunsCreateParams, type ProjectsVacancyScrapingRunsCreatePayload, type ProjectsVacancyScrapingRunsListData, type ProjectsVacancyScrapingRunsListError, type ProjectsVacancyScrapingRunsListParams, type ProjectsVacancyScrapingSourcesCreateData, type ProjectsVacancyScrapingSourcesCreateError, type ProjectsVacancyScrapingSourcesCreateParams, type ProjectsVacancyScrapingSourcesCreatePayload, type ProjectsVacancyScrapingSourcesListData, type ProjectsVacancyScrapingSourcesListError, type ProjectsVacancyScrapingSourcesListParams, PublicApi, type QueryParamsType, type RequestParams, type StatusListData, Stored, type StoredDetailError, type StoredDetailParams, type TailoredResumesPhotoCompleteCreateData, type TailoredResumesPhotoCompleteCreateError, type TailoredResumesPhotoCompleteCreateParams, type TailoredResumesPhotoCompleteCreatePayload, type TailoredResumesPhotoUploadCreateData, type TailoredResumesPhotoUploadCreateError, type TailoredResumesPhotoUploadCreateParams, type TailoredResumesPhotoUploadCreatePayload, type VacancyEvaluationsAiTasksDetailData, type VacancyEvaluationsAiTasksDetailError, type VacancyEvaluationsAiTasksDetailParams, type VacancyExtractionsAiTasksDetailData, type VacancyExtractionsAiTasksDetailError, type VacancyExtractionsAiTasksDetailParams, type VacancyScrapingCatalogListData, type VacancyScrapingCatalogListError, type VacancyScrapingRunsCancelCreateData, type VacancyScrapingRunsCancelCreateError, type VacancyScrapingRunsCancelCreateParams, type VacancyScrapingRunsRetryCreateData, type VacancyScrapingRunsRetryCreateError, type VacancyScrapingRunsRetryCreateParams, type VacancyScrapingSourcesDeleteData, type VacancyScrapingSourcesDeleteError, type VacancyScrapingSourcesDeleteParams, type VacancyScrapingSourcesPartialUpdateData, type VacancyScrapingSourcesPartialUpdateError, type VacancyScrapingSourcesPartialUpdateParams, type VacancyScrapingSourcesPartialUpdatePayload, type VacancyScrapingSourcesRunCreateData, type VacancyScrapingSourcesRunCreateError, type VacancyScrapingSourcesRunCreateParams, createCareerboardClient, createClient };
