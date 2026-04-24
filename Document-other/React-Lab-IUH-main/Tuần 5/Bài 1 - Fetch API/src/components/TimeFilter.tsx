const TimeFilter = () => {
  return (
    <div className="my-4 space-y-4 pb-4 border-b-2 border-gray-300">
      <h4 className="text-xl font-bold">Time</h4>
      <input
        type="range"
        min="1"
        max="100"
        defaultValue="50"
        className="w-full"
      />
    </div>
  );
};

export default TimeFilter;
