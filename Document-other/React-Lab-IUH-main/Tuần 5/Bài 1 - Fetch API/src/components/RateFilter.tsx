const RateFilter = () => {
  return (
    <div className="my-4 space-y-4 pb-4 border-b-2 border-gray-300">
      <h4 className="text-xl font-bold">Rate</h4>
      <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
        <option value="1">⭐ 1 Star</option>
        <option value="2">⭐⭐ 2 Stars</option>
        <option value="3">⭐⭐⭐ 3 Stars</option>
        <option value="4">⭐⭐⭐⭐ 4 Stars</option>
        <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
      </select>
    </div>
  );
};

export default RateFilter;
