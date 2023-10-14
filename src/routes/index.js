// const route = require('express').Router();

// route('/', (req, res) => {
//     return res.send('server on');
// })


// export default route;

/////////////
// const user = require('./user.route');
import authRoute from './auth.route';
import userRoute from './user.route';
import insertRoute from './insert.route';

import bookRoute from './book.route';
import cateRoute from './category.route';

import oderRoute from './oder.route';

import { notFound } from '../middleware/handle_error';

const initRoute = (app) => {
    app.use('/api/v1/auth', authRoute);
    app.use('/api/v2/user', userRoute);
    app.use('/api/v2/insert', insertRoute);
    
    app.use('/api/v2/book', bookRoute);
    app.use('/api/v2/categories', cateRoute);
    
    app.use('/api/v2/oder', oderRoute);



    app.use(notFound)
    // app.use('/', internalServerError);
    app.use('/', (req, ree) => {
        return res.send('route is not found');
    });

    // return app.use('/', (req, res) => {
    //     return res.send('server on');
    // });
}

module.exports = initRoute;