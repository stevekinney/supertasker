import CreateTask from './create-task';
import TaskList from './task-list';

import tasks from '../api/tasks.json';

const Application = () => {
  return (
    <main className="application">
      <CreateTask />
      <TaskList tasks={tasks as Task[]} />
    </main>
  );
};

export default Application;
