import * as controller from '../controllers';

import express from 'express';
const route = express.Router();

route.post('/register', controller.register);
route.post('/login', controller.login);

module.exports = route;