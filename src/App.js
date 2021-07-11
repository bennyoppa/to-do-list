import React, { useState } from "react";

import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";

import "./App.css";

const initalTasks = [];

const App = (props) => {
  const [tasks, setTasks] = useState(initalTasks);

  const handleCheck = (i) => {
    const tempTasks = [...tasks];
    tempTasks[i].done = !tempTasks[i].done;
    setTasks(tempTasks);
  };

  const handleDelete = (i) => {
    const tempTasks = [...tasks];
    tempTasks.splice(i, 1);
    setTasks(tempTasks);
  };

  const handleAddTask = (name) => {
    if (name === "") {
      alert("Task name cannot be empty!");
    } else {
      const tempTasks = [...tasks, { name: name, done: false }];
      setTasks(tempTasks);
    }
  };

  return (
    <div className="to-do-list">
      <AddTask handleAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
