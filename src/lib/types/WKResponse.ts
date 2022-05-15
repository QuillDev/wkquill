export interface WKResponse<T> {
    object: string;
    url: string;
    data_updated_at?: Date;
    data: T
}

export interface WKPaginatedResponse<T> extends WKResponse<T> {
    pages: WKPages
}

export interface WKPages {
    next_url?: string;
    previous_url?: string;
    per_page: number;
}