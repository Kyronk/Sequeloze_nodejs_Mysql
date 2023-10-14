import * as service from "../services";
import { internalServerError, badResponse } from '../middleware/handle_error';


// create a oder
export const createOneOder = async (req, res) => {
    try {
        // console.log(req.body)
        const response = await service.createOder(req.body);
        
        return res.status(200).json(response);
    } catch (error) {
        console.log(err);
    }
}