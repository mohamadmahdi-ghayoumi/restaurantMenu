import React from "react";

function OrderText({ text, pricefood, bgColor }) {
  return (
    <div className={`flex justify-between font-bold text-gray-800 ${bgColor}`}>
      <div>{text}</div>
      <div className="flex gap-2 ">
        <p>{pricefood}</p>
        <p>تومان</p>
      </div>
    </div>
  );
}

export default OrderText;
