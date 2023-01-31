import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, reLogIn } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isReLogIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoggedIn = false;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [logIn.pending](state) {
      state.isLoggedIn = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [logOut.pending](state) {
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [logOut.rejected](state, action) {
      state.isLoggedIn = true;
      state.error = action.payload;
    },
    [reLogIn.pending](state) {
      state.isReLogIn = true;
    },
    [reLogIn.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isReLogIn = false;
      state.error = null;
    },
    [reLogIn.rejected](state, action) {
      state.isReLogIn = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
