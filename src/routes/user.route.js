// const route = require('express').Router();
//const userController = require('../controllers/user.controller')

import * as controller from '../controllers';

import express from 'express';
const route = express.Router();

import verityToken from '../middleware/verify_token';
import { isAdmin, isModeratorOrAdmin } from '../middleware/verify_role';

// public route



// Private route
route.use(verityToken);
// route.use(isAdmin);
route.get('/', controller.getUser);

//c2
// route.get('/', [verityToken, isAdmin], controller.getUser);


// mai code tiep phần này 
// sau khi đăng nhập thì lấy user id để lấy ra thông tin thằng đăng nhập thôi



// route.get('/', (req, res) => {
//     return res.send('user route');
// })

module.exports = route;