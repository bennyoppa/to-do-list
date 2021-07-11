import CustomButton from "../CustomButton/CustomButton";

import "./Task.css";

function Task(props) {
  const { name, done } = props.task;
  const { handleCheck, handleDelete, cardColor } = props;

  const buttons = [
    {
      name: "CHECK",
      func: handleCheck,
      uncheckedColor: "grey",
      checkedColor: "green",
      done: done,
    },
    {
      name: "DELETE",
      func: handleDelete,
      color: "#c41834",
    },
  ];

  return (
    <div className="task" style={{ background: cardColor }}>
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
}

export default Task;
