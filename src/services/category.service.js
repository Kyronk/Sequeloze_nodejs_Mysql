import db from "../models";

// get all category 
export const getAllCategory = () => new Promise (async (resolve, reject) => {
    try {
        
        const response = await db.Category.findAll();

        resolve({
            error: 0,
            response
        })
    } catch (error) {
        resolve(error);
    }
})