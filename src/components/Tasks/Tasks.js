import Task from "../Task/Task";

const Tasks = (props) => {
  const { tasks, onCheck, onDelete } = props;

  return (
    <div>
      {tasks.map((task, i) => (
        <Task
          key={i}
          task={task}
          onCheck={() => onCheck(i)}
          onDelete={() => onDelete(i)}
        />
      ))}
    </div>
  );
};

export default Tasks;
