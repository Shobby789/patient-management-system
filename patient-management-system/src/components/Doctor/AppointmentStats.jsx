import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { CgSandClock } from "react-icons/cg";
import { TbAlertTriangle } from "react-icons/tb";

const AppointmentStats = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <h2 className="text-4xl font-semibold">
          Welcome <span>&#128075;</span>
        </h2>
        <p className="text-lg text-slate-400 mt-2">
          Start the day with managing new appointments
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mt-8">
        <div className="rounded-2xl py-5 px-7 2xl:py-10 2xl:px-10 bg-slate-700/20 custom-shadow hover:scale-105 transition-all duration-500">
          <div className="mb-4 flex items-center gap-4">
            <LuCalendarDays className="text-3xl text-yellow-400" />
            <span className="text-3xl font-semibold">4</span>
          </div>
          <span className="text-slate-400 text-lg 2xl:text-xl">
            Scheduled appointments
          </span>
        </div>
        <div className="rounded-2xl py-5 px-7 2xl:py-10 2xl:px-10 bg-slate-700/20 custom-shadow hover:scale-105 transition-all duration-500">
          <div className="mb-4 flex items-center gap-4">
            <CgSandClock className="text-3xl text-indigo-300" />
            <span className="text-3xl font-semibold">5</span>
          </div>
          <span className="text-slate-400 text-lg 2xl:text-xl">
            Pending appointments
          </span>
        </div>
        <div className="rounded-2xl py-5 px-7 2xl:py-10 2xl:px-10 bg-slate-700/20 custom-shadow hover:scale-105 transition-all duration-500">
          <div className="mb-4 flex items-center gap-4">
            <TbAlertTriangle className="text-3xl text-red-400" />
            <span className="text-3xl font-semibold">4</span>
          </div>
          <span className="text-slate-400 text-lg 2xl:text-xl">
            Cancelled appointments
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentStats;
