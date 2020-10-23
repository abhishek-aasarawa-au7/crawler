import { home } from "../configs/routes";
import Home from "../pages/home";

const homeRoute = [
  {
    path: home,
    exact: true,
    isProtected: false,
    component: Home,
  },
];

export default homeRoute;
