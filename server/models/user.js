const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address: {
        Street: String,
        City: String,
        Region: String,
        PostalCode: String
    },
    email: String,
    phone: String,
    password: String,
    pastOrders: {
        item: {
            code: String,
            options: Array,
            quantity: Number
        },
        date_ordered: String,
        delivery_address: {
            Street: String,
            City: String,
            Region: String,
            PostalCode: String
        }
    }
})

let User = mongoose.model('User', userSchema)
module.exports = User