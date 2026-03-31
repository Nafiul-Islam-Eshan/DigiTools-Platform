import React from "react";
import user from "../../assets/user.png";
import pack from '../../assets/package.png';
import rocket from '../../assets/rocket.png'

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] py-30 ">
      {/* Container div */}
      <div className=" w-full md:w-[75%] mx-auto space-y-5">
        {/* Header */}
        <div className="space-y-1.5">
          <h1 className="text-center text-4xl font-bold">
            Get Started In 3 Steps
          </h1>
          <p className="text-center opacity-60">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 justify-center items-center">
          {/* Card 1 */}
          <div className="card bg-base-200 w-90 shadow-sm mx-auto">
            <div className="card-body justify-center items-center relative py-15">
              <div className="badge mask mask-circle bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white rounded-full absolute top-2 right-2">
                01
              </div>
              <div className="w-20 h-20 bg-[#f0eafe] rounded-full p-2">
                <img src={user} alt="" />
              </div>
              <h2 className="card-title text-xl">Create Account</h2>
              <p className="text-center opacity-60">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-base-200 w-90 shadow-sm mx-auto">
            <div className="card-body justify-center items-center relative py-15">
              <div className="badge mask mask-circle bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white rounded-full absolute top-2 right-2">
                02
              </div>
              <div className="w-20 h-20 bg-[#f0eafe] rounded-full p-2">
                <img src={pack} alt="" />
              </div>
              <h2 className="card-title text-xl">Choose Products</h2>
              <p className="text-center opacity-60">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card bg-base-200 w-90 shadow-sm mx-auto">
            <div className="card-body justify-center items-center relative py-15">
              <div className="badge mask mask-circle bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white rounded-full absolute top-2 right-2">
                03
              </div>
              <div className="w-20 h-20 bg-[#f0eafe] rounded-full p-2">
                <img src={rocket} alt="" />
              </div>
              <h2 className="card-title text-xl">Start Creating</h2>
              <p className="text-center opacity-60">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
