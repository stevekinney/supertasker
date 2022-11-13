import { useState } from 'react';

const CreateTask = () => {
  const [newTaskTitle, setnewTaskTitle] = useState('');

  return (
    <form
      className="create-task"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="new-task-title">
        Title
        <input
          id="new-task-title"
          type="text"
          value={newTaskTitle}
          placeholder="Title"
          required
          onChange={(e) => setnewTaskTitle(e.target.value)}
        />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
