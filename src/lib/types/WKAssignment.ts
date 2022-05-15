import {WKPaginatedResponse, WKResponse} from "./WKResponse";

export interface AssignmentResposne extends WKResponse<WKAssignment>{}
export interface WKAllAssignmentsResponse extends WKPaginatedResponse<WKAssignment[]>{}

export interface WKAssignment {
    available_at?: Date;
    burned_at?: Date;
    created_at?: Date;
    hidden: boolean;
    passed_at?: Date;
    resurrected_at?: Date;
    srs_stage: number;
    started_at?: Date;
    subject_id: string;
    subject_type: string;
    unlocked_at?: Date;
}
