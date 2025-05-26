import React from "react";
import { LuRefreshCw } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const Filters = () => {
  return (
    <div className="w-full mt-7 flex items-center justify-end gap-2">
      <div className="w-[250px] flex items-center justify-between gap-2 bg-slate-700/20 rounded-md px-2">
        <input
          type="text"
          placeholder="Search here"
          className="w-full px-1 py-2 text-xs bg-transparent outline-none text-gray-400"
        />
        <button type="button">
          <CiSearch />
        </button>
      </div>
      <select
        name="rows"
        id="rows"
        className="text-gray-400 rounded-md text-xs bg-slate-700/20 outline-none px-2 py-1.5"
      >
        <option value="10" defaultValue={10}>
          10
        </option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
      <button
        type="button"
        className="py-[7px] bg-slate-700/20 px-3 rounded-md"
      >
        <LuRefreshCw className="text-sm text-gray-400" />
      </button>
    </div>
  );
};

export default Filters;
