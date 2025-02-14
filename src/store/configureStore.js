import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completedTask = createAction("COMPLETE_TASK");

// Reducer
let id = 0;

export default createReducer([], (builder) => {
  builder
    .addCase(addTask.type, (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    })
    .addCase(removeTask.type, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    })
    .addCase(completedTask.type, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = true;
    });
});
