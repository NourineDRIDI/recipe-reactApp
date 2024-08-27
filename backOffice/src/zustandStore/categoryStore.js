import { create } from 'zustand'
import axios from "axios" 
import { api } from '../config'

let useCategoryStore = create ((set)=>({
    categories: [],
    oneCategory:{},
    loading : true,
    fetch : async () => {
        const response = await axios.get(`${api}/categories.json`)
        set({categories : response.data,
            loading : false
        })
    },
    fetchOne : async(id)=> {
        try {
            const response = await axios.get(`${api}/categories.json`)
            const founded = response.data.find(e=>e.id===+id)
            set({oneCtegory: founded,
                loading : false
            })
        } catch (error) {
            console.log(error)
        }

    }
}))

export default useCategoryStore;