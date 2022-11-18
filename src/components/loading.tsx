type LoadingProps = {
  loading?: boolean;
};

const Loading = ({ loading = true }: LoadingProps) => {
  if (!loading) return null;
  return (
    <div className="w-full p-2 text-center text-yellow-900 bg-yellow-400 border border-yellow-800 animate-pulse">
      Loading…
    </div>
  );
};

export default Loading;
