import { createListenerMiddleware } from "@reduxjs/toolkit"
import { authApi } from "@/5_entities/auth/api";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: (action, listenerApi) => {
        listenerApi.unsubscribe();

        if (action.payload.token) {
            localStorage.setItem('token', action.payload.token);
        }
    }
})