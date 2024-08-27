import { create } from 'zustand'
import axios from "axios" 
import { api } from '../config'
let useRecipeStore = create((set)=>({
    recipes : [], 
    oneRecipe : {},
    loading : true,
    fetch : async () =>{
        const response = await axios.get(`${api}/recipes.json`)
        set({recipes : response.data,
            loading : false
        })
    },
    fetchOne : async (id) => {
        try {
            const response = await axios.get(`${api}/recipes.json`)
            const founded = response.data.find(e=>e.id === +id)
            set({
                oneRecipe : founded,
                loading : false
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}))

export default useRecipeStore;