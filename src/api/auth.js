// import axios from "axios";
// import { getCookie, setCookie } from "@/util";
// import { BASIC_KEY, BASIC_KEY_SSO, OAUTH_BASEURL } from "@/constant/constant";
// import { Navigate, redirect, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const defaultOptions = {
//      baseURL: OAUTH_BASEURL + "/oauth/token",
// };

// export const instanceLogin = axios.create(defaultOptions);
// instanceLogin.interceptors.request.use(
//      (config) => {
//           config.headers["Authorization"] = `Basic ${BASIC_KEY}`;
//           return config;
//      },
//      (error) => {
//           return Promise.reject(error);
//      }
// );

// export const instanceLoginSSO = axios.create(defaultOptions);
// instanceLoginSSO.interceptors.request.use(
//      (config) => {
//           config.headers["Authorization"] = `Basic ${BASIC_KEY_SSO}`;
//           return config;
//      },
//      (error) => {
//           return Promise.reject(error);
//      }
// );

// export function instanceUserInfo() {
//      const contant = axios.create();
//      contant.interceptors.request.use(
//           (config) => {
//                config.headers["Authorization"] = `Bearer ${getCookie("token")}`;
//                //dev
//                config.baseURL = OAUTH_BASEURL + "/api/auth";
//                // config.baseURL = "https://betaerp.tgdd.vn/mwg-app-auth-service/api/auth";
//                //prod
//                // config.baseURL = "https://erpapp.tgdd.vn/mwg-app-auth-service/api/auth";
//                return config;
//           },
//           (error) => {
//                return Promise.reject(error);
//           }
//      );
//      return contant;
// }
