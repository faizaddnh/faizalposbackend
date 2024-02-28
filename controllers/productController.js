import Product from "../models/productModel.js";

//for fetch
export const getProductController = async (req, res) => {
    try {

        const products = await Product.find();
        res.status(200).send(products);

    } catch (error) {
        console.log(error);
    }
}

//for fetch one
export const getOneProductController = async (req, res) => {
    try {

        const products = await Product.findOne( req.body.productId);
        res.status(200).send(products);

    } catch (error) {
        console.log(error);
    }
}

//for add
export const addProductController = async (req, res) => {

    try {

        const newProducts = new Product({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
            model: req.body.model,
            image: req.body.image
        });
        await newProducts.save();
        res.status(200).send("Products Created Successfully!");

    } catch (error) {
        console.log(error);
    }

}

//for update
export const updateProductController = async (req, res) => {
    try {

        await Product.findOneAndUpdate({ _id: req.body.productId }, req.body, { new: true })
        res.status(201).json("Product Updated!");
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

//for delete
export const deleteProductController = async (req, res) => {
    try {

        await Product.findOneAndDelete({ _id: req.body.productId })
        res.status(200).json("Product Deleted!");
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

export const incrementproductController = async (req, res) => {
    const id = req.body.productId;
    const updateQuantity = req.body;
    const filter = { _id:id };
    const options = { upsert: true };
    const updateDoc = { $inc: { 'quantity': 1 } };
    const result = await Product.findOneAndUpdate(filter, updateDoc, options).exec()
    res.send(result);
}

export const dicrementproductController = async (req, res) => {
    const id = req.body.productId;
    const updateQuantity = req.body;
    const filter = { _id:id };
    const options = { upsert: true };
    const updateDoc = { $inc: { 'quantity': -1 } };
    const result = await Product.findOneAndUpdate(filter, updateDoc, options).exec()
    res.send(result);
}