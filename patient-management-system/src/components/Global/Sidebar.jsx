import React from "react";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { SiGotomeeting } from "react-icons/si";
import { HiMiniUsers } from "react-icons/hi2";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RiSettings5Fill } from "react-icons/ri";

const Sidebar = () => {
  const icons = [
    <TbLayoutDashboardFilled className="text-lg" />,
    <HiMiniUsers className="text-lg" />,
    <FaUserDoctor className="text-base" />,
    <SiGotomeeting className="text-base" />,
    <RiSettings5Fill className="text-lg" />,
  ];
  return (
    <div className="w-full h-screen overflow-hidden px-4 lg:px-8 py-10">
      <div className="w-full">
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" className="w-[161px] h-[38px]" />
        </Link>
        {/* <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-700 justify-center">
          <FaHeartbeat className="" />
          Healthcare
        </h2> */}
      </div>
      <div className="w-full mt-10">
        <ul className="w-full flex flex-col items-start gap-2.5">
          {["Dashboard", "Patients", "Doctors", "Appointments", "Settings"].map(
            (url, index) => {
              return (
                <li className="w-full" key={index}>
                  <Link
                    to={`/`}
                    className={`w-full ${
                      index === 0
                        ? "bg-[#24AE7C] text-white"
                        : "bg-slate-700/20 hover:bg-[#24AE7C]"
                    } px-5 py-3.5 rounded-md text-sm font-semibold transition-all duration-300 flex items-center gap-2`}
                  >
                    {icons[index]}
                    {url}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
