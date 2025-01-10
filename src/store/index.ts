import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userCrudReducer from './userCrudSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        userCrud: userCrudReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
