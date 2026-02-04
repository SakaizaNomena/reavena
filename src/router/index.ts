import { createBrowserRouter } from "react-router-dom";
import React, { createElement } from "react";
import HomePages from "../pages/Home";
import ComponentsPage from "../pages/Components";
import ComponentDetailPage from "../pages/ComponentDetail";
import NotFoundPage from "../pages/NotFound";
import { Layout } from "../pages/laoyut";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: React.createElement(Layout),
    errorElement: createElement(NotFoundPage),
    children: [
        {
            path: "/",
            element: React.createElement(HomePages)
        },
        { 
            path: "/components",
            element: React.createElement(ComponentsPage)
        }, 
        {
            path: "/components/:componentId",
            element: React.createElement(ComponentDetailPage)
        }
    ]
  }
]);

export default router;