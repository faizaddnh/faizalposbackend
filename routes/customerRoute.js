import express from "express";
import { addCustomerController, getCustomerById, getCustomerController } from "../controllers/customerController.js";

const customerRouter = express.Router();

customerRouter.post("/addcustomer", addCustomerController);

customerRouter.get("/getcustomer", getCustomerController);

customerRouter.get("/getcustomer/:id", getCustomerById);

export default customerRouter;