export interface ApiResponse<T=any> {
    success: boolean;
    data: T;
    message?: string;
}

export interface ApiError {
    message: string;
    code?: string;
    status?: number;
}

export type SocialProvider = 'kakao' | 'naver' | 'local';