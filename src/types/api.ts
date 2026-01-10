// API 응답 표준 형식
export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    message?: string;
}

// API 에러 응답
export interface ApiError {
    message: string;
    code?: string;
    status?: number;
}

// 소셜 로그인 제공자 (카카오, 네이버만 사용)
export type SocialProvider = 'kakao' | 'naver';