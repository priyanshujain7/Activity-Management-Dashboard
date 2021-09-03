import { lazy } from "react";

export const RouteNames = {
  Login: "/",
  Dashboard: "/dashboard",
};

const routeArray = [
  {
    route: RouteNames.Login,
    title: "Login",
    Component: lazy(() => import("../pages/Login")),
  },
  {
    route: RouteNames.Dashboard,
    title: "Dashboard",
    Component: lazy(() => import("../pages/Dashboard")),
  },
];

export default routeArray;
