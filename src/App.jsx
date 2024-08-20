import React from "react";
import { Route, Routes } from "react-router-dom";
// import PrivateRoutes from "@/router/PrivateRoutes";
import { Login } from "@/page";
import { ToastContainer, toast } from "react-toastify";
import "moment/locale/vi";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import "./App.scss";
import "./index.css";
import Header from "./components/Header/Header";
import Detail from "./page/Detail/Detail";
import Home from "./page/Home/Home";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
     return (
          <div id="app" className="App">
               <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} style={{ zIndex: 100000 }} />
               <div className="flex flex-col  w-full h-full ">
                    {/* <Header /> */}
                    <Navbar />
                    <Routes>
                         {/* <Route path="/" element={<PrivateRoutes isLogin={isLogin} token={token}></PrivateRoutes>}>
                    <Route path="/home" element={<Home />} />
               </Route> */}
                         <Route element={<Login />} path="/login" />
                         <Route element={<Detail />} path="/detail" />
                         <Route element={<Home />} path="/home" />
                    </Routes>
               </div>
          </div>
     );
};

export default App;
