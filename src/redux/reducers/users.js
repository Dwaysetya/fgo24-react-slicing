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
    editData: (state, action) => {
      const index = state.data.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = {
          ...state.data[index],
          ...action.payload,
        };
      }
    },
  },
});

export const { addUsers, editData } = users.actions;
export default users.reducer;
