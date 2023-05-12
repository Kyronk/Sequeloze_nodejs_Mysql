import * as services from '../services';
import { internalServerError, badResponse } from '../middleware/handle_error';
import { bId, title, price, available, category_code, image, description } from '../helper/joi_schema';
import joi from 'joi'

const cloudinary = require('cloudinary').v2

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
