import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, AuthTokens } from '../types/user';

interface AuthState {
    user: User | null;
    tokens: AuthTokens | null;
    isAuthenticated: boolean;
    setAuth: (user: User, tokens: AuthTokens) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            tokens: null,
            isAuthenticated: false,

            setAuth: (user, tokens) => {
                set({
                    user,
                    tokens,
                    isAuthenticated: true,
                });
                // accessToken을 별도로 저장 (인터셉터에서 사용)
                localStorage.setItem('accessToken', tokens.accessToken);
                if (tokens.refreshToken) {
                    localStorage.setItem('refreshToken', tokens.refreshToken);
                }
            },

            logout: () => {
                set({
                    user: null,
                    tokens: null,
                    isAuthenticated: false,
                });
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);

