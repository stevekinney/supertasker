import CreateTask from './create-task';
import TaskList from './task-list';

const Application = () => {
  return (
    <main className="application">
      <CreateTask />
      <TaskList />
    </main>
  );
};

export default Application;
