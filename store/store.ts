// src/store.ts

import { configureStore } from '@reduxjs/toolkit';
import Userinfos from '../features/usersinfos/Userinfos';

const store = configureStore({
    reducer: {
        UsersInformation: Userinfos,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
