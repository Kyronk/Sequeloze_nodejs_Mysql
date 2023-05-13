// import { query } from 'express';
import db from '../models';
import { Op } from 'sequelize';
import { v4 as generateId } from 'uuid'; 

const cloudinary = require('cloudinary').v2


// read
export const getBookList = ({ page, limit, order, name, available, ...query}) => new Promise ( async (resolve, reject ) => {
    try {
        // limit là số lượng mình lấy trong 1 lần
        // offset là vị trí lấy (page)


        const queries = { raw: true, nest: true };
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const fLimit = +limit || +process.env.LIMIT_BOOK;
        
        

        queries.offset = offset * fLimit;
        queries.limit = fLimit;
        if (order) queries.order = [order];
        if (name) query.title = { [Op.substring]: name };
        if (available) query.available = { [Op.between]: available };
        const response = await db.Book.findAndCountAll({
            where: query,
            ...queries,

            attributes: {
                exclude: ['category_code', 'description']
            },
            include: [
                { 
                    model: db.Category, 
                    as: 'categoryData', 
                    attributes: { 
                        exclude: ['id', 'createdAt', 'updatedAt']
                    }, 
                }
            ]


        })

        resolve({
            err: response? 0: 1,
            message: response? 'got': 'not found',
            page: offset,
            Limit: fLimit ,
            list: response
        })
    } catch (error) {
        reject(error);
    }
})

// create
export const createNewBook = (body, fileData) => new Promise ( async (resolve, reject) => {
    try {
        // console.log('here');
        // console.log(body.title)
        const response = await db.Book.findOrCreate({
            where: { title: body?.title },
            defaults: {
                ...body,
                id: generateId(),
                image: fileData?.path
            }
        })

        resolve({
            err: response[1] ? 0 : 1,
            message: response[1] ? 'create is successfully' : 'can not create item'
        })
    

        if(fileData && !response[1]) cloudinary.uploader.destroy(fileData.filename);

    } catch (error) {
        reject(error);
        if(fileData ) cloudinary.uploader.destroy(fileData.filename);

    }
})

// update
export const updateBook = ({bId, ...body}, fileData) => new Promise (async (resolve, reject) => {
    try {
        const response = await db.Book.update(body,{
            where: {id: bId}
        });
        console.log(response)
        resolve({
            err: response[0] > 0 ? 0: 1,
            message: response[0] > 0 ? `${response[0]} book updated`: 'can not updated new book or book id is not found'
        }); 
        
        if(fileData && !response[0]) cloudinary.uploader.destroy(fileData.filename);
    } catch (error) {
        reject(error);
        if (fileData) cloudinary.uploader.destroy(fileData.filename);
    }
})


// delete
export const deleteBook = (bIds, filename) => new Promise (async (resolve, reject) => {
    try {
        console.log({bIds, filename})
        const response = await db.Book.destroy({
            where: {id: bIds}
        })
        // console.log(response);
        resolve({
            err: response > 0 ? 0: 1,
            message: response > 0 ? `${response} book(s) delete`: 'can not delete book or book id is not found'
        }); 

        cloudinary.api.delete_resources(filename);
        
    } catch (error) {
        reject(error);
    }
}) 