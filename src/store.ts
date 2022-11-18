import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './features/tasks-slice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;
