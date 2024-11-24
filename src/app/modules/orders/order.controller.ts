import { Request, Response } from "express";


const createOrder = (req : Request, res: Response) => {
        try {
            const orderInfo = req.body
            
            

            res.send({
                success: true,
                message: 'Order created successfully',
                orderInfo,
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