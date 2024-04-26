import React from "react";
import { useState } from "react";
import { ROUTE } from "../../../constants/routes";
import burger from "../../../assets/image/burger.png";

// function Card({ product, quantity, setQuantity, totalPrice, setTotalPrice }) {
//   function sum() {
//     const foundQty = quantity.findIndex((item) => item.id === product.id);
//     if (foundQty !== -1) {
//       const quantityCopy = [...quantity];
//       const totalPriceCopy = [...totalPrice];

//       totalPriceCopy[foundQty] =
//       totalPriceCopy[foundQty] + product.pricefood;

//       setTotalPrice(totalPriceCopy);
//       quantityCopy[foundQty].qty++;
//       quantityCopy[foundQty].totalPrice =
//         quantityCopy[foundQty].qty * product.pricefood;
//       setQuantity(quantityCopy);
//       setTotalPrice(quantityCopy[foundQty].totalPrice);
//     } else {
//       setQuantity([
//         ...quantity,
//         {
//           id: product.id,
//           qty: 1,
//           totalPrice: product.pricefood,
//         },
//       ]);
//       setTotalPrice(totalPrice);
//     }
//   }

//   function subtraction() {
//     const foundQty = quantity.findIndex((item) => item.id === product.id);
//     if (quantity[foundQty].qty > 0 && foundQty !== -1) {
//       const quantityCopy = [...quantity];
//       quantityCopy[foundQty].qty--;
//       quantityCopy[foundQty].totalPrice =
//         quantityCopy[foundQty].qty * product.pricefood;
//       setQuantity(quantityCopy);
//       totalPrice =   quantity[foundQty].totalPrice

//       setTotalPrice(quantityCopy[foundQty].totalPrice);
//     } else {
//       setQuantity([
//         ...quantity,
//         {
//           id: product.id,
//           qty: 0,
//           totalPrice: 0,
//         },
//       ]);
//       totalPrice =   quantity[foundQty].totalPrice
//       setTotalPrice(0);
//     }
//   }

//   return (
//     <div
//       className="flex bg-[#def3fd] relative p-2  shadow-slate-400 shadow-lg gap-3 rounded-xl items-center parent "
//       id={product.id}
//     >
//       {/* <div>{ROUTE.home}</div> */}
//       <img className="w-16 h-16" src={product.imagesrc}></img>
//       <div className="flex flex-col justify-between my-2">
//         <p className="font-bold text-lg">{product.namefood}</p>
//         <div className="flex gap-1">
//           <p>{product.pricefood}</p>
//           <p>تومان</p>
//         </div>
//         <div className="flex text-center mt-3 w-fit">
//           <span
//             className="bg-[#008292] w-5 text-white  rounded-r-md cursor-pointer"
//             onClick={sum}
//           >
//             +
//           </span>
//           <span className=" quantity px-1 w-8" id="">
//             {quantity.find((item) => item.id === product.id)?.qty || 0}
//           </span>
//           <span
//             className="bg-[#008292] w-5 text-white rounded-l-md cursor-pointer"
//             onClick={subtraction}
//           >
//             -
//           </span>
//         </div>
//       </div>

//       <div className="absolute bottom-3 left-3 flex gap-1">
//         <span>{totalPrice || 0}</span>
//         <span>تومان</span>
//       </div>
//     </div>
//   );
// }

// export default Card;

function Card({ product, quantity, setQuantity }) {
  const [totalPrice, setTotalPrice] = useState(0);

  function sum() {
    const foundQty = quantity.findIndex((item) => item.id === product.id);
    if (foundQty !== -1) {
      const quantityCopy = [...quantity];
      quantityCopy[foundQty].qty++;
      quantityCopy[foundQty].totalPrice =
        quantityCopy[foundQty].qty * product.pricefood;
      setQuantity(quantityCopy);
      setTotalPrice(quantityCopy[foundQty].totalPrice);
    } else {
      setQuantity([
        ...quantity,
        {
          id: product.id,
          qty: 1,
          totalPrice: product.pricefood,
        },
      ]);
      setTotalPrice(product.pricefood);
    }
  }

  function subtraction() {
    const foundQty = quantity.findIndex((item) => item.id === product.id);
    if (quantity[foundQty].qty > 0 && foundQty !== -1) {
      const quantityCopy = [...quantity];
      quantityCopy[foundQty].qty--;
      quantityCopy[foundQty].totalPrice =
        quantityCopy[foundQty].qty * product.pricefood;
      setQuantity(quantityCopy);
      setTotalPrice(quantityCopy[foundQty].totalPrice);
    } else {
      setQuantity([
        ...quantity,
        {
          id: product.id,
          qty: 0,
          totalPrice: 0,
        },
      ]);
      setTotalPrice(0);
    }
  }

  return (
    <div
      className="flex bg-[#def3fd] relative p-2  shadow-slate-400 shadow-lg gap-3 rounded-xl items-center parent "
      id={product.id}
    >
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
          <span className=" quantity px-1 w-8" id="">
            {quantity.find((item) => item.id === product.id)?.qty || 0}
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
        <span>{totalPrice || 0}</span>
        <span>تومان</span>
      </div>
    </div>
  );
}

export default Card;
