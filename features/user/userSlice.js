import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import instance from "../../instance";

const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await instance.get('/users');
    return response.data;
})

export const addUser = createAsyncThunk('users/addUser', async (data) => {
    const response = await instance.post('/users', data);
    return response.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        })
    },
})

export default userSlice.reducer