import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  addTaskHandler,
  changeNameHandler,
} from "../../store/slices/toDoListSlice";

import "./AddTask.css";

const AddTask = (props) => {
  const { enteredName } = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();

  return (
    <div className="add-task">
      <form
        className="inner-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTaskHandler());
        }}
      >
        <TextField
          className="input-field"
          onChange={(e) => dispatch(changeNameHandler(e.target.value))}
          id="outlined-basic"
          label="To-Do"
          variant="outlined"
          value={enteredName}
        />
        <Button variant="contained" color="primary" type="submit">
          ADD
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
