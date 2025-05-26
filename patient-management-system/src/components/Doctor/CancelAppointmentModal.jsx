import React from "react";

const CancelAppointmentModal = ({ showCancelModal, onclick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onclick();
  };
  return (
    showCancelModal && (
      <div
        id="crud-modal"
        tabindex="-1"
        aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[rgba(0,0,0,0.5)]"
      >
        <div class="relative p-4 w-full max-w-xl max-h-full z-50">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-[#1A1D21F5] p-5">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-5 rounded-t dark:border-gray-600">
              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white">
                  Cancel Appointment
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Please fill in the following details to schedule appointment.
                </p>
              </div>
              <button
                type="button"
                onClick={onclick}
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} class="p-4 md:p-5">
              <div class="flex flex-col items-start gap-4 mb-4">
                <div class="w-full mb-2">
                  <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Reason for cancellation{" "}
                    <span className="text-red-400 text-base">*</span>
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-full text-center"
              >
                Cancel Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default CancelAppointmentModal;
