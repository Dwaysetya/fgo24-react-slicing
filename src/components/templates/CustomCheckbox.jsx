import React from "react";
import Checkbox from "../organisms/Checkbox";
import logoEbu from "../../assets/images/footer/ebu.svg";
import logoHiflix from "../../assets/images/footer/hiflix.svg";
import logoCine from "../../assets/images/footer/cineone.svg";

function CustomCheckbox() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
      <Checkbox imageSrc={logoEbu} imageAlt="logo ebu" className="w-14 h-14" />
      <Checkbox imageSrc={logoHiflix} />
      <Checkbox imageSrc={logoCine} />
      <Checkbox imageSrc={logoEbu} />
    </div>
  );
}

export default CustomCheckbox;
