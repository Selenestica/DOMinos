// Dependencies
const express = require('express')
const pizzaapi = require('dominos')
const dotenv = require('dotenv')
const util = require('util')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 1200
const app = express()
global.bcrypt = require('bcrypt')
global.SALT_ROUNDS = 10
const jwt = require('jsonwebtoken')

const userRouter = require('./routes/userRoute')
app.use('/user', userRouter)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
mongoose.set('useFindAndModify', false)
dotenv.config()

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true})








// ************************************************ DOMINOS API ************************************************ //
// ************************************************ PREP WORK FUNCTIONS AND EXAMPLES ************************************************ //
/*
//finds nearby stores... important for finding the id of the store nearest you
pizzaapi.Util.findNearbyStores(
    '13414 Tall Forest Dr, Cypress, TX, 77429',
    'Delivery',
    function(storeData) {
       // console.log(JSON.stringify(storeData))
    }
)

//stores your store id in a variable
let myStore = new pizzaapi.Store({ID: '6651'})
myStore.ID = '6651'

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

/*
//customer example
let customer = new Customer({
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

//item example
let item = new Item({
    code: '14SCREEN'
})
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

app.listen(PORT, () => {
    console.log('DOMinos is now running on port ' + PORT)
})
