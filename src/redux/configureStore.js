import {configureStore} from '@reduxjs/toolkit';
import todolistSlice from './todolistSlice';

const store = configureStore({
    reducer: {
        todolist: todolistSlice,
    }
});

export default store;