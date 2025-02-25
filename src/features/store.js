import { configureStore } from "@reduxjs/toolkit";
import todos from './todo/TodoSlice'
import theme from './theme/ThemeSlice'

const store = configureStore({

reducer : {
todos,
theme
},

})


export default store;