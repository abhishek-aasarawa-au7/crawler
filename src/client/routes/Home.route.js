import { home } from "../configs/routes";
import Home from "../pages/Home";

const homeRoute = [
  {
    path: home,
    exact: true,
    isProtected: false,
    component: Home,
  },
];

export default homeRoute;
