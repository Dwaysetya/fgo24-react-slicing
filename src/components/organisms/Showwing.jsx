import React from "react";
import FindMovie from "../molecules/FindMovie";
import Filters from "../molecules/Filters";

function Showwing() {
  return (
    <div className="flex gap-30">
      <div className="w-[30%]">
        <FindMovie />
      </div>
      <div>
        <Filters />
      </div>
    </div>
  );
}

export default Showwing;
