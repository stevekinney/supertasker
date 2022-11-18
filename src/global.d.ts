type Task = {
  id: string;
  title: string;
  userId: User[id];
  columnId: StatusColumn['id'];
};

type User = {
  id: string;
  realName: string;
  alterEgo: string;
  company: string;
  skill: string;
  title: string;
  taskIds: Task['id'][];
};

type StatusColumn = {
  id: string;
  taskIds: Task['id'][];
  title: Status;
};

type Status =
  | 'Backburner'
  | 'Ready'
  | 'In Progress'
  | 'Verifying'
  | 'Waiting for Deployment'
  | 'Deployed';
