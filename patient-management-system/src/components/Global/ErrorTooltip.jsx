import React from "react";
import { TbAlertTriangle } from "react-icons/tb";

const ErrorTooltip = ({ showTooltip, message }) => {
  return (
    <div
      className={`bg-red-100 text-red-800 flex items-center gap-2 w-28 justify-center py-2 text-xs font-medium me-2 px-2.5 rounded-full dark:bg-red-950 dark:text-red-500`}
    >
      <TbAlertTriangle className="text-red-500 text-[15px]" />
      {message}
    </div>
  );
};

export default ErrorTooltip;
