import React, { useState } from "react";
import AppointmentsList from "../../components/Doctor/AppointmentsList";
import AppointmentStats from "../../components/Doctor/AppointmentStats";
import Pagination from "../../components/Doctor/Pagination";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Filters from "../../components/Doctor/Filters";

const DoctorAppointmentsListPage = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDrodownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDrodownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full py-10 relative">
      <div className="absolute top-16 right-1 flex items-center gap-2">
        <img
          src="https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=P2toTbaknymA7vf28IQNa-3xrlUjPXLFqvN2Zra8_nw="
          alt="doctor profile"
          className="w-7 h-7 rounded-full object-cover"
        />
        <button
          type="button"
          className="flex items-center gap-1 text-sm"
          onClick={toggleDropdown}
        >
          Dr. Alex Hess{" "}
          <MdKeyboardArrowDown
            className={`text-lg ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          />
        </button>
        {isDropdownOpen && (
          <div className="w-40 bg-[#1c1c1c]/50 z-40 absolute top-11 rounded-xl py-3 px-3 flex flex-col items-start gap-1">
            <Link
              to={"/"}
              className="px-4 text-sm font-medium py-2 hover:bg-slate-950 w-full block rounded-lg"
            >
              Profile
            </Link>
            <Link
              to={"/"}
              className="px-4 text-sm font-medium py-2 hover:bg-slate-950 w-full block rounded-lg"
            >
              Settings
            </Link>
            <Link
              to={"/"}
              className="px-4 text-sm font-medium text-red-500 py-2 hover:bg-red-950 w-full block rounded-lg"
            >
              Logout
            </Link>
          </div>
        )}
      </div>

      <AppointmentStats />
      <Filters />
      <AppointmentsList />
      <Pagination />
    </div>
  );
};

export default DoctorAppointmentsListPage;
