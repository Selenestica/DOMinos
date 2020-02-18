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

    order.addItem(
        new pizzaapi.Item({
            code: req.body.itemCode,
            options: [],
            quantity: req.body.quantity
        })
    )
    order.StoreOrderID = order.StoreID

    console.log(order)

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
            //console.log("*********************************** Price ************************************")
            //console.log(util.inspect(result, false, null, true))
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

    /* ---------------------------------------------------------------------
    //places the order
    order.place(
        function(result) {
            console.log("*********************************** Order Placed! ************************************")
            console.log(util.inspect(result, false, null, true))
        }
    )
    */

    /* ---------------------------------------------------------------------
    myStore.getInfo(
        function(storeData) {
            //console.log("//////////// STORE DATA ////////////")
            //console.log(storeData)
            
        }
    )
    

    //gets menu item ids so you know what to order
    myStore.getFriendlyNames(
        function(storeData) {
            //console.log("//////////// MENU ITEMS ////////////")
            //console.log(storeData)
        }
    )
    */














    // ************************************************ CREATING AN ORDER ************************************************ //
    /*
    let customerJBWilson = new pizzaapi.Customer({
        firstName: 'Joseph',
        lastName: 'Wilson',
        address: {
            Street: '13414 Tall Forest Dr',
            City: 'Cypress',
            Region: 'TX',
            PostalCode: '77429'
        },
        email: 'josiahleemusic@gmail.com', 
        phone: '5397776132'
    })

    let order = new pizzaapi.Order({
        customer: customerJBWilson,
        storeID: myStore.ID,
        deliveryMethod: 'Delivery'
    })
    order.StoreID = myStore.ID

    order.addItem(
        new pizzaapi.Item({
            code: '14SCREEN',
            options: [],
            quantity: 1
        })
    )

    order.StoreOrderID = order.StoreID

    //checks to see if the order will go through
    order.validate(
        function(result) {
            console.log("*********************************** Order Validated ************************************************************************************************************")
        //    console.log(util.inspect(result, false, null, true))
        }
    )

    //see the price of the order without placing it
    order.price(
        function(result) {
            console.log("*********************************** Price ************************************")
        //    console.log(util.inspect(result, false, null, true))
        }
    )

    //pass in cc info
    let cardNumber = process.env.CC_NUMBER
    let cardInfo = new order.PaymentObject()
        cardInfo.Amount = order.Amounts.Customer
        cardInfo.Number = cardNumber
        cardInfo.CardType = order.validateCC(cardNumber)
        cardInfo.Expiration = process.env.CC_EXPIRE
        cardInfo.SecurityCode = process.env.CC_SECCODE
        cardInfo.PostalCode = process.env.CC_ZIP

    order.Payments.push(cardInfo)

/*
//places the order
order.place(
    function(result) {
        console.log("*********************************** Order Placed! ************************************")
        console.log(util.inspect(result, false, null, true))
    }
)
*/

})

module.exports = router