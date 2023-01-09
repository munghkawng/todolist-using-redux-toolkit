import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  heading: "",
  message: "",

  updateTask: false,
  todoUpdate: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.heading = action.payload.heading;
      state.message = action.payload.task;
      state.id = action.payload.id;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.updateTask = false;
      state.message = "";
    },
    openUpdateTaskModal: (state, action) => {
      state.updateTask = true;
      state.todoUpdate = action.payload;
    },
  },
});

export const { openModal, closeModal, openUpdateTaskModal } =
  modalSlice.actions;
export default modalSlice.reducer;
