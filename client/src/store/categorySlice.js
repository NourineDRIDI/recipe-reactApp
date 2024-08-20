import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchDataCategories = createAsyncThunk("fetchData/categories", async ()=>{
    try {
        const response = await axios.get("http://localhost:5173/categories.json");
        return response.data
    } catch (error) {
        console.log(error)
    }
})


const categorySlice = createSlice({
    name : "categories",
    initialState: {
        categories : [],
        loading : true,
        error : null,

    },
    reducers : {},
    extraReducers :(builder)=>{
        builder.addCase(fetchDataCategories.fulfilled,(state,action)=>{
            state.loading = false;
            state.categories = action.payload;
        })
    }

})

export default categorySlice.reducer