import { configureStore } from "@reduxjs/toolkit";
import { toDoListReducer } from "./slices/index";

export default configureStore({
  reducer: {
    toDoList: toDoListReducer,
  },
});
