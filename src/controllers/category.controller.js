import * as service from "../services";

export const getListCate = async (req, res) => {
    try {
        const response = await service.getAllCategory();

        return res.status(200).json(
            response
        )
    } catch (error) {
        console.log(error);
    }
}

