import Customer from '../models/customerModel.js';

export const getCustomerController = async (req, res) => {
    try {

        const customer = await Customer.find();
        res.send(customer);

    } catch(error) {
        console.log(error);
    }
}


export const getCustomerById = async (req, res) => {
    try {

        const customer = await Customer.findById(req.params.id);
        res.send(customer);

    } catch(error) {
        console.log(error);
    }
}

//for add
export const addCustomerController = async (req, res) => {

    try {

        const newCustomer = new Customer(req.body);
        await newCustomer.save();
        res.send("Customer Created Successfully!");

    } catch(error) {
        console.log(error);
    }

}