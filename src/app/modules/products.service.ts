import { ProductType } from "./products.interface";
import { ProductModel } from "./products.model";

// Function to create a new product from database
const createProductFromDB = async(product: ProductType) => {
    const result = await ProductModel.create(product);
    return result;
}

// Function to get all products from database
const getAllProductFromDB = async() => {
    const result = await ProductModel.find({});
    return result;
}

// Function to get a single product from database by its id
const getSingleProductFromDB = async(productId : string) => {
    const result = await ProductModel.findById(productId);
    return result;
}

export const productServices ={
    createProductFromDB,
    getAllProductFromDB,
    getSingleProductFromDB
} 