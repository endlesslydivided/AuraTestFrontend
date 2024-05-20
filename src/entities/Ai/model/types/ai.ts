export interface Ai {
    id?: string;
    content?: {
        text: string;
    }[];
    createdAt: string;
    question: string;
}

export interface AiSchema {
    aiResponses: Ai[];
    isLoading: boolean;
    error?: unknown;
}
