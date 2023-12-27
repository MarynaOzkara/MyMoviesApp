import Cookies from 'js-cookie';
const { createSlice } = require('@reduxjs/toolkit');

const currntLang = Cookies.get('i18next');
console.log(currntLang);
const lenguageSlice = createSlice({
  name: 'lenguage',
  initialState: {
    lenguage: currntLang,
  },
  reducers: {
    setLenguage(state, action) {
      console.log(action.payload);
      state.lenguage = action.payload;
    },
  },
});
export const { setLenguage } = lenguageSlice.actions;
export const lenguageReducer = lenguageSlice.reducer;
