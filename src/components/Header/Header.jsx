import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
const Header = () => {
     const navigate = useNavigate();
     return (
          <header className="bg-slate-200 shadow-md">
               <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                    <h1
                         onClick={() => {
                              navigate("/");
                         }}
                         className="font-bold text-sm sm:text-xl flex flex-wrap"
                    >
                         <span className="!text-slate-500">Gradution</span>
                         <span className="!text-slate-700">Trip</span>
                    </h1>
                    <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                         <input type="text" placeholder="Search" className="bg-transparent focus:outline-none w-24  sm:w-64" />
                         <FaSearch classname="text-slate-600" />
                    </form>
                    <ul className="flex gap-4 mb-0">
                         <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                         <li className="hidden sm:inline text-slate-700 hover:underline">Travel guides</li>
                         <li className="hidden sm:inline text-slate-700 hover:underline">Hotel</li>
                         <li className="hidden sm:inline text-slate-700 hover:underline">Deals</li>
                         <li className=" text-slate-700 hover:underline">Sign In</li>
                    </ul>
               </div>
          </header>
     );
};

export default Header;
