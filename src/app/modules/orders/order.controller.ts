import { Request, Response } from "express";
import { orderService } from "./order.service";


// This function handles the POST request for creating an order.
const createOrder = async(req : Request, res: Response) => {
        try {
            // Get the order information from the request body
            const orderInfo = req.body;

        // Save the order data to the database
            const result = await orderService.orderCreateFormDB(orderInfo)

            res.send({
                success: true,
                message: 'Order created successfully',
                result
            })

        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Failed to create order',
               error,
            })
        }
}

export const orderController = {
    createOrder
}