import express from "express";
const route = express();

import * as controller from "../controllers";

route.post('/create', controller.createOneOder);


module.exports = route;
