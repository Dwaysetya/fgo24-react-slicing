import React from "react";

const SeatGrid = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const colsLeft = [1, 2, 3, 4, 5, 6, 7];
  const colsRight = [8, 9, 10, 11, 12, 13, 14];

  const renderGrid = (cols) => (
    <div className="grid grid-rows-7 grid-cols-7 gap-1">
      {rows.map((row) =>
        cols.map((col) => (
          <input
            key={`${row}${col}`}
            type="checkbox"
            className="w-[26px] h-[26px] rounded cursor-pointer appearance-none checked:bg-blue-500 bg-gray-200 border border-gray-300 hover:ring-2 hover:ring-offset-1 hover:ring-blue-300"
          />
        ))
      )}
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex justify-center">
        <div className="flex flex-col justify-between mr-2 text-sm font-medium">
          {rows.map((e) => (
            <span key={e} className="h-[26px] leading-[26px] text-center">
              {e}
            </span>
          ))}
        </div>
        <div className="flex gap-10">
          {renderGrid(colsLeft)}
          {renderGrid(colsRight)}
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-2 text-sm font-medium mr-12">
        <div className="w-[26px]"></div>
        <div className="grid grid-cols-7 gap-1">
          {colsLeft.map((c) => (
            <span key={c} className="w-[26px] text-center">
              {c}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {colsRight.map((c) => (
            <span key={c} className="w-[26px] text-center">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatGrid;
