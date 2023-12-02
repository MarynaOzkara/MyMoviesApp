import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import ky from 'ky';
// import ky from 'ky';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };
export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await ky.post(
        'https://connections-api.herokuapp.com/users/signup',
        credentials
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  }
);
