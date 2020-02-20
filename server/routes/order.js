const express = require('express')
const pizzaapi = require('dominos')
const router = express.Router()
const cors = require('cors')
const util = require('util')
router.use(express.urlencoded({extended: false}))
router.use(cors())
router.use(express.json())

router.post('/add-order', async (req, res) => {

    //console.log(req.body)
    let newCustomer = new pizzaapi.Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: {
            Street: req.body.street,
            City: req.body.city,
            Region: req.body.state,
            PostalCode: req.body.zip
        },
        email: req.body.email, 
        phone: req.body.phone
    })
    
    let chosenDeliveryMethod = req.body.chosenDeliveryMethod

    //stores your store id in a variable
    let myStore = new pizzaapi.Store({ID: req.body.chosenStore})
    myStore.ID = req.body.chosenStore

    let order = new pizzaapi.Order({
        customer: newCustomer,
        storeID: myStore.ID,
        deliveryMethod: chosenDeliveryMethod
    })
    order.StoreID = myStore.ID

    //maybe store every item in localstorage, then when the order is placed do something like
    // itemArray = []
    // for (item in itemArray) {
    //    order.addItem(
        //    new pizzaapi.Item({
        //        code: req.body.item,
        //        options: [],
        //        quantity: req.body.quantity
        //    })   
    //    )    
    //}

    order.addItem(
        new pizzaapi.Item({
            code: req.body.itemCode,
            options: [],
            quantity: req.body.quantity
        })
    )

    order.addItem(
        new pizzaapi.Item({
            code: req.body.drinkCode,
            options: [],
            quantity: req.body.drinkQuantity
        })
    )
    order.StoreOrderID = order.StoreID

    //checks to see if the order will go through
    order.validate(
        function(result) {
            console.log("*********************************** Order Validated ************************************************************************************************************")
            console.log(util.inspect(result, false, null, true))
        }
    )

    //see the price of the order without placing it
    order.price(
        function(result) {
            console.log("*********************************** Price ************************************")
            console.log(util.inspect(result, false, null, true))
        }
    )

    //pass in cc info
    let cardNumber = req.body.cardNumber
    let cardInfo = new order.PaymentObject()
        cardInfo.Amount = order.Amounts.Customer
        cardInfo.Number = cardNumber
        cardInfo.CardType = order.validateCC(cardNumber)
        cardInfo.Expiration = req.body.expiration
        cardInfo.SecurityCode = req.body.securityCode
        cardInfo.PostalCode = req.body.cardZip

    order.Payments.push(cardInfo)

    
    //places the order
    /*
    order.place(
        function(result) {
            console.log("*********************************** Order Placed! ************************************")
            console.log(util.inspect(result, false, null, true))
        }
    )
*/

})

module.exports = router