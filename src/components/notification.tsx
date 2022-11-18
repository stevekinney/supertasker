type NotificationProps = {
  message: string;
  shouldDisplay?: boolean;
};

export const Notification = ({
  message,
  shouldDisplay = true,
}: NotificationProps) => {
  if (!shouldDisplay) return null;
  return (
    <div className="w-full p-2 text-blue-900 bg-blue-400 border border-blue-800">
      {message}
    </div>
  );
};

export const SuccessNotification = ({
  message,
  shouldDisplay = true,
}: NotificationProps) => {
  if (!shouldDisplay) return null;
  return (
    <div className="w-full p-2 text-green-900 bg-green-400 border border-green-800">
      {message}
    </div>
  );
};

export const ErrorNotification = ({
  message,
  shouldDisplay = true,
}: NotificationProps) => {
  if (!shouldDisplay) return null;
  return (
    <div className="w-full p-2 text-red-900 bg-red-400 border border-red-800">
      {message}
    </div>
  );
};
