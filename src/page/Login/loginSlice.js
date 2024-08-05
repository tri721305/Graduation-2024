// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { instanceUserInfo, instanceLogin } from "@/api/auth";
// import { toast } from "react-toastify";

// import { getCookie, setCookie, removeCookie } from "@/util";

// const initialState = {
//      token: getCookie("token"),
//      loading: false,
//      isLogin: false,
//      users: {},
//      invalidToken: true,
// };

// export const authSlice = createSlice({
//      name: "auth",
//      initialState: initialState,
//      reducers: {
//           loginSuccess: (state, action) => {
//                state.isLogin = true;
//                state.loading = false;
//                state.invalidToken = false;
//           },
//           loginFail: (state) => {
//                state.token = false;
//                state.isLogin = false;
//                state.loading = false;
//                state.invalidToken = true;
//           },
//           logout: (state) => {
//                state.token = false;
//           },
//           users: (state, action) => {
//                state.users = action.payload;
//           },
//           invalidToken: (state, action) => {
//                state.invalidToken = action.payload;
//           },
//      },
//      extraReducers: (builder) => {
//           builder
//                .addCase(login.pending, (state, action) => {
//                     state.loading = true;
//                     state.users = {};
//                     state.invalidToken = false;
//                })
//                .addCase(login.rejected, (state, action) => {
//                     state.token = false;
//                     state.isLogin = false;
//                     state.loading = false;
//                     state.invalidToken = true;
//                })
//                .addCase(login.fulfilled, (state, action) => {
//                     state.loading = false;
//                     state.token = getCookie("token");
//                });
//           builder
//                .addCase(getInfoUser.rejected, (state, action) => {
//                     state.users = action.payload;
//                })
//                .addCase(getInfoUser.pending, (state, action) => {})
//                .addCase(getInfoUser.fulfilled, (state, action) => {
//                     state.isLogin = true;
//                });
//      },
// });

// export const login = createAsyncThunk("login", async (data, { rejectWithValue, dispatch }) => {
//      try {
//           const params = new URLSearchParams();
//           params.append("username", data.username);
//           params.append("password", data.password);
//           params.append("grant_type", "password");
//           const res = await instanceLogin.post("", params);
//           setCookie("token", res.data.access_token, {});
//           return res;
//      } catch (err) {
//           toast.error(err?.response?.data?.error_desscription);
//           return rejectWithValue(err);
//      }
// });

// export const getInfoUser = createAsyncThunk("getInfoUser", async (data, thunkAPI) => {
//      try {
//           const contant = instanceUserInfo();
//           const res = await contant.post("", {});
//           thunkAPI.dispatch(authActions.users(res.data.object));
//           thunkAPI.dispatch(authActions.loginSuccess());
//           return res.data.object;
//      } catch (err) {
//           toast.error(err.message + "_" + err.code);
//           thunkAPI.dispatch(authActions.invalidToken(true));

//           return thunkAPI.rejectWithValue(err.message);
//      }
// });

// export const authActions = authSlice.actions;

// export const tokenState = (state) => state.auth.token;

// export const authUserState = (state) => state.auth.user;

// export default authSlice.reducer;
// //hello
