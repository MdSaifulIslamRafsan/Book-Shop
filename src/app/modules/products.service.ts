import { ProductType } from "./products.interface";
import { ProductModel } from "./products.model";

const createProductFromDB = async(product: ProductType) => {
    const result = await ProductModel.create(product);
    return result;
}

export const productServices ={
    createProductFromDB
} 