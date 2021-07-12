import React, { useState } from "react";

import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";

import "./App.css";

const initalTasks = [];
const colors = ["#E9C7C2", "#89CFF0", "#dfdedf", "#c0ced7"];

const App = (props) => {
  const [tasks, setTasks] = useState(initalTasks);

  const checkHandler = (i) => {
    const tempTasks = [...tasks];
    tempTasks[i].done = !tempTasks[i].done;
    setTasks(tempTasks);
  };

  const deleteHandler = (i) => {
    const tempTasks = [...tasks];
    tempTasks.splice(i, 1);
    setTasks(tempTasks);
  };

  const addTaskHandler = (name) => {
    if (name === "") {
      alert("Task name cannot be empty!");
    } else {
      const i = tasks.length;
      const tempTasks = [
        ...tasks,
        { name: name, done: false, color: colors[i % colors.length] },
      ];
      setTasks(tempTasks);
    }
  };

  return (
    <div className="to-do-list">
      <AddTask onAddTask={addTaskHandler} />
      <Tasks tasks={tasks} onCheck={checkHandler} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
