import mongoose from "mongoose";

//for create table into db
const productSchema = new mongoose.Schema({

    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    model: { type: String },
    image: { type: String }

}, {
    //for date
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
export default Product;