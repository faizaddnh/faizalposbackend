import mongoose from "mongoose";

//for create table into db
const billsSchema = new mongoose.Schema({
    
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    subTotal: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    tax: { type: Number, required: true },
    payment: { type: Number, required: true },
    cartItems: { type: Array, required: true },
    
}, {
    //for date
    timestamps: true
});

const Bills = mongoose.model("Bills", billsSchema);
export default Bills;