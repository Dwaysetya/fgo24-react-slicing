// untuk menggabungkan
// dalam redux satu store hanya menerima 1 reducer, jadinya kalau mau banyak, harus di gabungkan

import { combineReducers } from "@reduxjs/toolkit";
import users from "./users"; // mengimport reducer users
//import auth

const reducer = combineReducers({
  // penggabungan reducernya ada di sini
  users,
  //Auth
});

export default reducer;
