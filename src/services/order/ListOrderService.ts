import prismaClient from "../../prisma"


class ListOrderService {
    async execute() {
        const orders = await prismaClient.order.findMany({
            where: {
                draft: false
            }
        });

        return orders
    }
}

export { ListOrderService }