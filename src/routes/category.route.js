import express from "express";
const route = express();

import * as controller from "../controllers";

route.get('/list', controller.getListCate);


module.exports = route;
