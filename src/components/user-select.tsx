import { ComponentPropsWithoutRef, useId } from 'react';

const UserSelect = (props: ComponentPropsWithoutRef<'select'>) => {
  const id = useId();
  const users: User[] = [];

  return (
    <div>
      <label className="hidden" htmlFor={props.id || id}>
        User
      </label>
      <select id={props.id || id} className="user-select" {...props}>
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
