import { ObjectId } from "mongoose";

export interface OrderType {
    email: string;
    product : ObjectId,
    quantity: number;
    totalPrice : number;
}