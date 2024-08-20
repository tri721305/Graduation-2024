import React, { useEffect } from "react";
import { CgMenuGridR } from "react-icons/cg";
import "./style.scss";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
     useEffect(() => {
          //   const navMenu = document.getElementById("nav-menu");
     }, []);
     return (
          <nav className="nav__graduation nav__container">
               <a href="#" className="nav__logo">
                    Travel
               </a>
               <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                         <li className="nav__item">
                              <a href="#home" className="nav__link active-link">
                                   Home
                              </a>
                         </li>
                         <li className="nav__item">
                              <a href="#about" className="nav__link">
                                   About
                              </a>
                         </li>
                         <li className="nav__item">
                              <a href="#discover" className="nav__link">
                                   Discover
                              </a>
                         </li>
                         <li className="nav__item">
                              <a href="#place" className="nav__link">
                                   Places
                              </a>
                         </li>
                    </ul>

                    {/* <div className="nav__dark">
                         <span className="change-theme-name">Dark mode</span>
                         <i className="ri-moon-line change-theme" id="theme-button"></i>
                    </div> */}

                    <IoMdClose
                         onClick={() => {
                              const navMenu = document.getElementById("nav-menu");
                              navMenu.classList.remove("show-menu");
                         }}
                         className="nav__close cursor-pointer"
                         id="nav-close"
                    ></IoMdClose>
               </div>

               <div
                    onClick={() => {
                         const navMenu = document.getElementById("nav-menu");
                         const navToggle = document.getElementById("nav-toggle");
                         const navClose = document.getElementById("nav-close");
                         if (navToggle) {
                              navMenu.classList.add("show-menu");
                         }
                    }}
                    className="nav__toggle"
                    id="nav-toggle"
               >
                    <CgMenuGridR />
               </div>
          </nav>
     );
};

export default Navbar;
