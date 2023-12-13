import prismaClient from "../../prisma"

interface ItemRequest {
    ammount: number,
    order_id: string,
    product_id: string
}

class CreateItemService {
    async execute({
        ammount,
        order_id,
        product_id
    }: ItemRequest) {
        const item = prismaClient.item.create({
            data: {
                ammount: ammount,
                order_id: order_id,
                product_id: product_id
            }
        })

        return item
    }
}

export { CreateItemService }