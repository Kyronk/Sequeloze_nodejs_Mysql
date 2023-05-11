import * as services from '../services';
import { internalServerError, badResponse } from '../middleware/handle_error';


export const getUser = async (req, res) => {
    try {
        const {id} = req.user;
        const response = await services.getOne(id);
        return res.status(200).json(response);
        
    } catch (error) {
        return internalServerError(error);
    }
}


export const getAllUser = (req, res) => {
    return res.send('user controller get all user');
};




// module.exports = {
//     getAllUser,
    
// }

