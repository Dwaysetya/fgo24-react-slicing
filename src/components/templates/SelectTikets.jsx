import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function SelectTikets() {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
      <div className="flex flex-col gap-10">
        <label
          htmlFor="category"
          className="block mb-2 text-3xl font-semibold text-[#0F100D]"
        >
          Choose Date
        </label>
        <select
          id="category"
          value={selected}
          onChange={handleChange}
          className="border-1 border-black px-5 py-2 text-black rounded-full"
        >
          <CiSearch className="absolute top-1/2 text-gray-400 text-xl" />
          <option value="">Friday, 9 May, 2025</option>
          <option value="movie">LATEST</option>
          <option value="series">Series</option>
          <option value="anime">Anime</option>
        </select>
      </div>
      <div className="flex flex-col gap-10">
        <label
          htmlFor="category"
          className="block mb-2 text-3xl font-semibold text-[#0F100D]"
        >
          Choose Time
        </label>
        <select
          id="category"
          value={selected}
          onChange={handleChange}
          className="border-1 border-black px-5 py-2 text-black rounded-full"
        >
          <option value="">08.30 AM</option>
          <option value="movie">LATEST</option>
          <option value="series">Series</option>
          <option value="anime">Anime</option>
        </select>
      </div>
      <div className="flex flex-col gap-10">
        <label
          htmlFor="category"
          className="block mb-2 text-3xl font-semibold text-[#0F100D]"
        >
          Choose Location
        </label>
        <select
          id="category"
          value={selected}
          onChange={handleChange}
          className="border-1 border-black px-5 py-2 text-black rounded-full"
        >
          <option value="">Yogyakarta</option>
          <option value="movie">LATEST</option>
          <option value="series">Series</option>
          <option value="anime">Anime</option>
        </select>
      </div>
    </div>
  );
}

export default SelectTikets;
