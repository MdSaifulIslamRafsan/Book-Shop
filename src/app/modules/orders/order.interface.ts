import { ObjectId } from "mongoose";

export interface orderType {
    email: string;
    product : ObjectId,
    quantity: number;
    totalPrice : number;
}