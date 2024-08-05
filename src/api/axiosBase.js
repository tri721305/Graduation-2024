import axios from "axios";
import { getCookie } from "@/util";
export const interceptors = axios.create();
export const interceptorsUploadFile = axios.create();
export const interceptorsPost = axios.create();
interceptors.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getCookie("token")}`;
    config.headers.common["content-type"] = "application/json";
    config.headers["accept"] = "application/json";
    config.timeout = 10000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interceptorsPost.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getCookie("token")}`;
    config.timeout = 20000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interceptorsUploadFile.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getCookie("token")}`;
    config.headers["Content-Type"] = `multipart/form-data`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default interceptors;
