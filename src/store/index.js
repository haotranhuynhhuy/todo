import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducer";

//Store
const store = configureStore({
    reducer: {
        todosReducer
    }
})


export default store;

