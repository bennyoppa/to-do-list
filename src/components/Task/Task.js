import CustomButton from "../CustomButton/CustomButton";

import "./Task.css";

const Task = (props) => {
  const { name, done, color } = props.task;
  const { onCheck, onDelete } = props;

  const buttons = [
    {
      name: "CHECK",
      func: onCheck,
      uncheckedColor: "grey",
      checkedColor: "green",
      done: done,
    },
    {
      name: "DELETE",
      func: onDelete,
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
