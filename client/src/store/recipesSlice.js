import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk("fetch/recipes", async () => {
  try {
    const response = await axios.get("http://localhost:5173/recipes.json");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const searchRecipes = createAsyncThunk(
  "fetchSearchRecipes",
  async (query) => {
    try {
      const response = await axios.get("http://localhost:5173/recipes.json");
      const filtered = response.data.filter((recipes) =>
        recipes.name.toLowerCase().includes(query.toLowerCase())
      );
      return filtered;
    } catch (error) {
      console.log(error);
    }
  }
);




const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.recipes = action.payload;
    });
    builder.addCase(searchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
  },
});

export default recipeSlice.reducer;
