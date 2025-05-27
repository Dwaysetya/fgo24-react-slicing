// redux/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import users from "./users";
import auth from "./auth"; // ← tambahkan ini

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users", "auth"], // ⬅️ auth ditambahkan agar disimpan di localStorage
};

const rootReducer = combineReducers({
  users,
  auth, // ← tambahkan ini juga
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
