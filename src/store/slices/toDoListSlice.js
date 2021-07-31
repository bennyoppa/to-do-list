import { createSlice } from "@reduxjs/toolkit";

const colors = ["#E9C7C2", "#89CFF0", "#dfdedf", "#c0ced7"];

const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: {
    tasks: [],
    enteredName: "",
  },
  reducers: {
    addTaskHandler: (state, action) => {
      const i = state.tasks.length;
      const name = state.enteredName;

      if (name === "") {
        alert("Task name cannot be empty!");
      } else {
        state.tasks.push({
          name: name,
          done: false,
          color: colors[i % colors.length],
        });
        state.enteredName = "";
      }
    },

    deleteTaskHandler: (state, action) => {
      const i = action.payload;
      state.tasks.splice(i, 1);
    },

    checkHandler: (state, action) => {
      const i = action.payload;
      state.tasks[i].done = !state.tasks[i].done;
    },

    changeNameHandler: (state, action) => {
      const name = action.payload;
      state.enteredName = name;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTaskHandler,
  deleteTaskHandler,
  checkHandler,
  changeNameHandler,
} = toDoListSlice.actions;

export default toDoListSlice.reducer;
