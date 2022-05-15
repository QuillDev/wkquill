export type WKResponse<T> = {
    object: string;
    url: string;
    data_updated_at?: Date;
    data: T
}

export type WKPaginatedResponse<T> = WKResponse<T> & {
    pages: WKPages
}

export type WKPages = {
    next_url?: string;
    previous_url?: string;
    per_page: number;
}