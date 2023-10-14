import db from "../models";

// get full list oder
export const getFullOder = () => {

}

// get one oder

// create a oder
export const createOder = (body) => new Promise (async (resolve, reject) => {

    try {
        // const response = await db.Oder.create({
        //     book_id: "adsfk11",
        //     quantity: 2,
        //     price: 10.4,
        //     user_id: "aadlfflkdfs",
        //     oder_id: "test"
        // });

    //     const response = await db.Oder. bulkCreate([
    //         {
    //                 book_id: "test1",
    //                 quantity: 2,
    //                 price: 10.4,
    //                 user_id: "aadlfflkdfs",
    //                 oder_id: "test"
    //         },
    //         {
    //             book_id: "test2",
    //             quantity: 1,
    //             price: 10.4,
    //             user_id: "aadlfflkdfs",
    //             oder_id: "test"
    //     },
    //     {
    //         book_id: "test3",
    //         quantity: 4,
    //         price: 12.4,
    //         user_id: "aadlfflkdfs",
    //         oder_id: "test"
    // },
    //     ])
    // const testTpe = [
    //     {
    //         "book_id": "test1",
    //         "quantity": 2,
    //         "price": 10.4,
    //         "user_id": "aadlfflkdfs",
    //         "oder_id": "test"
    //     },
    //     {
    //         "book_id": "test1",
    //         "quantity": 2,
    //         "price": 10.4,
    //         "user_id": "aadlfflkdfs",
    //         "oder_id": "test"
    //     },
    //     {
    //         "book_id": "test1",
    //         "quantity": 2,
    //         "price": 10.4,
    //         "user_id": "aadlfflkdfs",
    //         "oder_id": "test"
    //     },
    // ]

    const response = await db.Oder. bulkCreate(body);

        resolve({
            err: 0,
            message: 'create oder is successfully'
        })
    } catch (error) {
        reject(error);

    }

}); 



