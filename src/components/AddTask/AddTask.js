import { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./AddTask.css";

const AddTask = (props) => {
  const { addTaskHandler } = props;
  const [name, setName] = useState("");

  const changeNameHandler = (e) => {
    const newTaskName = e.target.value;
    setName(newTaskName);
  };

  return (
    <div className="add-task">
      <form className="inner-wrapper" onSubmit={(e) => addTaskHandler(e, name)}>
        <TextField
          className="input-field"
          onChange={changeNameHandler}
          id="outlined-basic"
          label="To-Do"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          ADD
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
