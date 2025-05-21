import React, { useState } from "react";
import logoEbu from "../../assets/images/footer/ebu.svg";
import logohiflix from "../../assets/images/footer/hiflix.svg";
import logocineone from "../../assets/images/footer/cineone.svg";

function Checkbox({
  imageSrc,
  imageAlt = "image checkbox",
  className,
  children,
}) {
  const [checked, setChecked] = useState(false);

  return (
    <label
      className={`relative rounded-[16px] border-2 flex items-center justify-center cursor-pointer transition-all duration-300
        ${className || "w-[296px] h-[153px]"}
        ${checked ? "border-black" : "bg-[#646464] border-gray-300"}
        hover:border-orange-500 hover:bg-orange-500`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      {children || <img src={imageSrc} alt={imageAlt} />}
      {checked && (
        <span className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full border-2 border-gray-700" />
      )}
    </label>
  );
}

function CustomCheckbox() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
      <Checkbox imageSrc={logoEbu} />
      <Checkbox imageSrc={logohiflix} />
      <Checkbox imageSrc={logocineone} />
      <Checkbox imageSrc={logoEbu} />
    </div>
  );
}

export default CustomCheckbox;
