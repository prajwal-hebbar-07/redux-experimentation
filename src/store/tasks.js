const { createSlice } = require("@reduxjs/toolkit");

let id = 0;

const tasks = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    },
    completedTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = true;
    },
  },
});

export const { addTask, removeTask, completedTask } = tasks.actions;
export default tasks.reducer;
