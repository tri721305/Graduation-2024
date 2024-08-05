import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Login, Dashboard } from "@/page";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
     {
          path: "/",
          element: <PrivateRoutes />,
          children: [
               {
                    path: "/login",
                    element: <Login />,
                    children: [{}],
               },
          ],
     },
]);

export default router;
