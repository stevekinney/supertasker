type Task = {
  id: string;
  title: string;
  user?: User;
  status: Status;
};

type User = {
  id: string;
  realName: string;
  alterEgo: string;
  company: string;
  skill: string;
  title: string;
};

type Status =
  | 'Backburner'
  | 'Ready'
  | 'In Progress'
  | 'Verifying'
  | 'Waiting for Deployment'
  | 'Deployed';
