import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from './config/multer';
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { CreateItemController } from "./controllers/item/CreateItemController";
import { RemoveItemController } from "./controllers/item/RemoveItemController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

// ROTAS USER
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// ROTAS CATEGORY
router.post('/categories', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new ListCategoryController().handle)

// ROTAS PRODUCT
router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/products/bycategory/:category_id', isAuthenticated, new ListByCategoryController().handle)

// ROTAS ORDER
router.post('/orders', isAuthenticated, new CreateOrderController().handle)
router.delete('/orders/:order_id', isAuthenticated, new RemoveOrderController().handle)
router.get('/orders/finishorder/:order_id', isAuthenticated, new FinishOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)

// ROTAS ITEMS
router.post('/items', isAuthenticated, new CreateItemController().handle)
router.delete('/items/:item_id', isAuthenticated, new RemoveItemController().handle)
export  { router }