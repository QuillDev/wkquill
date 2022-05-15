import {WKPaginatedResponse, WKResponse} from "./WKResponse";

export type WKSRSResponse = WKResponse<WKSRS>;
export type WKAllSRSResponse =WKPaginatedResponse<WKSRS[]>;

export type WKSRS = {
    burning_stage_position: number;
    created_at: Date;
    description: string;
    name: string;
    passing_stage_position: number;
    stages: WKSRSStage[];
    starting_stage_position: number;
    unlocking_stage_position: number;
}

export type WKSRSStage = {
    interval?: number;
    interval_unit?: string;
    position: number;
}