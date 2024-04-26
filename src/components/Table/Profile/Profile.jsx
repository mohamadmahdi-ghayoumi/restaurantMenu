import React from "react";


function Profile({ title  , description, imageSrc }) {
  return (
    <div className="flex items-center gap-2 col-span-2 ">
      <img src={imageSrc} alt="" className="bg-[#F3F6F9] px-1 pt-2" />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-gray-600">{title}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Profile;