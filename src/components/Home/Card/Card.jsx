import React from "react";
import { useState } from "react";

import { ROUTE } from "../../../constants/routes";
import burger from "../../../assets/image/burger.png";

function Card(product) {
  const [quantity, setQuantity] = useState(0);
  // const [price, setPrice] = useState(0);

  function sum() {
    setQuantity(quantity + 1);
  }

  function subtraction(e) {
    const quantitySpan = e.target
      .closest(".parent")
      .querySelector(".quantity").innerText;
    console.log(quantitySpan);
    quantitySpan > 0 ? setQuantity(quantity - 1) : setQuantity(quantity);
    // setQuantity(quantity + 1);
  }

  let totalPrice = +quantity * product.pricefood;
 

  return (
    <div
      className="flex bg-[#def3fd] relative p-2  shadow-slate-400 shadow-lg gap-3 rounded-xl items-center parent "
      id={product.id}
    >
      {/* <div>{ROUTE.home}</div> */}
      <img className="w-16 h-16" src={product.imagesrc}></img>
      <div className="flex flex-col justify-between my-2">
        <p className="font-bold text-lg">{product.namefood}</p>
        <div className="flex gap-1">
          <p>{product.pricefood}</p>
          <p>تومان</p>
        </div>
        <div className="flex text-center mt-3 w-fit">
          <span
            className="bg-[#008292] w-5 text-white  rounded-r-md cursor-pointer"
            onClick={sum}
          >
            +
          </span>
          <span className=" quantity px-2" id="">
            {quantity}
          </span>
          <span
            className="bg-[#008292] w-5 text-white rounded-l-md cursor-pointer"
            onClick={subtraction}
          >
            -
          </span>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 flex gap-1">
        <span>{totalPrice}</span>
        <span>تومان</span>
      </div>
    </div>
  );
}

export default Card;
