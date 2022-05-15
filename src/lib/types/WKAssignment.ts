import {WKPaginatedResponse, WKResponse} from "./WKResponse";

export type AssignmentResposne = WKResponse<WKAssignment>
export type WKAllAssignmentsResponse = WKPaginatedResponse<WKAssignment[]>;

export type WKAssignment = {
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
