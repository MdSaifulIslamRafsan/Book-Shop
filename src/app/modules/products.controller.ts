import { Request, Response } from "express";
import { productServices } from "./products.service";


const createProduct = async(req : Request , res: Response) => {
    try {
        // Extract product data from the request body
        const productInfo = req.body;

        // Save the product data to the database
      const result = await productServices.createProductFromDB(productInfo);
      

    // Validate the product data
    res.status(200).send({
        success: true,
        message: 'Book created successfully',
        data : result
    })
    } catch (error  : unknown) {
        res.status(500).send({
            success: false,
            message: 'An error occurred while creating the product',
            error
        })
    }
}

export const ProductControllers = {
    createProduct
}