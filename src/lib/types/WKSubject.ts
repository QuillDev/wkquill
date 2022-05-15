import {WKPaginatedResponse, WKResponse} from "./WKResponse";

export interface WKSubjectResponse extends WKResponse<WKSubject>{};
export interface WKAllSubjectsResponse extends WKPaginatedResponse<WKSubject[]>{}

export interface WKSubject {
    auxiliary_meanings: WKAuxiliaryMeaning[];
    characters: string;
    created_at: Date;
    document_url: string;
    hidden_at?: Date;
    lesson_position: number;
    level: number;
    meaning_mnemonic: string;
    meanings: WKMeaning[];
    slug: string;
    spaced_repetition_system_id: number;
}

export interface WKMeaning {
    meaning: string;
    primary: boolean;
    accepted_answer: boolean;
}

export interface WKAuxiliaryMeaning {
    meaning: string;
    type: string;
}