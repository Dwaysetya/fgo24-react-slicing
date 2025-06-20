import dayjs from "dayjs";
import "dayjs/locale/id";
dayjs.locale("id");

function SelectTikets({ formData = {}, onChange }) {
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = dayjs().add(i, "day");
    return {
      value: date.format("YYYY-MM-DD"),
      label: date.format("dddd, D MMMM YYYY"),
    };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
      <div className="flex flex-col gap-10">
        <label className="block mb-2 text-3xl font-semibold text-[#820f15]">
          Choose Date
        </label>
        <select
          requaried
          value={formData.date || ""}
          onChange={(e) => onChange("date", e.target.value)}
          className="border-1 border-[#820f15] px-5 py-2 text-black rounded-full"
        >
          <option value="">Pilih tanggal</option>
          {dates.map((date) => (
            <option key={date.value} value={date.value}>
              {date.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-10">
        <label className="block mb-2 text-3xl font-semibold text-[#820f15]">
          Choose Time
        </label>
        <select
          required
          value={formData.time}
          onChange={(e) => onChange("time", e.target.value)}
          className="border-1 border-[#820f15] px-5 py-2 text-black rounded-full"
        >
          <option value="">Pilih waktu</option>
          <option value="12:05">12.05 PM</option>
          <option value="15:25">15.25 PM</option>
          <option value="16:30">16.30 PM</option>
          <option value="18:45">18.45 PM</option>
          <option value="19:45">19.45 PM</option>
        </select>
      </div>
      <div className="flex flex-col gap-10">
        <label className="block mb-2 text-3xl font-semibold text-[#820f15]">
          Choose Location
        </label>
        <select
          requaried
          value={formData.location}
          onChange={(e) => onChange("location", e.target.value)}
          className="border-1 border-[#820f15] px-5 py-2 text-black rounded-full"
        >
          <option value="">Pilih lokasi</option>
          <option value="Yogyakarta">Jakarta</option>
          <option value="Yogyakarta">Depok</option>
          <option value="Yogyakarta">Yogyakarta</option>
          <option value="Yogyakarta">Bandung</option>
          <option value="Yogyakarta">Bogor</option>
        </select>
      </div>
    </div>
  );
}

export default SelectTikets;
