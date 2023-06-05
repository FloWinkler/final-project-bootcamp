import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {},
    isLoggedIn: false,
    userInfo: {}
  },
  reducers: {
    updateUserData: (state, action) => {
      console.log('update user data')
      console.log(action.payload)
      state.userData = action.payload;
      state.isLoggedIn = true;
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    logout: (state) => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      state.isLoggedIn = false;
      state.userInfo = {};
    }
  },
});

export const { updateUserData, logout } = authSlice.actions;

export default authSlice.reducer;