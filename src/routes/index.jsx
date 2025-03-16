import React from "react";
import { SuspenseWrapper } from "./SuspenseWrapper";
import PageNotFound from "../Pages/FirstPage";
import UserData from "../Pages/UserData";

const Login = React.lazy(() => import("../Pages/Login"));

export const routes = [
  {
    path: "*",
    element: (
      <SuspenseWrapper>
        <PageNotFound />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <Login />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/userData",
    element: (
      <SuspenseWrapper>
        <UserData />
      </SuspenseWrapper>
    ),
  },
];
