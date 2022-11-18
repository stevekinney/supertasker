import { useContext } from 'react';
import ApplicationContext from '../context';

type TaskProps = {
  task: Task;
};

const Task = ({ task }: TaskProps) => {
  const { columns, users } = useContext(ApplicationContext);

  const status = columns.find((column) => column.id === task.columnId)?.title;
  const user = users.find((user) => user.id === task.userId);

  return (
    <article className="task">
      <header className="task-header">
        <h2 className="task-title">{task.title}</h2>
        <button className="destructive small">Remove</button>
      </header>
      <div className="task-details">
        <p className="task-status">{status}</p>
        {user && <p className="task-user">{user.alterEgo}</p>}
      </div>
    </article>
  );
};

export default Task;
