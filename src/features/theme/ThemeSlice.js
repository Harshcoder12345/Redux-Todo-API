import { createSlice } from "@reduxjs/toolkit";


const Existingtheme = JSON.parse(localStorage.getItem("theme"))



const ThemeSlice = createSlice({



   name : "theme",
   initialState : {
    dark : Existingtheme || false
   }, 


   reducers : {

      changetheme: (state, action)=> {
         return{

            ...state,
            dark : state.dark ? false : true,
            
         }
         
      }

   }
})

export const {changetheme} = ThemeSlice.actions





export default ThemeSlice.reducer