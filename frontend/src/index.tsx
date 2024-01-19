import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from 'pages/Home'
import AppLayout from "components/Layout";
import * as React from 'react';
import SignUp from "pages/SignUp";
import SellerSignUp from "pages/SellerSignUp";
import GeneralSignUp from "pages/GeneralSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout children={<Home />} />,
  },
  {
    path: "signup",
    element: <AppLayout children={<SignUp />} />,
  },
  {
    path: "signup/seller",
    element: <AppLayout children={<SellerSignUp />} />,
  },
  {
    path: "signup/general",
    element: <AppLayout children={<GeneralSignUp />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);