import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const updateModalSlice = createSlice({
  name: "updateModal",
  initialState,
});

export default updateModalSlice.reducer;
