
import * as controller from '../controllers';

import verityToken from '../middleware/verify_token';
import { isAdmin, isModeratorOrAdmin } from '../middleware/verify_role';

import express from 'express';
const route = express.Router();

// import uploader image
import uploader from '../middleware/uploader';



// public route
route.get('/listbook', controller.getAllBook);

// private route
route.use(verityToken);
route.use(isAdmin);
route.post('/create', uploader.single('image') , controller.createItemBook);
route.put('/update', uploader.single('image'), controller.updateItemBook);
route.delete('/delete', controller.deleteItemBook);


module.exports = route;