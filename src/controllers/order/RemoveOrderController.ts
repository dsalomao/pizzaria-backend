import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController {
    async handle(req: Request, res: Response) {
        const {order_id} = req.params

        const service = new RemoveOrderService()

        const order = await service.execute({
            order_id: order_id
        })

        return res.json(order)
    }
}

export { RemoveOrderController }