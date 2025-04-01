
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated'
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        cheking: (state) =>{
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
    }
});

export const { cheking, login, logout } = authSlice.actions;