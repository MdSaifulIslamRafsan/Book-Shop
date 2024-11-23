import { Request, Response } from "express";

type ErrorMessage = {
    message: string;
}

const createProduct = async(req : Request , res: Response) => {
    try {
        // Extract product data from the request body
        const productInfo = req.body;

      

    // Validate the product data
    res.status(200).send({
        message: 'Product created successfully',
        productInfo
    })
    } catch (error  : unknown) {
        res.send({
            status: 500,
            success: false,
            message: (error as ErrorMessage).message,
        })
    }
}

export const ProductControllers = {
    createProduct
}