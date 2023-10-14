
import * as controller from '../controllers';

import verityToken from '../middleware/verify_token';
import { isAdmin, isModeratorOrAdmin } from '../middleware/verify_role';

import express from 'express';
const route = express.Router();

// import uploader image
import uploader from '../middleware/uploader';

// get list test
route.get('/list', controller.getList);
// public route
route.get('/listbook', controller.getAllBook);

route.get("/item/:id", controller.getBookItem);
// private route
// route.use(verityToken);
// route.use(isAdmin);

// get book by id

// create a book không có file ảnh

route.post('/create-book', controller.createBookController);

route.put('/update-book/:id', controller.updateBookTest);


route.delete('/delete/:id', controller.deleteABook)


///
route.post('/create', uploader.single('image') , controller.createItemBook);
route.put('/update', uploader.single('image'), controller.updateItemBook);
route.delete('/delete', controller.deleteItemBook);



module.exports = route;