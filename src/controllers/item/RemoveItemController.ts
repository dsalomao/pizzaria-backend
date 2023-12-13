import { Request, Response } from "express";
import { RemoveItemService } from "../../services/item/RemoveItemService";


class RemoveItemController {
    async handle(req: Request, res: Response) {
        const {item_id} = req.params

        const service = new RemoveItemService()

        const item = await service.execute({
            item_id
        })

        return res.json(item)
    }
}

export { RemoveItemController }