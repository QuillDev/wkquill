import {WKPaginatedResponse, WKResponse} from "./WKResponse";

export interface WKSRSResponse extends WKResponse<WKSRS>{}
export interface WKAllSRSResponse extends WKPaginatedResponse<WKSRS[]>{}

export interface WKSRS {
    burning_stage_position: number;
    created_at: Date;
    description: string;
    name: string;
    passing_stage_position: number;
    stages: WKSRSStage[];
    starting_stage_position: number;
    unlocking_stage_position: number;
}

export interface WKSRSStage {
    interval?: number;
    interval_unit?: string;
    position: number;
}