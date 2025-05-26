import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ page }) => {
  return (
    <div className="w-full h-screen flex items-start overflow-hidden">
      <div className="lg:w-[23%] 2xl:w-[16%] h-full border-r border-slate-900">
        <Sidebar />
      </div>
      <div className="w-[77%] 2xl:w-[84%] h-full overflow-y-scroll overflow-x-visible px-4 lg:px-10">
        {page}
      </div>
    </div>
  );
};

export default Layout;
