import { PropsWithChildren } from 'react';

type StatusColumnProps = { title: string };

const StatusColumn = ({
  children,
  title,
}: PropsWithChildren<StatusColumnProps>) => {
  return (
    <section className="rounded-3xl bg-primary-100">
      <h2 className="py-2 text-center bold">{title}</h2>
      <div className="flex place-content-center">{children}</div>
    </section>
  );
};

export default StatusColumn;
