import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolists: [],
  value: "",
};

const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    handleInput: (state, action) => {
      state.value = action.payload;
    },
    addToDoList: (state, action) => {
      state.todolists = [...state.todolists, action.payload];
      state.value = "";
    },
    clearTask: (state) => {
      state.todolists = [];
    },
    deleteToDoList: (state, action) => {
      const taskId = action.payload;
      state.todolists = state.todolists.filter((task) => task.id !== taskId);
    },

    updateTodoList: (state, { payload }) => {
      const updateTaskId = payload.id;

      state.todolists = state.todolists.map((todo) => {
        if (todo.id === updateTaskId) {
          return { ...todo, task: payload.task };
        }
        return todo;
      });
    },
  },
});

export const {
  addToDoList,
  deleteToDoList,
  clearTask,
  updateTodoList,
  handleInput,
  editToDoList,
} = todolistSlice.actions;
export default todolistSlice.reducer;
