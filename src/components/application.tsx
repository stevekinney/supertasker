import CreateTask from './create-task';
import TaskList from './task-list';

const Application = () => {
  return (
    <main className="application">
      <div className="side-panel">
        <CreateTask />
        {/* <UserList /> */}
      </div>
      <TaskList />
    </main>
  );
};

export default Application;
