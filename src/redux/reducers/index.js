// redux/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import users from "./users";
import auth from "./auth";
import profile from "./profile";
import transaksi from "./historyTransaksi";

const usersPersistConfig = {
  key: "users",
  storage,
};
const authPersistConfig = {
  key: "auth",
  storage,
};
const profilePersistConfig = {
  key: "profile",
  storage,
};
const transaksiPersistConfig = {
  key: "transaksi",
  storage,
};

const reducer = combineReducers({
  users: persistReducer(usersPersistConfig, users),
  auth: persistReducer(authPersistConfig, auth),
  profile: persistReducer(profilePersistConfig, profile),
  transaksi: persistReducer(transaksiPersistConfig, transaksi),
});

export default reducer;
