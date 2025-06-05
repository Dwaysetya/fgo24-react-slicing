import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historyTransaksi: {},
  historyBook: [],
};

const transaksi = createSlice({
  name: "transaksi",
  initialState,
  reducers: {
    setHistorytransaksi: (state, action) => {
      state.historyTransaksi = {
        ...state.historyTransaksi,
        ...action.payload,
      };
    },
    addHistoryBook: (state) => {
      state.historyBook.push(state.historyTransaksi);
    },
    clearHistoryTransaksi: (state) => {
      state.historyTransaksi = {};
    },
  },
});

export const { setHistorytransaksi, addHistoryBook, clearHistoryTransaksi } =
  transaksi.actions;
export default transaksi.reducer;
