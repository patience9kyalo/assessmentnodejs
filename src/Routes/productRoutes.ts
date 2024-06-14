import { Router } from "express";
import { addProduct, getProduct, searchProduct } from "../Controllers/productControllers";



const productRouter = Router()
productRouter.post("", addProduct)
productRouter.get("", getProduct)
productRouter.get(":/prodname", searchProduct)

export default productRouter
