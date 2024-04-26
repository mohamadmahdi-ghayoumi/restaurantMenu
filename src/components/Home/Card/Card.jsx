import React from "react";
import { ROUTE } from "../../../constants/routes";

function Card({ imagesrc, namefood, pricefood, quantity, totalPrice }) {
  return (
    <div className="flex bg-[#def3fd] relative p-2  shadow-slate-500 shadow-lg6 gap-3 rounded-xl items-center ">
      {/* <div>{ROUTE.home}</div> */}
      <img className="w-16 h-16" src={imagesrc}></img>
      <div className="flex flex-col justify-between my-2">
        <p className="font-bold text-lg">{namefood}</p>
        <p>{pricefood}</p>
        <div className="flex text-center mt-3 w-fit">
          <span className="bg-[#008292] w-5 text-white  rounded-r-md cursor-pointer">+</span>
          <span className="  px-2">{quantity}</span>
          <span className="bg-[#008292] w-5 text-white rounded-l-md cursor-pointer">-</span>
        </div>
      </div>

      <span className="absolute bottom-3 left-3">{totalPrice}</span>
    </div>
  );
}

export default Card;
