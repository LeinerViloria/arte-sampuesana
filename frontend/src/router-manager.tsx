import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import CraftsmenHome from "./CraftsmenHome/CraftsmenHome";
import ErrorManager from './ErrorManager/ErrorManager';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorManager />
    },
    {
      path: "/artesano",
      element: <CraftsmenHome />,
      errorElement: <ErrorManager />
    },
]);

export default router;