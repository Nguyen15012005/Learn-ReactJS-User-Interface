import Breadcrumb from "./Breadcrumb";
import Foods from "./Foods";
import Tab from "./Tab";
import UserBio from "./UserBio";

const Body = () => {
  return (
    <div className="w-2/3 mx-auto">
      <Breadcrumb />
      <UserBio />
      <Tab />
      <Foods />
    </div>
  );
};

export default Body;
