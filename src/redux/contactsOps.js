import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67f44151cbef97f40d2dd513.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts",
    async (_, thunkAPI) => {
    try {
        const res = await axios.get("/contacts")
        return res.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    }
)

export const addContact = createAsyncThunk("contacts/addContact", async (newContacts, thunkAPI) => {
    try {
        const res = await axios.post("/contacts", newContacts)
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${contactId}`)
        return contactId;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
