import React, { useState } from "react";
import Image from "../atoms/Image";

function Checkbox(imageSrc, imageAlt = "image checkbox") {
  const [checked, setChecked] = useState(false);

  return (
    <label
      className={`w-[296px] h-[153px] relative rounded-[16px] border-2 flex items-center justify-center cursor-pointer ${
        checked ? " border-black" : "bg-white border-gray-300"
      } hover:border-orange-500 hover:bg-orange-500`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />

      <Image src={imageSrc} alt={imageAlt} />

      {checked && (
        <span className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full border-2 border-gray-700" />
      )}
    </label>
  );
}

export default Checkbox;
