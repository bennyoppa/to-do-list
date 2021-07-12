import { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./AddTask.css";

const AddTask = (props) => {
  const { onAddTask } = props;
  const [name, setName] = useState("");

  const changeNameHandler = (e) => {
    const newTaskName = e.target.value;
    setName(newTaskName);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAddTask(name);
    setName("");
  };

  return (
    <div className="add-task">
      <form className="inner-wrapper" onSubmit={submitHandler}>
        <TextField
          className="input-field"
          onChange={changeNameHandler}
          id="outlined-basic"
          label="To-Do"
          variant="outlined"
          value={name}
        />
        <Button variant="contained" color="primary" type="submit">
          ADD
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
