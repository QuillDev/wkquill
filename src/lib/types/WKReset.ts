import {WKPaginatedResponse, WKResponse} from "./WKResponse";

export interface WKAllResetsResponse extends WKResponse<WKReset[]>{}
export interface WKResetResponse extends WKPaginatedResponse<WKReset>{}

export interface WKReset {
    confirmed_at?: Date;
    created_at?: Date;
    original_level: number;
    target_level: number;
}