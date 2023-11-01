import { createSlice, nanoid } from "@reduxjs/toolkit";

const getTodos =
  localStorage.getItem("todos") !== null
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

const initialState = {
  todos: getTodos,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
      });

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    updateTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.description = action.payload.description;
        }
      });

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
