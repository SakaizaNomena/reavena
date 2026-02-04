import { createBrowserRouter } from "react-router-dom";
import React, { createElement } from "react";
import HomePages from "../pages/Home";
import ComponentsPage from "../pages/Components";
import ComponentDetailPage from "../pages/ComponentDetail";
import { Laoyut } from "../pages/laoyut";
import NotFoundPage from "../pages/NotFound";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: React.createElement(Laoyut),
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