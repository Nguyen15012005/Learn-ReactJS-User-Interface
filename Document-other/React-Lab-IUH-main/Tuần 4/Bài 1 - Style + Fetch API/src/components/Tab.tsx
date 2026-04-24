import TabItem from "./TabItem";

const Tab = () => {
  return (
    <div className="border-b-2 border-gray-300 flex items-center space-x-4 my-4">
      <TabItem title="Saved Recipes" isActive />
      <TabItem title="Folders" />
      <TabItem title="Recipes by Genevieve" />
    </div>
  );
};

export default Tab;
