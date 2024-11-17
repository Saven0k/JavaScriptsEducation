import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from './data/task';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasksData);
        }, 1000); // Имитация задержки в 1 секунду
    });
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'request';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'success';
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default tasksSlice.reducer;