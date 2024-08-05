import { UserDto } from "@/5_entities/user/model";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/5_entities/auth/api";
import { RootState } from "@/1_app/store";

export interface IInitialState {
    user: UserDto & { token: string } | null;
    isAuthenticated: boolean;
}

const initialState: IInitialState = {
    user: null,
    isAuthenticated: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: (builder) => {
        builder
        .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        })
    }
})

export const { logout } = slice.actions;

export const { reducer } = slice;

export const selectIsAuthenticated = (state: RootState) => state.authReducer.isAuthenticated;

export const selectUser = (state: RootState) => state.authReducer.user;
