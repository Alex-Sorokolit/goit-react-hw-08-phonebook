import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Об'єкт token, має два методи
const token = {
  // Передає токен в заголовок для будь-якого (common) запиту
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  // Скидає токен
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', newUser);
      // записує токен в об'єкт token
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', user);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async thunkAPI => {
  try {
    await axios.post('/users/logout');
    // токен вже є у хедері, тому що юзер вже був залогінений
    // тому його потрібно обнулити
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
