import Task from './task';

type TaskListProps = {
  tasks: Task[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
