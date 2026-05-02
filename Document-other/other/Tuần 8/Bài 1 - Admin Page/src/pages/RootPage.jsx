import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { SideMenu } from "../components/SideMenu";
import Topbar from "../components/Topbar";
import { Header } from "../components/Header";

const RootPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mx-auto w-9/10 my-12 border-2 border-gray-300 rounded-lg">
        <div className="grid grid-cols-6">
          <SideMenu />
          <div className="col-span-5">
            <Topbar />
            <div className="flex-grow ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootPage;
