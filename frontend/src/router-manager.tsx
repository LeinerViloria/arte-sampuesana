import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Ejemplo from "./Ejemplo/Ejemplo";
import ErrorManager from './ErrorManager/ErrorManager';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorManager />
    },
    {
      path: "/artesano",
      element: <Ejemplo />,
      errorElement: <ErrorManager />
    },
]);

export default router;