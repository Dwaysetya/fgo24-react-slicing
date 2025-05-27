import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: function (state, action) {
      const id = Math.floor(Math.random() * 100);
      state.data.push({
        id,
        ...action.payload,
      });
      console.log("data", initialState);
      return state;
    },
  },
});

export const { addUsers } = users.actions;
export default users.reducer;
