import { Response, Request } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { table, name } = req.body

        const service = new CreateOrderService()

        const order = await service.execute({
            table: table,
            name: name
        })

        return res.json(order)
    }
}

export { CreateOrderController }