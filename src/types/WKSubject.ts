import {WKPaginatedResponse, WKResponse} from "./WKResponse";

export type WKSubjectResponse = WKResponse<WKSubject>;
export type WKAllSubjectsResponse = WKPaginatedResponse<WKSubject[]>

export type WKSubject = {
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

export type WKMeaning = {
    meaning: string;
    primary: boolean;
    accepted_answer: boolean;
}

export type WKAuxiliaryMeaning = {
    meaning: string;
    type: string;
}