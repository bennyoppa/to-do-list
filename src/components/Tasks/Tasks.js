import Task from "../Task/Task";

const Tasks = (props) => {
  const { tasks, checkHandler, deleteHandler } = props;

  return (
    <div>
      {tasks.map((task, i) => (
        <Task
          key={i}
          task={task}
          checkHandler={() => checkHandler(i)}
          deleteHandler={() => deleteHandler(i)}
        />
      ))}
    </div>
  );
};

export default Tasks;
