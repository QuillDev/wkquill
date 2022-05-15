import {WKPaginatedResponse, WKResponse} from "./WKResponse";

export type WKAllResetsResponse = WKResponse<WKReset[]>
export type WKResetResponse = WKPaginatedResponse<WKReset>;

export type WKReset = {
    confirmed_at?: Date;
    created_at?: Date;
    original_level: number;
    target_level: number;
}