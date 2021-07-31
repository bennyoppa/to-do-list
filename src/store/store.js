import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./slice/toDoListSlice";

export default configureStore({
  reducer: {
    toDoList: toDoListReducer,
  },
});
