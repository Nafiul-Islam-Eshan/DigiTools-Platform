import React from "react";
import ShoppingCard from "../../assets/products/shopping-cart.png";

const Navbar = () => {
  return (
    <div class="w-full mx-auto fixed top-0 z-50 inset-x-0 bg-white">
      <div className="navbar w-full md:w-[75%] mx-auto ">
        {/* Starting part */}
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2"
            >
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/Testimonials">Testimonials</a>
              </li>
              <li>
                <a href="FAQ">FAQ</a>
              </li>{" "}
            </ul>
          </div>
          <div className="">
            <span className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
              DigiTools
            </span>
          </div>
        </div>

        {/* Middle part */}
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/Testimonials">Testimonials</a>
            </li>
            <li>
              <a href="FAQ">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Ending part */}
        <div class="navbar-end gap-3">
          {/* Shopping card */}
          <div className="indicator">
            <img className="size-5" src={ShoppingCard} alt="" />
            <span className="badge badge-sm indicator-item ">0</span>
          </div>
          <p className="">Login</p>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
