import React, { useEffect, useState } from "react";
import { TbAlertTriangle } from "react-icons/tb";
import { CgSandClock } from "react-icons/cg";
import { MdCheck } from "react-icons/md";
import ScheduleAppointmentModal from "./ScheduleAppointmentModal";
import CancelAppointmentModal from "./CancelAppointmentModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/users/usersSlice";
import Loader from "../Global/Loader";

const AppointmentsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>Something went wrong.</p>;
  }

  const navigateToPatientProfile = () => {
    navigate("/patients/405u4305u");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleCancelModal = () => {
    setShowCancelModal(!showCancelModal);
  };

  return (
    <div className="w-full flex justify-center mt-5 pb-5">
      <div class="relative overflow-x-auto sm:rounded-lg w-full">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-900 rounded-lg">
          <thead class="text-xs text-gray-700 uppercase bg-[#1c1c1c]/50">
            <tr>
              <th scope="col" class="px-6 py-4 text-white">
                #
              </th>
              <th scope="col" class="px-6 py-4 text-white">
                Patient
              </th>
              <th scope="col" class="px-6 py-4 text-white">
                Status
              </th>
              <th scope="col" class="px-6 py-4 text-white">
                Appointment
              </th>
              <th scope="col" class="px-6 py-4 text-white">
                Doctor
              </th>
              <th scope="col" class="px-6 py-4 text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {users &&
              users?.users?.map((user) => (
                <tr
                  key={user?.id}
                  class="py-2 hover:bg-slate-700/20 transition-all duration-300"
                >
                  <th
                    scope="row"
                    onClick={navigateToPatientProfile}
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {`${user?.firstName} ${user?.lastName}`}
                  </th>
                  <td class="px-6 py-4">
                    <div className="bg-red-100 text-red-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-red-950 dark:text-red-500">
                      <TbAlertTriangle className="text-red-500 text-[15px]" />
                      Cancelled
                    </div>
                  </td>
                  <td class="px-6 py-4">Jul 2, 2024, 10:30 AM</td>
                  <td class="px-6">
                    <span className="flex items-center gap-2">
                      <img
                        src={
                          user?.image
                            ? user?.image
                            : "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                        }
                        alt="doctor profile"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>Dr. Leila Cameron</span>
                    </span>
                  </td>
                  <td class="px-6 py-4 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={toggleModal}
                      class="font-medium text-[#24AE7C] dark:text-[#24AE7C] hover:underline"
                    >
                      Schedule
                    </button>
                    <button
                      type="button"
                      onClick={toggleCancelModal}
                      class="font-medium hover:underline"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))} */}
            <tr class="py-2 hover:bg-slate-700/20 transition-all duration-300">
              <td class="px-6 py-4">2</td>
              <th
                scope="row"
                onClick={navigateToPatientProfile}
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nikky Eya
              </th>
              <td class="px-6 py-4">
                <div className="bg-red-100 text-indigo-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-indigo-950 dark:text-indigo-500">
                  <CgSandClock className="text-indigo-500 text-[15px]" />
                  Pending
                </div>
              </td>
              <td class="px-6 py-4">Jul 2, 2024, 10:30 AM</td>
              <td class="px-6">
                <span className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                    alt="doctor profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Dr. Leila Cameron</span>
                </span>
              </td>
              <td class="px-6 py-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  class="font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  Schedule
                </button>
                <button
                  type="button"
                  onClick={toggleCancelModal}
                  class="font-medium hover:underline"
                >
                  Cancel
                </button>
              </td>
            </tr>
            <tr class="py-2 hover:bg-slate-700/20 transition-all duration-300">
              <td class="px-6 py-4">3</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nikky Eya
              </th>
              <td class="px-6 py-4">
                <div className="bg-red-100 text-green-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-green-950 dark:text-green-500">
                  <MdCheck className="text-green-500 text-[15px]" />
                  Scheduled
                </div>
              </td>
              <td class="px-6 py-4">Jul 2, 2024, 10:30 AM</td>
              <td class="px-6">
                <span className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                    alt="doctor profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Dr. Leila Cameron</span>
                </span>
              </td>
              <td class="px-6 py-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  class="font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  Schedule
                </button>
                <button
                  type="button"
                  onClick={toggleCancelModal}
                  class="font-medium hover:underline"
                >
                  Cancel
                </button>
              </td>
            </tr>
            <tr class="py-2 hover:bg-slate-700/20 transition-all duration-300">
              <td class="px-6 py-4">4</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nikky Eya
              </th>
              <td class="px-6 py-4">
                <div className="bg-red-100 text-red-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-red-950 dark:text-red-500">
                  <TbAlertTriangle className="text-red-500 text-[15px]" />
                  Cancelled
                </div>
              </td>
              <td class="px-6 py-4">Jul 2, 2024, 10:30 AM</td>
              <td class="px-6">
                <span className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                    alt="doctor profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Dr. Leila Cameron</span>
                </span>
              </td>
              <td class="px-6 py-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  class="font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  Schedule
                </button>
                <button
                  type="button"
                  onClick={toggleCancelModal}
                  class="font-medium hover:underline"
                >
                  Cancel
                </button>
              </td>
            </tr>
            <tr class="py-2 hover:bg-slate-700/20 transition-all duration-300">
              <td class="px-6 py-4">5</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nikky Eya
              </th>
              <td class="px-6 py-4">
                <div className="bg-red-100 text-indigo-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-indigo-950 dark:text-indigo-500">
                  <CgSandClock className="text-indigo-500 text-[15px]" />
                  Pending
                </div>
              </td>
              <td class="px-6 py-4">Jul 2, 2024, 10:30 AM</td>
              <td class="px-6">
                <span className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                    alt="doctor profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Dr. Leila Cameron</span>
                </span>
              </td>
              <td class="px-6 py-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  class="font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  Schedule
                </button>
                <button
                  type="button"
                  onClick={toggleCancelModal}
                  class="font-medium hover:underline"
                >
                  Cancel
                </button>
              </td>
            </tr>
            <tr class="py-2 hover:bg-slate-700/20 transition-all duration-300">
              <td class="px-6 py-4">6</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nikky Eya
              </th>
              <td class="px-6 py-4">
                <div className="bg-red-100 text-green-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-green-950 dark:text-green-500">
                  <MdCheck className="text-green-500 text-[15px]" />
                  Scheduled
                </div>
              </td>
              <td class="px-6 py-4">Jul 2, 2024, 10:30 AM</td>
              <td class="px-6">
                <span className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                    alt="doctor profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Dr. Leila Cameron</span>
                </span>
              </td>
              <td class="px-6 py-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  class="font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  Schedule
                </button>
                <button
                  type="button"
                  onClick={toggleCancelModal}
                  class="font-medium hover:underline"
                >
                  Cancel
                </button>
              </td>
            </tr>
            <tr class="py-2 hover:bg-slate-700/20 transition-all duration-300">
              <td class="px-6 py-4">7</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nikky Eya
              </th>
              <td class="px-6 py-4">
                <div className="bg-red-100 text-red-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-red-950 dark:text-red-500">
                  <TbAlertTriangle className="text-red-500 text-[15px]" />
                  Cancelled
                </div>
              </td>
              <td class="px-6 py-4">Jul 2, 2024, 10:30 AM</td>
              <td class="px-6">
                <span className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                    alt="doctor profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Dr. Leila Cameron</span>
                </span>
              </td>
              <td class="px-6 py-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  class="font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  Schedule
                </button>
                <button
                  type="button"
                  onClick={toggleCancelModal}
                  class="font-medium hover:underline"
                >
                  Cancel
                </button>
              </td>
            </tr>
            <tr class="py-2 hover:bg-slate-700/20 transition-all duration-300">
              <td class="px-6 py-4">8</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nikky Eya
              </th>
              <td class="px-6 py-4">
                <div className="bg-red-100 text-indigo-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-indigo-950 dark:text-indigo-500">
                  <CgSandClock className="text-indigo-500 text-[15px]" />
                  Pending
                </div>
              </td>
              <td class="px-6 py-4">Jul 2, 2024, 10:30 AM</td>
              <td class="px-6">
                <span className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                    alt="doctor profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Dr. Leila Cameron</span>
                </span>
              </td>
              <td class="px-6 py-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  class="font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  Schedule
                </button>
                <button
                  type="button"
                  onClick={toggleCancelModal}
                  class="font-medium hover:underline"
                >
                  Cancel
                </button>
              </td>
            </tr>
            <tr class="py-2 hover:bg-slate-700/20 transition-all duration-300">
              <td class="px-6 py-4">8</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nikky Eya
              </th>
              <td class="px-6 py-4">
                <div className="bg-red-100 text-green-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-green-950 dark:text-green-500">
                  <MdCheck className="text-green-500 text-[15px]" />
                  Scheduled
                </div>
              </td>
              <td class="px-6 py-4">Jul 2, 2024, 10:30 AM</td>
              <td class="px-6">
                <span className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                    alt="doctor profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Dr. Leila Cameron</span>
                </span>
              </td>
              <td class="px-6 py-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  class="font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  Schedule
                </button>
                <button
                  type="button"
                  onClick={toggleCancelModal}
                  class="font-medium hover:underline"
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ScheduleAppointmentModal showModal={showModal} onclick={toggleModal} />
      <CancelAppointmentModal
        showCancelModal={showCancelModal}
        onclick={toggleCancelModal}
      />
    </div>
  );
};

export default AppointmentsList;
