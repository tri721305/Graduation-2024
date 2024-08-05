import Cookies from "universal-cookie";

export const setCookie = (key, value, options = { path: "/" }) => {
     const cookie = new Cookies();
     cookie.set(key, value, options);
};

export const getCookie = (key) => {
     const cookie = new Cookies();
     return cookie.get(key);
};

export const removeCookie = (key) => {
     const cookie = new Cookies();
     if (Array.isArray(key)) {
          key.forEach((k) => {
               cookie.remove(k);
          });
     } else {
          cookie.remove(key);
     }
};
