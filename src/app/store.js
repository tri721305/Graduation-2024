import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authSlice from "@/page/Login/loginSlice";
import thunk from "redux-thunk";
import detailSlice from "../page/Detail/detailSlice";
export const rootReducer = combineReducers({
     // auth: authSlice,
     detail: detailSlice,
});

export const store = configureStore({
     reducer: rootReducer,
     middleware: [thunk],
});
