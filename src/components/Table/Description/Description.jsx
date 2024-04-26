import React from "react";

function Description({ Row1, Row2 }) {
  return (
    <div className="flex flex-col gap-2 col-span-1">
      <p className="font-bold text-gray-600 flex">{Row1}</p>
      <p className="text-gray-400 text-sm">{Row2}</p>
    </div>
  );
}

export default Description;
