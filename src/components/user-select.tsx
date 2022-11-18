const id = ({ id }: { id: string }) => `task-${id}-user-select`;

type UserSelectProps = {
  task: Task;
};

const UserSelect = ({ task }: UserSelectProps) => {
  const users: User[] = [];

  return (
    <div>
      <label className="hidden" htmlFor={id(task)}>
        User
      </label>
      <select
        id={id(task)}
        className="user-select"
        value={task.userId}
        onChange={() => {}}
      >
        <option></option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.alterEgo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
