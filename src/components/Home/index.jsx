import burger from "../../assets/image/burger.png";
import React, { useState } from "react";
import Card from "./Card/Card";
import OrderText from "./OrderText/OrderText";
import { foodData } from "../../constants/mock-data";

function Burger() {
  const [quantity, setQuantity] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  let totalOrders = quantity.reduce((n, { totalPrice }) => n + totalPrice, 0);
  console.log(totalOrders);

  return (
    <div className="flex bg-[#00688e] h-screen gap-4">
      <div className="flex flex-col w-[70%] rounded-xl bg-[#00c8c4] m-4 shadow-slate-600 shadow-2xl ">
        <h1 className="text-white mx-auto font-bold p-3 m-5 text-3xl">
          رستوران مک دونالد شعبه تهرانپارس
        </h1>{" "}
        <img src="" alt="" />
        <div className="grid grid-cols-2 gap-5 ml-5 mt-4 overflow-auto grid-flow-row mb-7 pl-2 pr-7">
          {foodData.map((item) => (
            <Card
              product={item}
              quantity={quantity}
              setQuantity={setQuantity}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-[30%] rounded-xl bg-[#00c8c4] m-3 h-fit p-5 gap-20  shadow-slate-600 shadow-2xl">
        <div className="flex flex-col gap-4 mt-3">
          <OrderText text={"جمع کل سفارشات"} pricefood={totalOrders}></OrderText>
          <OrderText text={"حق سرویس و کارمزد"} pricefood={totalOrders*0.09}></OrderText>
          <OrderText text={"جمع کل سفارشات"} pricefood={totalOrders + totalOrders*0.09}></OrderText>
          <div className=" flex">
            <input
              type="text"
              placeholder="gold"
              className="w-full pr-2 rounded-r-md"
            />
            <p className="p-2 bg-[#008292] text-white rounded-l-md">✓</p>
          </div>
        </div>

        <div className="gap-3 flex flex-col mb-2">
          <OrderText
            text={"جمع کل سفارشات"}
            pricefood={totalOrders}
            bgColor={"bg-[#ffdb02] px-2 py-1 rounded-md"}
          ></OrderText>
          <button className="w-full bg-[#008292] py-2 text-white rounded-md">
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
}

export default Burger;
