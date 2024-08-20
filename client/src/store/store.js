import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipesSlice";
import categorySlice from "./categorySlice";

 

const store = configureStore({
    reducer : {
        recipes : recipesSlice,
        categories : categorySlice
    }
})

export default store;