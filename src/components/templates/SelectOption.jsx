import React, { useState } from "react";

function SelectOption() {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="p-4">
      <select
        id="category"
        value={selected}
        onChange={handleChange}
        className="border border-gray-300 px-5 py-2 bg-[#E95102] text-white rounded-full"
      >
        <option value="">POPULAR </option>
        <option value="movie">LATEST</option>
        <option value="series">Series</option>
        <option value="anime">Anime</option>
      </select>
    </div>
  );
}

export default SelectOption;
