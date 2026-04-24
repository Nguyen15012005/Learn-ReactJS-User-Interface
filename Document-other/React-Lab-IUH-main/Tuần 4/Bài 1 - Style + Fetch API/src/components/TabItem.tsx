type Props = {
  title: string;
  isActive?: boolean;
};

const TabItem: React.FC<Props> = ({ title, isActive }) => {
  const activeStyle = isActive
    ? "bg-pink-200 text-pink-400 font-bold rounded-lg"
    : "";

  return (
    <p className={`text-lg text-gray-400 px-4 py-2 ${activeStyle}`}>{title}</p>
  );
};

export default TabItem;
