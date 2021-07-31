import { useDispatch } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import {
  deleteTaskHandler,
  checkHandler,
} from "../../store/slices/toDoListSlice";

import "./Task.css";

const Task = (props) => {
  const { i, task } = props;
  const { name, done, color } = task;
  const dispatch = useDispatch();

  const buttons = [
    {
      name: "CHECK",
      func: () => dispatch(checkHandler(i)),
      uncheckedColor: "grey",
      checkedColor: "green",
      done: done,
    },
    {
      name: "DELETE",
      func: () => dispatch(deleteTaskHandler(i)),
      color: "#c41834",
    },
  ];

  return (
    <div className="task" style={{ background: color }}>
      <div className="inner-wrapper">
        <h4>
          <b>{name}</b>
        </h4>
        <div>
          {buttons.map((button, index) => (
            <CustomButton button={button} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
