import React from "react";

const Tabs = ({ setActiveTab, cards}) => {
  
  return (
    <div className="my-10">
      <div className="tabs tabs-box bg-transparent justify-center gap-5">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab  rounded-full px-20 checked:bg-linear-to-r! checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white!"
          aria-label="Products"
          defaultChecked
          onClick={()=> setActiveTab("product")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full px-20 checked:bg-linear-to-r! checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white!"
          aria-label={`Cart (${cards.length})`}
          onClick={()=> setActiveTab("cart")}
        />
      </div>
    </div>
  );
};

export default Tabs;
