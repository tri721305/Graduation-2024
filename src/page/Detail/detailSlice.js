import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { datasourceApi } from '../../api/datasourceManage'
import { toast } from "react-toastify";

const initialState = {
     listOption: [],
     isLoading: false,
     data: {
          notes: {
               type: "note",
               title: "Notes",
               data: null,
          },
          hotel: {
               type: "hotel",
               title: "Hotels and Lodging",
               data: null,
          },
          restaurants: {
               type: "restaurants",
               title: "Restaurants",
               data: null,
          },
          places: {
               type: "places",
               title: "Places to visit",
               data: null,
          },
          plan: {
               type: "plans",
               data: [
                    {
                         date: "null",
                         places: [],
                    },
               ],
          },
     },
};

export const detailSlice = createSlice({
     name: "detail",
     initialState: initialState,
     reducers: {
          setListOption: (state, action) => {
               state.listOption = action.payload;
          },
          setNotes: (state, action) => {
               state.data.notes = { ...state.data.notes, data: action.payload };
          },
          setDate: (state, action) => {
               state.data.plan = { ...state.data.plan, data: action.payload };
          },
     },
     //  extraReducers: (builder) => {
     //       builder.addCase(getAllReportBuilder.fulfilled, (state, action) => {
     //            state.listReportBuilder = action.payload;
     //       });
     //  },
});

// export const getAllTableColumns = createAsyncThunk("querySql/getAllTableColumns", async (body, { rejectWithValue }) => {
//      try {
//           const res = await datasourceApi.getAllTableColumns(body);
//           const data = res?.data?.object || [];
//           return data;
//      } catch (error) {
//           toast.error(error?.response?.data?.errorReason);
//           return rejectWithValue(error?.data);
//      }
// });

export const detailActions = detailSlice.actions;

export default detailSlice.reducer;
