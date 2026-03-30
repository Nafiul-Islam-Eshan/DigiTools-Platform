import React from "react";

const Achievement = () => {
  return (
    <div className="my-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full">
      <div className="text-white flex gap-5 w-[75%] mx-auto justify-evenly items-center py-7">
        {/* 1st achievement */}
        <div className="text-center ">
          <p className="text-4xl font-bold">50K+</p>
          <p className="">Active Users</p>
        </div>
        <div className="divider divider-horizontal before:bg-white/50 after:bg-white/50"></div>

        {/* 2nd achievement */}
        <div className="text-center ">
          <p className="text-4xl font-bold">200+</p>
          <p className="">Premium Tools</p>
        </div>
        <div className="divider divider-horizontal before:bg-white/50 after:bg-white/50"></div>

        {/* 3rd achievement */}
        <div className="text-center ">
          <p className="text-4xl font-bold">4.9</p>
          <p className="">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
