import { Request, Response } from "express"
import { ListByCategoryService } from "../../services/product/ListByCategoryService"

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const {category_id} = req.params
        
        const service = new ListByCategoryService()

        const products = await service.execute({
            category_id: category_id
        })
        
        return res.json(products)
    }
}

export { ListByCategoryController }