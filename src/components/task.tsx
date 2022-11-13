type TaskProps = {
  task: Task;
};

const Task = ({ task }: TaskProps) => {
  return (
    <article className="task">
      <header className="task-header">
        <h2 className="task-title">{task.title}</h2>
        <button className="destructive small">Remove</button>
      </header>
      <div className="task-details">
        <p className="task-status">{task.status}</p>
        {task.user && <p className="task-user">{task.user.alterEgo}</p>}
      </div>
    </article>
  );
};

export default Task;
