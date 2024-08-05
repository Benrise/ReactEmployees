import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { reducer as authReducer } from '@/4_features/login'
import { api } from "../api";
import { listenerMiddleware } from "@/4_features/login";


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;