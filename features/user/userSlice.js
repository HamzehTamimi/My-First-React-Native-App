import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import instance from "../../instance";

const initialState = {
    loading: false,
    users: [],
    error: '',
    user: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await instance.get('/users');
    return response.data;
})

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const response = await instance.get(`/users/${id}`);
    return response.data;
})

export const addUser = createAsyncThunk('users/addUser', async (data) => {
    const response = await instance.post('/users', data);
    return response.data;
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    instance.delete(`/users/${id}`);
    return { id }; 
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
            const newId = state.users.length + 1;
            const newUser = { ...action.payload, id: newId }; 
            state.users.push(newUser);
        })
        .addCase(fetchUserById.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id);
        })
    },
})

export default userSlice.reducer