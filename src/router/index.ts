import { createBrowserRouter } from "react-router-dom";
import React, { createElement } from "react";
import HomePages from "../pages/Home";
import ComponentDetailPage from "../pages/ComponentDetail";
import NotFoundPage from "../pages/NotFound";
import { Layout } from "../pages/laoyut";

import Avatar from "../pages/ComponentDetail/Avatar";
import AvatarGroup from "../pages/ComponentDetail/AvatarGroup";
import Badge from "../pages/ComponentDetail/Badge";
import Button from "../pages/ComponentDetail/Button";
import Carousel from "../pages/ComponentDetail/Carousel";
import Checkbox from "../pages/ComponentDetail/Checkbox";
import Collapse from "../pages/ComponentDetail/Collapse";
import Divider from "../pages/ComponentDetail/Divider";
import Dropdown from "../pages/ComponentDetail/Dropdown";
import FileInput from "../pages/ComponentDetail/FileInput";
import Input from "../pages/ComponentDetail/Input";
import Modal from "../pages/ComponentDetail/Modal";
import PasswordInput from "../pages/ComponentDetail/PasswordInput";
import ProgressBar from "../pages/ComponentDetail/ProgressBar";
import Radio from "../pages/ComponentDetail/Radio";
import Select from "../pages/ComponentDetail/Select";
import Table from "../pages/ComponentDetail/Table";
import Textarea from "../pages/ComponentDetail/Textarea";
import Toast from "../pages/ComponentDetail/Toast";
import Card from "../pages/ComponentDetail/Card";
import Tabs from "../pages/ComponentDetail/Tabs";
import Toggle from "../pages/ComponentDetail/Toggle";

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(Layout),
    errorElement: createElement(NotFoundPage),
    children: [
      {
        path: "/",
        element: React.createElement(HomePages),
      },
      {
        path: "/component/",
        element: React.createElement(ComponentDetailPage),
        children: [
          {
            path: "avatar",
            element: createElement(Avatar),
          },
          {
            path: "avatar-group",
            element: createElement(AvatarGroup),
          },
          {
            path: "badge",
            element: createElement(Badge),
          },
          {
            path: "button",
            element: createElement(Button),
          },
          {
            path: "card",
            element: createElement(Card),
          },
          {
            path: "carousel",
            element: createElement(Carousel),
          },
          {
            path: "checkbox",
            element: createElement(Checkbox),
          },
          {
            path: "collapse",
            element: createElement(Collapse),
          },
          {
            path: "divider",
            element: createElement(Divider),
          },
          {
            path: "dropdown",
            element: createElement(Dropdown),
          },
          {
            path: "file-input",
            element: createElement(FileInput),
          },
          {
            path: "input",
            element: createElement(Input),
          },
          {
            path: "modal",
            element: createElement(Modal),
          },
          {
            path: "password-input",
            element: createElement(PasswordInput),
          },
          {
            path: "progress-bar",
            element: createElement(ProgressBar),
          },
          {
            path: "radio",
            element: createElement(Radio),
          },
          {
            path: "select",
            element: createElement(Select),
          },
          {
            path: "table",
            element: createElement(Table),
          },
          {
            path: "tabs",
            element: createElement(Tabs),
          },
          {
            path: "textarea",
            element: createElement(Textarea),
          },
          {
            path: "toggle",
            element: createElement(Toggle),
          },
          {
            path: "toast",
            element: createElement(Toast),
          },
        ],
      },
    ],
  },
]);

export default router;
