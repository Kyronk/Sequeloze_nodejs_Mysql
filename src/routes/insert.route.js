

import * as controller from '../controllers';

import express from 'express';
const route = express.Router();

import verityToken from '../middleware/verify_token';
import { isAdmin, isModeratorOrAdmin } from '../middleware/verify_role';

// public route



// Private route
// route.use(verityToken);
// route.use(isAdmin);
route.get('/', controller.insertData);



module.exports = route;