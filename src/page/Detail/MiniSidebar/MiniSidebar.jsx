import React, { useState } from "react";
import { FaHome, FaSearch, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import logo from "../../../assets/images/logo.png";
import { Input, Typography } from "antd";
import { IoIosLogOut } from "react-icons/io";
import "./style.scss";
const MiniSidebar = () => {
     const [expand, setExpand] = useState(true);

     const toggleSidebar = () => {
          setExpand(!expand);
     };
     return (
          <nav className={`sidebar ${!expand ? "close" : ""}`}>
               <header>
                    <div className="image-text">
                         {expand == true ? (
                              <>
                                   <span className="sidebar-image">
                                        <img alt="logo" src={logo} />
                                   </span>
                                   <div className="text flex-1 header-text">
                                        <span className="name">Graduation</span>
                                        <span className="profession">Web developer</span>
                                   </div>
                              </>
                         ) : (
                              <div className="!w-[60px] !h-[60px] bg-[red] rounded-[6px] text-[24px] text-[white] flex items-center justify-center font-bold">
                                   Gr
                              </div>
                         )}
                    </div>
               </header>
               <div className="sidebar-menu-bar">
                    <div className="sidebar-menu">
                         <li className="search-box">
                              <FaSearch className="icon" />
                              <Input className="pl-0" size="large" placeholder="Search . . ." />
                         </li>
                         <ul className="menu-links">
                              <li className="nav-links">
                                   <a href="#">
                                        <FaHome className="icon" />
                                        <span className="text nav-text">Home</span>
                                   </a>
                              </li>
                              <li className="nav-links">
                                   <a href="#">
                                        <FaHome className="icon" />
                                        <span className="text nav-text">Home</span>
                                   </a>
                              </li>
                              <li className="nav-links">
                                   <a href="#">
                                        <FaHome className="icon" />
                                        <span className="text nav-text">Home</span>
                                   </a>
                              </li>
                              <li className="nav-links">
                                   <a href="#">
                                        <FaHome className="icon" />
                                        <span className="text nav-text">Home</span>
                                   </a>
                              </li>
                              <li className="nav-links">
                                   <a href="#">
                                        <FaHome className="icon" />
                                        <span className="text nav-text">Home</span>
                                   </a>
                              </li>
                         </ul>
                    </div>
                    <div className="bottom-content">
                         <div onClick={toggleSidebar} className="cursor-pointer flex items-center gap-2 justify-end">
                              {expand == true ? <FaAngleDoubleLeft size={22} /> : <FaAngleDoubleRight size={22} />}
                              {expand == "true" && <Typography.Text>Hide bar</Typography.Text>}
                         </div>
                         <li className="logout">
                              <a href="#">
                                   <IoIosLogOut className="icon" />
                                   <span className="text nav-text">Logout</span>
                              </a>
                         </li>
                    </div>
               </div>
          </nav>
     );
};

export default MiniSidebar;
