export interface WKUser {
    current_vacation_started_at?: Date;
    level: number;
    preferences: WKUserPreferences;
    profile_url: string;
    started_at: Date;
    subscription: WKSubscription;
    username: string;
}

export interface WKUserPreferences {
    default_voice_actor_id: number;
    lessons_autoplay_audio: boolean;
    lessons_batch_size: number;
    lessons_presentation_order: string;
    reviews_autoplay_audio: boolean;
    reviews_display_srs_indicator: boolean;
}

export interface WKSubscription {
    active: boolean;
    max_level_granted: number;
    period_ends_in?: Date;
    type: string;
}