import React from "react";
import { useSelector } from "react-redux";

import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";

import "./App.css";

const App = (props) => {
  const { tasks } = useSelector((state) => state.toDoList);

  return (
    <div className="to-do-list">
      <AddTask />
      {tasks.map((task, i) => (
        <Task key={i} task={task} i={i} />
      ))}
    </div>
  );
};

export default App;
