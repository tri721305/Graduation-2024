import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authSlice from "@/page/Login/loginSlice";
import thunk from "redux-thunk";
import detailSlice from "../page/Detail/detailSlice";
import restaurantSlice from "../page/Restaurant/restaurantSlice";
export const rootReducer = combineReducers({
     // auth: authSlice,
     detail: detailSlice,
     restaurant: restaurantSlice,
});

export const store = configureStore({
     reducer: rootReducer,
     middleware: [thunk],
});
