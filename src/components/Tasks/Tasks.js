import Task from "../Task/Task";

function Tasks(props) {
  const { tasks, handleCheck, handleDelete } = props;
  const colors = ["#E9C7C2", "#89CFF0", "#dfdedf", "#c0ced7"];

  return (
    <div>
      {tasks.map((task, i) => (
        <Task
          key={i}
          task={task}
          handleCheck={() => handleCheck(i)}
          handleDelete={() => handleDelete(i)}
          cardColor={colors[i % colors.length]}
        />
      ))}
    </div>
  );
}

export default Tasks;
