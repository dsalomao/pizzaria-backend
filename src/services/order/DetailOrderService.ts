import prismaClient from "../../prisma"

interface OrderRequest {
    order_id: string
}

class DetailOrderService {
    async execute({ order_id }: OrderRequest) {
        const order = await prismaClient.order.findMany({
            where: {
                id: order_id
            },
            select: {
                id: true,
                table: true,
                status: true,
                draft: true,
                items: {
                    select: {
                        id: true,
                        ammount: true,
                        product: true
                    }
                }
            }
        })

        return order
    }
}

export { DetailOrderService }