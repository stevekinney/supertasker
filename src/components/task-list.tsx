import { useContext } from 'react';
import { useSelector } from 'react-redux';
import ApplicationContext from '../context';
import { useAppSelector } from '../hooks';
import { ApplicationState } from '../store';
import Task from './task';

const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
