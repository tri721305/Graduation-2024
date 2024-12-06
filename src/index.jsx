import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
     <Provider store={store}>
          <BrowserRouter>
               <ConfigProvider
                    theme={{
                         token: {
                              colorPrimary: "#f3941e",
                         },
                    }}
               >
                    <App />
               </ConfigProvider>
          </BrowserRouter>
     </Provider>
);
