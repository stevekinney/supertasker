import { ComponentPropsWithoutRef, useId } from 'react';
import { statuses } from '../lib/statuses';

const StatusSelect = (props: ComponentPropsWithoutRef<'select'>) => {
  const id = useId();

  return (
    <div>
      <label className="hidden" htmlFor={props.id || id}>
        Status
      </label>
      <select id={props.id || id} className="status-select" {...props}>
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
