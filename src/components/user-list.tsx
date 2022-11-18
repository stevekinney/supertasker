import CreateUser from './create-user';
import Task from './user';

const UserList = () => {
  const users: User[] = [];

  return (
    <section className="user-list">
      <CreateUser />
      {users.map((user) => (
        <Task key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
