import React from 'react';
import Dashboard from "./Dashboard.svg";
import Home from "./Home.svg";
import Practice from "./Practice.svg";
import E from "./E.svg";
import switcha from "./switcha.svg";
import Profile from "./Profile.svg";
import zegeju from "./zegeju.svg";

function MenuOverlay() {
  return (
    <div className="menu-overlay fixed w-full md:w-[10px] h-full z-50 flex ml-[179px] md:ml-0">
      <div className="menu absolute w-[204px] h-[582px] md:h-[200px] bg-white rounded-tl-none rounded-tr-none rounded-bl-full">
        <img className="w-[110px] h-[55px] ml-[55px] mt-[43px] hidden md:block" src={zegeju} alt="Logo" />
        <ul className="ml-[60px]">
          <li className="mt-[55px] md:mt-[40px]">
            <button className="flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg">
              <img className="w-[19px] h-[19px] mr-1.5" src={Home} alt="Home Icon" />
              <p className="font-bold text-[16px]">Home</p>
            </button>
          </li>
          <li className="mt-[35px]">
            <button className="flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg">
              <img className="w-[19px] h-[19px] mr-1.5" src={Profile} alt="Profile Icon" />
              <p className="font-bold text-[16px]">Profile</p>
            </button>
          </li>
          <li className="mt-[35px]">
            <button className="flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg">
              <img className="w-[19px] h-[19px] mr-1.5" src={Practice} alt="Practice Icon" />
              <p className="font-bold text-[16px]">Practice</p>
            </button>
          </li>
          <li className="mt-[35px]">
            <button className="flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg">
              <img className="w-[19px] h-[19px] mr-1.5" src={E} alt="Result Icon" />
              <p className="font-bold text-[16px]">Result</p>
            </button>
          </li>
          <li className="mt-[35px]">
            <button className="flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg">
              <img className="w-[19px] h-[19px] mr-1.5" src={Dashboard} alt="Dashboard Icon" />
              <p className="font-bold text-[16px]">Dashboard</p>
            </button>
          </li>
          <li className="mt-[30px]">
            <button className="flex items-center  w-[170px] h-[30px] hover:bg-green-100 rounded-lg">
              <img className="w-[19px] h-[19px] mr-1.5" src={switcha} alt="Logout Icon" />
              <p className="font-bold text-[16px]">Logout</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuOverlay;