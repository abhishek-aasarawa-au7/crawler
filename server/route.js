// importing packages
import express from "express";

// importing controller
import controller from "./controller";

// route init
const route = express.Router();

route.get("/", controller.test);

export default route;
