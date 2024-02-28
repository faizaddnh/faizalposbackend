import express from "express";
import { addBillsController, deleteBillsController, getBillsController } from "../controllers/billsController.js";

const billsRouter = express.Router();

billsRouter.post("/addbills", addBillsController);

billsRouter.get("/getbills", getBillsController);

billsRouter.post("/deletebills", deleteBillsController);

export default billsRouter;