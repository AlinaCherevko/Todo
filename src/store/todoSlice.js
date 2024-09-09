const initialState = {
  todo: [],
};

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  // Ім'я слайсу
  name: "todo",
  // Початковий стан редюсера слайсу
  initialState,

  reducers: {
    addTodo(state, action) {
      state.todo = [...state.todo, action.payload];
    },
    deleteTodo(state, action) {
      console.log(action.payload);
      state.todo = state.todo.filter((data) => data.id !== action.payload);
      console.log(action.payload);
    },
    editTodo: (state, action) => {
      console.log(action.payload);
      state.todo = state.todo.map((data) =>
        data.id === action.payload.id
          ? { ...data, value: action.payload.value }
          : data
      );
    },
  },
});

// Редюсер слайсу
export const todoReducer = todoSlice.reducer;

//Екшени слайсу
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
