import db from '../models';
import data from '../../data/data.json';

import { generateCode } from '../helper/fn';

export const insertData = () => new Promise( async (resolve, reject) => {
    try {


        const category = Object.keys(data);
        category.forEach( async (item) => {
            await db.Category.create({
                code: generateCode(item),
                value: item
            })
        });

    
        const dataArr = Object.entries(data);
        dataArr.forEach((item) => {
            item[1]?.map(async (book) => {
                await db.Book.create({
                    id: book.upc,
                    title: book.bookTitle,
                    available: +book.available,
                    price: +book.bookPrice,
                    image: book.imageUrl,
                    description: book.bookDescription,
                    category_code: generateCode(item[0])
                })
            })
        })
        resolve({
            message: 'ok'
        });

        

    } catch (error) {
        reject(error);
    }
})