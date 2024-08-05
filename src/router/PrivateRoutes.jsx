import { Outlet, Navigate, Routes, useNavigate, useLocation } from "react-router-dom";
import React from "react";
import { removeCookie } from "@/util";
import { useDispatch } from "react-redux";
import { instanceUserInfo } from "@/api/auth";
import { getInfoUser } from "../page/Login/loginSlice";

function PrivateRoutes({ children, isLogin, token }) {
     const dispatch = useDispatch();
     const location = useLocation();
     const navigate = useNavigate();

     if (!isLogin) {
          if (token) {
               dispatch(getInfoUser(token)).then((res) => {
                    if (res?.error) {
                         removeCookie("token");
                         navigate("/login");
                    }
               });
          } else {
               return <Navigate to="/login" />;
          }
     } else {
          return location.pathname == "/" ? children : <Outlet />;
     }
}

export default PrivateRoutes;
