import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import CraftsmenHome from "./CraftsmenHome/CraftsmenHome";
import ErrorManager from './ErrorManager/ErrorManager';
import CraftmanBasicInformation from './CraftmanBasicInformation/CraftmanBasicInformation';
import ProductsManager from './ProductsManager/ProductsManager';

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
    {
      path: "/artesano/basicInformation",
      element: <CraftmanBasicInformation />,
      errorElement: <ErrorManager />
    },
    {
      path: "/artesano/productsManager",
      element: <ProductsManager />,
      errorElement: <ErrorManager />
    }
]);

export default router;