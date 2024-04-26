import React from "react";
import avatar1 from "../../assets/image/avatar1.png";
import Star from "./Star/Star";
import Button from "./Button/Button";
import Profile from "./Profile/Profile";
import Description from "./Description/Description";
import avatar2 from "../../assets/image/avatar2.png";
import avatar3 from "../../assets/image/avatar3.png";
import avatar4 from "../../assets/image/avatar4.png";
import StarIcon from "../../assets/image/StarIcon.png";
import HalfStarIcon from "../../assets/image/HalfStarIcon.png";
import StarColorlessIcon from "../../assets/image/StarColorlessIcon.png";

function Table() {
  return (
    <div className="m-5">
      {/* Header */}
      <div className="justify-between flex">
        <div className="flex flex-col ">
          <p className="font-bold text-gray-600 text-xl">New Arrivals</p>
          <p className=" text-gray-400 text-sm">More than 400+ new members</p>
        </div>
        <div className=" flex gap-3">
          <button className="rounded bg-blue-500 px-4 text-sm my-2 text-white font-semibold">
            New Report
          </button>
          <button className="rounded bg-red-500 text-sm px-4 my-2 text-white font-semibold">
            Create
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col gap-7">
        {/* HeaderTable */}
        <div className="bg-[#F3F6F9] py-3 grid-cols-7 grid-rows-1 grid my-auto rounded">
          <p className="font-bold text-xs text-gray-700 pl-3 col-span-2">
            PRODUCTS
          </p>
          <p className="font-bold text-xs text-gray-400 col-span-1">EARNINGS</p>
          <p className="font-bold text-xs text-gray-400 col-span-1">
            COMISSION
          </p>
          <p className="font-bold text-xs text-gray-400 col-span-1">COMPANY</p>
          <p className="font-bold text-xs text-gray-400 col-span-1">RATING</p>
        </div>

        {/* Row1 */}

        <div className="grid-cols-7 grid-rows-1 grid items-center ">
          <Profile
            title="Brad Simmons"
            description={"HTML,JS, ReactJS"}
            imageSrc={avatar1}
          />

          <Description Row1="$8.000.000" Row2={"In Proccess"} />

          <Description Row1="$520" Row2={"Paid"} />

          <Description Row1="Intertico" Row2={"Web, Ul/UX Design"} />

          <Description
            Row1={
              <>
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
              </>
            }
            Row2={"Best Rated"}
          />

          <div className="my-auto justify-end flex">
            <Button />
          </div>
        </div>

        {/* Row2 */}

        <div className="grid-cols-7 grid-rows-1 grid items-center">
          <Profile
            title="Jessie Clarcson"
            description={"C#, ASP,NET, MS SQL"}
            imageSrc={avatar2}
          />
          <Description Row1="$23.000.000" Row2={"Pending"} />
          <Description Row1="$1.600" Row2={"Rejected"} />
          <Description Row1="Agoda" Row2={"Houses & Hotels"} />
          <Description
            Row1={
              <>
                {" "}
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={HalfStarIcon} />
              </>
            }
            Row2={"Abave Avarage"}
          />

          <div className="my-auto justify-end flex">
            <Button />
          </div>
        </div>

        {/* Row3 */}

        <div className="grid-cols-7 grid-rows-1 grid items-center">
          <Profile
            title="Lebron Wayde"
            description={"PHP, :aravel , VueJS"}
            imageSrc={avatar3}
          />

          <Description Row1="$34.000.000" Row2={"Paid"} />

          <Description Row1="$6.700" Row2={"Paid"} />

          <Description Row1="RoadGee" Row2={"Transportation"} />

          <Description
            Row1={
              <>
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
              </>
            }
            Row2={"Best Rated"}
          />

          <div className="justify-end flex my-auto">
            <Button />
          </div>
        </div>

        {/* Row4 */}

        <div className="grid-cols-7 grid-rows-1 grid items-center">
          <Profile
            title="Natali Trump"
            description={"Python , PastgreSQL , ReactJS"}
            imageSrc={avatar4}
          />

          <Description Row1="$2.600.000" Row2={"Paid"} />
          <Description Row1="$14.000" Row2={"Pending"} />
          <Description Row1="The Hill" Row2={"Insurance"} />
          <Description
            Row1={
              <>
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={StarIcon} />
                <Star Star={HalfStarIcon} />
                <Star Star={StarColorlessIcon} />
              </>
            }
            Row2={"Avarage"}
          />

          <div className="justify-end flex">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
