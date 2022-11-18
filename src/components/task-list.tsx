import { useGetTasksQuery } from '../services/tasks-service';
import Loading from './loading';
import Task from './task';

const TaskList = () => {
  const {
    data: tasks,
    isLoading,
    isFetching,
  } = useGetTasksQuery(undefined, {});

  return (
    <section className="task-list">
      {isFetching && <p>Fetching more…</p>}
      <Loading loading={isLoading} />
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
