import * as services from '../services';
import { internalServerError, badResponse } from '../middleware/handle_error';


export const insertData = async (req, res) => {
    try {
        const response = await services.insertData();
        return res.status(200).json(response);
        
    } catch (error) {
        return internalServerError(error);
    }
}







// module.exports = {
//     getAllUser,
    
// }

