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
// app.use(cors({
//     origin: process.env.CLIENT_URL,
//     methods: ['GET','POST', 'PUT', 'DELETE']
// }));
app.use(cors());

//CRUD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
// import {Users} from "./data/user";

// app.get('/user', (req, res) => {
//     const q = req.query.search;
//     // console.log(q);
//     const keys = ["first_name"];

//     const search = (data) => {
//         return data.filter((item) => 
//             keys.some((key) => item[key].toLowerCase().includes(q))
//         )
//     };
//     res.json(search(Users.splice(0,10)));
//     // res.json(Users);
// });

//
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


