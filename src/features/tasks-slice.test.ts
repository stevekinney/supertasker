import { addTask, createTask, removeTask, tasksReducer } from './tasks-slice';

describe('tasksSlice', () => {
  const initialState = {
    entities: [
      createTask({ title: 'Write tests' }),
      createTask({ title: 'Make them pass' }),
    ],
  };

  it(`should add a task when the ${addTask}`, () => {
    const task = createTask({ title: 'Profit' });
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual([task, ...initialState.entities]);
  });
});
