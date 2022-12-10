import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer, { localStorageMiddleware } from './todoSlice';

const store = configureStore({
    reducer: {
        todo: todoSliceReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;