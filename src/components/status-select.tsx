import { statuses } from '../lib/statuses';

const id = ({ id }: { id: string }) => `task-${id}-status-select`;

type StatusSelectProps = {
  task: Task;
};

const StatusSelect = ({ task }: StatusSelectProps) => {
  return (
    <div>
      <label className="hidden" htmlFor={id(task)}>
        Status
      </label>
      <select
        id={id(task)}
        className="status-select"
        value={task.columnId}
        onChange={() => {}}
      >
        <option></option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusSelect;
