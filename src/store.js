import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./features/todolist/todolistSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    todolist: todoListReducer,
    modal: modalReducer,
  },
});
