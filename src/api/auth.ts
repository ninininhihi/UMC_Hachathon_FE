import client from './client';
import type { ApiResponse } from '../types/api';
import type { User, AuthTokens } from '../types/user';
import type { SocialProvider } from '../types/api';

export interface SocialLoginResponse {
    user: User;
    tokens: AuthTokens;
}

export const getKakaoLoginUrl = (): string => {
    const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
    if (!clientId || clientId.trim() === '') {
        throw new Error('VITE_KAKAO_CLIENT_ID가 .env 파일에 설정되지 않았습니다. 프로젝트 루트에 .env 파일을 생성하고 VITE_KAKAO_CLIENT_ID를 추가해주세요.');
    }
    const redirectUri = encodeURIComponent(import.meta.env.VITE_REDIRECT_URI || `${window.location.origin}/oauth/callback`);
    return `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&state=kakao`;
};

export const getNaverLoginUrl = (): string => {
    const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
    if (!clientId || clientId.trim() === '') {
        throw new Error('VITE_NAVER_CLIENT_ID가 .env 파일에 설정되지 않았습니다. 프로젝트 루트에 .env 파일을 생성하고 VITE_NAVER_CLIENT_ID를 추가해주세요.');
    }
    const redirectUri = encodeURIComponent(import.meta.env.VITE_REDIRECT_URI || `${window.location.origin}/oauth/callback`);
    const state = Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('naver_state', state);
    return `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
};

export const handleSocialCallback = async (
    provider: SocialProvider,
    code: string,
    state?: string
): Promise<SocialLoginResponse> => {
    const response = await client.post<ApiResponse<SocialLoginResponse>>('/auth/social/callback', {
        provider,
        code,
        state,
    });
    return response.data.data;
};

export const logout = async (): Promise<void> => {
    await client.post('/auth/logout');
};

export const getCurrentUser = async (): Promise<User> => {
    const response = await client.get<ApiResponse<User>>('/auth/me');
    return response.data.data;
};

