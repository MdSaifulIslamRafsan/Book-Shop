import express from 'express';
import { ProductControllers } from './products.controller';
const router = express.Router();


// Create a product route
router.post('/', ProductControllers.createProduct);

// Get all products route
router.get('/', ProductControllers.getAllProduct);


export const productsRouter = router;
