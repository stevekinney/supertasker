import { useContext } from 'react';
import ApplicationContext from '../context';
import { removeTask } from '../features/tasks-slice';
import { useAppDispatch } from '../hooks';

type TaskProps = {
  task: Task;
};

const Task = ({ task }: TaskProps) => {
  const { columns, users } = useContext(ApplicationContext);

  const dispatch = useAppDispatch();

  const status = columns.find((column) => column.id === task.column)?.title;
  const user = users.find((user) => user.id === task.user);

  return (
    <article className="task">
      <header className="task-header">
        <h2 className="task-title">{task.title}</h2>
        <button
          className="destructive small"
          onClick={() => {
            dispatch(removeTask(task.id));
          }}
        >
          Remove
        </button>
      </header>
      <div className="task-details">
        <p className="task-status">{status}</p>
        <p className="task-user">
          {user ? (
            user.alterEgo
          ) : (
            <span className="italic text-primary-700">No one assigned.</span>
          )}
        </p>
      </div>
    </article>
  );
};

export default Task;
