import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, reLogIn } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isReLogIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [reLogIn.pending](state) {
      state.isReLogIn = true;
    },
    [reLogIn.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isReLogIn = false;
    },
    [reLogIn.rejected](state) {
      state.isReLogIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
