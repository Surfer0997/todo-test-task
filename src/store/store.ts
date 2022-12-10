import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer from './todoSlice';

const store = configureStore({
    reducer: {
        todo: todoSliceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;