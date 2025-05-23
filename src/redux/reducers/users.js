import { createSlice } from "@reduxjs/toolkit";

//contoh membuat data yang ingin di tampilkan di homepage
// gunakan
const initialState = {
  // state awal
  data: [
    {
      id: 1,
      name: "jhon",
      umur: "30",
    },
  ],
};

const users = createSlice({
  // reducer user / membuat slice bernama users
  name: "users",
  initialState, // ini pemanggilan untuk mnentukan state awal dari atas
  reducers: {
    // dibawah sini adalah cara untuk memodifikasi state
    addUsers: function (state, action) {
      // actionnya
      const id = state.data.length + 1; // membuat id berdasarkan panjang data
      state.data.push({
        // membuat user baru ke array data
        id,
        ...action.payload,
      });
      return state; // ini optional karena redux toolkit pake immer.js , jadi otomatis mutasi langsung
    },
  },
});

export const { addUsers } = users.actions;
export default users.reducer;
