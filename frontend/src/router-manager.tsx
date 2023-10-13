import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Ejemplo from "./Ejemplo/Ejemplo";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/artesano",
      element: <Ejemplo />,
    },
]);

export default router;