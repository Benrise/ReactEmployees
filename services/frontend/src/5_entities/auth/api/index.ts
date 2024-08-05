import { api } from "@/1_app/api";
import { type AuthUserDto, type AuthResponseDto } from "../model";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponseDto, AuthUserDto>({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation<AuthResponseDto, AuthUserDto>({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data
            })
        }),
        current: builder.query<AuthResponseDto, void>({
            query: () => ({
                url: '/auth/current',
                method: 'GET',
            }),
        })
    }),
})

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authApi;

export const { login, register, current } = authApi.endpoints