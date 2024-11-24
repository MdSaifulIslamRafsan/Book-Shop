import { OrderType } from "./order.interface"
import { OrderModel } from "./order.model"

const orderCreateFormDB = async(order : OrderType) => {
    const result = await OrderModel.create(order)
    return result;
}

export const orderService = {
    orderCreateFormDB
}