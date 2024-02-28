import Bills from "../models/billsModel.js";
import Product from '../models/productModel.js'

//for add or fetch
export const getBillsController = async (req, res) => {
    try {

        const bills = await Bills.find({}).populate('customer');
        res.send(bills);

    } catch (error) {
        console.log(error);
    }
}

//for add bill

export const addBillsController = async (req, res) => {

    // to reduce quantity from mongodb database;
    const cartItems = req.body.cartItems;

    try {
        for (const cartItem of cartItems) {
            const productId = cartItem._id;
            const orderQuantity = cartItem.quantity;
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(400).json({ message: 'Not enough stock available' });
            }

            if (product.quantity < orderQuantity) {
                return res.status(401).json({ message: 'Not enough stock available' });
            }
            const updatedQuantity = product.quantity - orderQuantity;
            await Product.findByIdAndUpdate(productId, { quantity: updatedQuantity });
        }

    } catch (error) {
        console.log(error);
    }
    // to save bill in mongodb database;
    try {
        const newBills = new Bills(req.body);
        await newBills.save();
        res.send("Bill Created Successfully!");
    } catch (error) {
        console.log(error);
    }

}

//for delete bill
export const deleteBillsController = async (req, res) => {
    try {
        await Bills.findOneAndDelete({ _id: req.body.billId })
        res.status(200).json("Bill Deleted!");
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}