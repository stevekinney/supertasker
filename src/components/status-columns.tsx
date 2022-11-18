import { PropsWithChildren } from 'react';

type StatusColumnsProps = {};

const StatusColumns = ({ children }: PropsWithChildren<StatusColumnsProps>) => {
  return <section className="flex gap-4">{children}</section>;
};

export default StatusColumns;
