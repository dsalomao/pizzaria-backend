import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";


class DetailOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.params

        const service = new DetailOrderService()

        const order = await service.execute({
            order_id: order_id
        })

        return res.json(order)
    }
}

export { DetailOrderController }