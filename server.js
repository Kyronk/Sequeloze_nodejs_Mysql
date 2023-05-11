// const express = require('express');
import express from 'express';
// const cors = require('cors');
import cors from 'cors';
// require('dotenv').config();
//es6
import dotenv from 'dotenv';
dotenv.config();
// route
const initRoute = require('./src/routes')

// connect db : sequelize
const connectDB = require('./connection_database');
connectDB();

const app = express();

// dung de ket noi voi frond end 
// nay la luu key vs lai method hop le 
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET','POST', 'PUT', 'DELETE']
}));

//CRUD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoute(app);
// app.use('/', (req, res) => {
//     res.send('server on');
// });

const PORT = process.env.PORT || 8888;

// const listener = app.listen(PORT, () => {
//     console.log('server is start on port = ', PORT);
// })


const listener = app.listen(PORT, () => {
    //console.log('Server is start on port = ', listener.address().port);
    console.log('Server is start on port = ' + listener.address().port);

})


