import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";


class FinishOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.params

        const service = new FinishOrderService()

        const order = await service.execute({
            order_id: order_id
        })

        return res.json(order)
    }
}

export { FinishOrderController }