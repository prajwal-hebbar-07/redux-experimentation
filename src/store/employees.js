import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const employees = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee(state, action) {
      state.push({
        id: ++id,
        name: action.payload.name,
      });
    },
  },
});

export const { addEmployee } = employees.actions;
export default employees.reducer;
