import { Request, Response } from "express";
import { CreateItemService } from "../../services/item/CreateItemService";


class CreateItemController {
    async handle(req: Request, res: Response) {
        const { ammount, order_id, product_id } = req.body

        const service = new CreateItemService()

        const item = await service.execute({
            ammount,
            order_id,
            product_id
        })

        return res.json(item)
    }
}

export { CreateItemController }