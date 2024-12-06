import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
     isLoading: false,
     selectedData: {},
};
export const restaurantSlice = createSlice({
     name: "restaurants",
     initialState: initialState,
     reducers: {
          setSelectedData: (state, action) => {
               state.selectedData = action.payload;
          },
     },
     //  extraReducers: (builder) => {
     //       builder.addCase(getAllReportBuilder.fulfilled, (state, action) => {
     //            state.listReportBuilder = action.payload;
     //       });
     //  },
});

export const restaurantActions = restaurantSlice.actions;

export default restaurantSlice.reducer;
