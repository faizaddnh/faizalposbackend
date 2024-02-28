import express from "express";
import { getProductController, incrementproductController, dicrementproductController, getOneProductController, addProductController, updateProductController, deleteProductController } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/getproducts", getProductController);

productRouter.get("/getoneproduct", getOneProductController);

productRouter.put("/incrementproduct", incrementproductController);

productRouter.put("/dicrementproduct", dicrementproductController);

productRouter.post("/addproducts", addProductController);

productRouter.put("/updateproducts", updateProductController);

productRouter.post("/deleteproducts", deleteProductController);

export default productRouter;