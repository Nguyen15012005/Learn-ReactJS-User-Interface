const TypeFilter = () => {
  return (
    <div className="my-4 space-y-4 pb-4 border-b-2 border-gray-300">
      <h4 className="text-xl font-bold">Type</h4>
      <div className="grid grid-cols-2 space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            className="w-5 h-5 text-pink-500 focus:ring-pink-500"
          />
          <label className="text-lg">Pan-fried</label>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            className="w-5 h-5 text-pink-500 focus:ring-pink-500"
          />
          <label className="text-lg">Grilled</label>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            className="w-5 h-5 text-pink-500 focus:ring-pink-500"
          />
          <label className="text-lg">Roasted</label>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            className="w-5 h-5 text-pink-500 focus:ring-pink-500"
          />
          <label className="text-lg">Sauteed</label>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            className="w-5 h-5 text-pink-500 focus:ring-pink-500"
          />
          <label className="text-lg">Baked</label>
        </div>
      </div>
    </div>
  );
};

export default TypeFilter;
