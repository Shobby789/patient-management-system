import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center w-full">
      <div class="inline-flex justify-end gap-3 mt-2 xs:mt-0 w-full">
        <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-slate-700/20 rounded-s hover:bg-slate-700/20 dark:bg-slate-700/20 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-700/20 dark:hover:text-white">
          Prev
        </button>
        <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-slate-700/20 border-0 border-s border-gray-700 rounded-e hover:bg-slate-700/20 dark:bg-slate-700/20 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-700/20 dark:hover:text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
