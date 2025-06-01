import React from "react";

function SelectTikets({ formData = {}, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
      <div className="flex flex-col gap-10">
        <label className="block mb-2 text-3xl font-semibold text-[#0F100D]">
          Choose Date
        </label>
        <select
          value={formData.date || ""}
          onChange={(e) => onChange("date", e.target.value)}
          className="border-1 border-black px-5 py-2 text-black rounded-full"
        >
          <option value="">Pilih tanggal</option>
          <option value="2025-05-09">Friday, 9 May, 2025</option>
        </select>
      </div>
      <div className="flex flex-col gap-10">
        <label className="block mb-2 text-3xl font-semibold text-[#0F100D]">
          Choose Time
        </label>
        <select
          value={formData.time}
          onChange={(e) => onChange("time", e.target.value)}
          className="border-1 border-black px-5 py-2 text-black rounded-full"
        >
          <option value="">Pilih waktu</option>
          <option value="08:30">08.30 AM</option>
        </select>
      </div>
      <div className="flex flex-col gap-10">
        <label className="block mb-2 text-3xl font-semibold text-[#0F100D]">
          Choose Location
        </label>
        <select
          value={formData.location}
          onChange={(e) => onChange("location", e.target.value)}
          className="border-1 border-black px-5 py-2 text-black rounded-full"
        >
          <option value="">Pilih lokasi</option>
          <option value="Yogyakarta">Yogyakarta</option>
        </select>
      </div>
    </div>
  );
}

export default SelectTikets;
