import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const signup = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);
      toast.success('Welcome to MyMoviesApp App!');
      console.log(response.data);
      return response.data;
    } catch (e) {
      toast.error('Something went wrong. Try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
