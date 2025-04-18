import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authHeader = (value) => {
    axios.defaults.headers.common.Authorization = value;
}

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
try {
    const res = await axios.post("/users/signup", credentials)
    authHeader(`Bearer ${res.data.token}`)
    return res.data;

} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}
})

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        const res = await axios.post("/users/login", credentials)

        authHeader(`Bearer ${res.data.token}`)

        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        const res = await axios.post("/users/logout")
        authHeader("")
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    try {
        const reduxState = thunkAPI.getState()
        authHeader(`Bearer ${reduxState.auth.token}`)
        const res = await axios.get("/users/current")
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}, {
    condition: (_, thunkAPI) => {
        const reduxState = thunkAPI.getState()
        return reduxState.auth.token !== null;
}})