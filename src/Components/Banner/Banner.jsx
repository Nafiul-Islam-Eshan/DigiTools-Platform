import React from "react";
import BannerImg from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="hero w-full md:w-[75%] mx-auto my-10">
      <div className="hero-content w-full p-4 md:p-0 flex-col lg:flex-row-reverse justify-between content-center ">
        <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />

        <div className="max-w-160">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-3">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
              Explore Products
            </button>
            <button class="btn rounded-full border-2 border-[#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
              <span class=" text-[#9748FF]  group-hover:text-white flex items-center gap-1">
                <IoPlayOutline />
                Watch Demo
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
