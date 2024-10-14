import React from "react";
import { Route, Routes } from "react-router-dom";
// import PrivateRoutes from "@/router/PrivateRoutes";
import { Login } from "@/page";
import { ToastContainer, toast } from "react-toastify";
import "moment/locale/vi";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
// import "antd/dist/antd.less";
import "./App.scss";
import "./index.css";
import Header from "./components/Header/Header";
import Detail from "./page/Detail/Detail";
import Home from "./page/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/Custom/SearchBar";
import BookingHotel from "./page/BookingHotel/BookingHotel";
import DetailTrip from "./page/DetailTrip/DetailTrip";
const App = () => {
     // const scrollHeader = () => {
     //      const header = document.getElementById("nav__graduation");
     //      // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
     //      if (window.scrollY >= 100) header.classList.add("scroll-header");
     //      else header.classList.remove("scroll-header");
     // };
     // window.addEventListener("scroll", scrollHeader);
     return (
          <div id="app" className="App">
               <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} style={{ zIndex: 100000 }} />
               <div className="flex flex-col w-[100vw] h-[100vh]">
                    {/* <Header /> */}
                    {/* <Navbar /> */}
                    <Routes>
                         {/* <Route path="/" element={<PrivateRoutes isLogin={isLogin} token={token}></PrivateRoutes>}>
                    <Route path="/home" element={<Home />} />
               </Route> */}
                         <Route element={<Login />} path="/login" />
                         <Route element={<Detail />} path="/detail" />
                         <Route element={<Home />} path="/home" />
                         <Route element={<BookingHotel />} path="/booking" />
                         <Route element={<DetailTrip />} path="/detail/:id" />
                    </Routes>
               </div>
          </div>
     );
};

export default App;
