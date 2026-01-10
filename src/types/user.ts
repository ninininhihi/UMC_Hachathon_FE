import type { SocialProvider } from './api';

export interface User {
    id: string;
    email: string;
    name: string;
    profileImage?: string;
    provider?: SocialProvider;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
    expiresAt?: number;
}