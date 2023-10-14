import * as services from '../services';
import { internalServerError, badResponse } from '../middleware/handle_error';
import { bId, title, price, available, category_code, image, description, bIds, filename } from '../helper/joi_schema';
import joi from 'joi'

const cloudinary = require('cloudinary').v2

// get list test
export const getList = async(req, res) => {
    try {
        const response = await services.getListFull(req.query);

        return res.status(200).json({
            data: response
        })
    } catch (error) {
        console.log(error)
    }
}

// get all book
export const getAllBook = async(req, res) => {
    try {
        const response = await services.getBookList(req.query);
    
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

// get book item
export const getBookItem = async (req, res) => {
    try {
        const {id} = req.params;
        // console.log(id)
        const response = await services.getABook(id);

        return res.status(200).json({
            data: response
        });
    } catch (error) {
        console.log(error);
    };
}

// Create
export const createItemBook = async (req, res) => {
    try {
        
        const fileData = req.file;
        
        const { error } = joi.object({ title, price, available, category_code, image, description }).validate({...req.body, image: fileData?.path});

        if(error) {
            if (fileData) cloudinary.uploader.destroy(fileData.filename);
            return badResponse(error.details[0].message, res);
        };
        const response = await services.createNewBook(req.body, fileData);
        return res.status(200).json(response);
        
    
    } catch (error) {
        return internalServerError(res);
    }
}
// test
// create
export const createBookController = async (req, res) => {
    try {
        // const {title, image, price, available, description} = req.body;
        const book = req.body;
        const response = await services.createABook(book);

        //return res.status(200).json("ok")
        return res.status(200).json(response);
    } catch (error) {
        console.log(error)
    };
};
// test update
export const updateBookTest = async (req, res) => {
    try {
        const { id }= req.params;
        const bookUpdate = req.body;
        const response = await services.updateTest(id, bookUpdate);

        // return res.status(200).json({
        //     id,
        //     bookUpdate
        // })
        return res.status(200).json(response);
    } catch (error) {
        return console.log(error);
    }
}

/////////////////////////////
//  update

export const updateItemBook = async (req, res) => {
    try {
        const fileData = req.file;
        const {error} = joi.object({ bId }).validate({bId: req.body.bId});
        if(error) {
            if (fileData) cloudinary.uploader.destroy(fileData.filename);
            return badResponse(error.details[0].message, res);
        }
        const response = await services.updateBook(req.body, fileData);
        return res.status(200).json(response);
        
    } catch (error) {
        return internalServerError(error);
    }
}

// delete
export const deleteItemBook = async (req, res) => {
    try {
        const {error} = joi.object({bIds, filename }).validate(req.query);
        if(error) {
            return badResponse(error.details[0].message, res);
        }
        const response = await services.deleteBook(req.query.bIds, req.query.filename);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(error);
    }
}

// delete a book by params
export const deleteABook = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const response = await services.deleteABook(id);
        return res.status(200).json(response);
    } catch (error) {
        return internalServerError(error)
    }
}