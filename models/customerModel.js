import mongoose from "mongoose";

//for create table into db
const customerSchema = new mongoose.Schema({

    customerName: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },

}, {
    //for date
    timestamps: true
});

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;