import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  heading: "",
  message: "",
  editValue: "",
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
      state.editValue = "";
    },
    openUpdateTaskModal: (state, action) => {
      state.updateTask = true;
      state.todoUpdate = action.payload;
    },
    editToDoList: (state, action) => {
      state.editValue = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  openUpdateTaskModal,
  handleInput,
  editToDoList,
} = modalSlice.actions;
export default modalSlice.reducer;
