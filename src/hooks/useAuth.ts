import { useCallback } from 'react';
import { useAuthStore } from '../store/authStore';
import * as authApi from '../api/auth';
import type { SocialProvider } from '../types/api';

export const useAuth = () => {
    const { user, tokens, isAuthenticated, setAuth, logout: setLogout } = useAuthStore();

    const startSocialLogin = useCallback((provider: SocialProvider) => {
        const url = provider === 'kakao' ? authApi.getKakaoLoginUrl() : authApi.getNaverLoginUrl();
        window.location.href = url;
    }, []);

    const handleSocialCallback = useCallback(
        async (provider: SocialProvider, code: string, state?: string) => {
            try {
                if (provider === 'naver') {
                    const savedState = sessionStorage.getItem('naver_state');
                    if (state && state !== savedState) {
                        throw new Error('Invalid state parameter');
                    }
                    sessionStorage.removeItem('naver_state');
                }

                const { user, tokens } = await authApi.handleSocialCallback(provider, code, state);
                setAuth(user, tokens);
                return { success: true, user };
            } catch (error) {
                console.error('Social login callback error:', error);
                return {
                    success: false,
                    error: error instanceof Error ? error.message : '로그인에 실패했습니다.',
                };
            }
        },
        [setAuth]
    );

    const logout = useCallback(async () => {
        try {
            await authApi.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setLogout();
            window.location.href = '/login';
        }
    }, [setLogout]);

    const fetchCurrentUser = useCallback(async () => {
        try {
            const user = await authApi.getCurrentUser();
            if (tokens) {
                setAuth(user, tokens);
            }
            return { success: true, user };
        } catch (error) {
            console.error('Fetch user error:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : '사용자 정보를 가져오는데 실패했습니다.',
            };
        }
    }, [tokens, setAuth]);

    return {
        user,
        tokens,
        isAuthenticated,
        startSocialLogin,
        handleSocialCallback,
        logout,
        fetchCurrentUser,
    };
};

