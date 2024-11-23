import express from 'express';
import { ProductControllers } from './products.controller';
const router = express.Router();


// Create a product route
router.post('/create-product', ProductControllers.createProduct);

export const productsRouter = router;
