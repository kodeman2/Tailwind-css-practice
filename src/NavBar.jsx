import React from "react";
import logo from "./assets/logo.png";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Navbar() {
const [nav, setNav] = useState(false);

const hidemenubar = () => {
  setNav(!nav);
};

 return (
    <div className="w-full h-[80px]">
      <div className="px-4 flex justify-between items-center h-full w-full bg-green-700">
        <div className="items-center flex">
          <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
          <h1 className="text-white font-bold text-2xl ml-2">House App</h1>
        </div>
        <div className="pr-4 flex">
          <ul className="hidden md:flex font-bold text-sm mr-10">
            <li className="pr-4 text-white">Home</li>
            <li className="pr-4 text-white">Courss</li>
            <li className="pr-4 text-white">About</li>
            <li className="pr-4 text-white">Contact</li>
            <li className=" text-red-500">Login</li>
          </ul>
          <div className="md:hidden">
           <Icon icon={nav ? "material-symbols:cancel-outline" :"dashicons:menu-alt3" } className="text-white text-2xl" onClick={hidemenubar} /> 
          </div>
        </div>


      </div>
       { nav ? <div className="md:hidden ">
        <ul className="md:hidden font-bold text-sm mr-10 text-white bg-black w-full p-4">
            <li className="p-2 text-white">Home</li>
            <li className="p-2 text-white">Courses</li>
            <li className="p-2 text-white">About</li>
            <li className="p-2 text-white">Contact</li><hr/>
            <li className=" text-red-500 p-2">Login</li>
          </ul>
        </div> : null }
    </div>
  );
}
