import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slices/quoteSlice";

export default configureStore({
    reducer:{
        quotes: quoteReducer
    }
})