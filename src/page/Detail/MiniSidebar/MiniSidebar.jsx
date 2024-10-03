import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react";
import { FaHome, FaSearch, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import logo from "../../../assets/images/logo.png";
import { Input, Typography } from "antd";
import { IoIosLogOut } from "react-icons/io";
import "./style.scss";
import { useSelector } from "react-redux";
import { FaRegStickyNote } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoRestaurant } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
const MiniSidebar = () => {
     const { data } = useSelector((state) => state?.detail);
     const [expand, setExpand] = useState(true);
     const [listItems, setListItems] = useState();
     const toggleSidebar = () => {
          setExpand(!expand);
     };
     useEffect(() => {
          let listKeys = Object.keys(data);
          console.log("listKeys", listKeys);
          let newOptions = [];
          listKeys?.map((item) => {
               if (item !== "plan") {
                    newOptions.push({
                         key: item,
                         title: data[item].title,
                    });
               }
          });
          if (data?.plan?.data?.length > 0) {
               data?.plan?.data?.map((item) => {
                    newOptions.push({
                         key: item?.date,
                         title: item?.date,
                    });
               });
          }
          setListItems(newOptions);
     }, [data]);
     console.log("listItems", listItems, data);
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
                              {listItems?.map((item, index) => {
                                   if (item?.key !== "null") {
                                        return (
                                             <li className="nav-links">
                                                  <a href="#">
                                                       {item?.key == "notes" && <FaRegStickyNote className="icon" />}
                                                       {item?.key == "hotel" && <MdLocalHotel className="icon" />}
                                                       {item?.key == "restaurants" && <IoRestaurant className="icon" />}
                                                       {item?.key == "places" && <MdLocationOn className="icon" />}
                                                       {item?.key?.includes("-") && <CiCalendarDate className="icon" />}
                                                       <span className="text nav-text">{item?.title}</span>
                                                  </a>
                                             </li>
                                        );
                                   }
                              })}
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
