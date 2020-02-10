
// Dependencies
const pizzaapi = require('dominos')
const dotenv = require('dotenv')
const util = require('util')

dotenv.config()

// ************************************************ API FUNCTIONS ************************************************ //

//finding nearby stores
pizzaapi.Util.findNearbyStores(
    '13414 Tall Forest Dr, Cypress, TX, 77429',
    'Delivery',
    function(storeData) {
       // console.log(JSON.stringify(storeData))
    }
)

//getting store info
let myStore = new pizzaapi.Store({ID: '6651'})
myStore.ID = '6651'

myStore.getInfo(
    function(storeData) {
        //console.log("******************************** STORE DATA ***************************************")
        //console.log(storeData)
        
    }
)

myStore.getFriendlyNames(
    function(storeData) {
        //console.log("*********************************** MENU ITEMS ************************************")
        //console.log(storeData)
    }
)

// ************************************************ CREATING AN ORDER ************************************************ //
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

order.validate(
    function(result) {
        console.log("*********************************** Order Validated ************************************************************************************************************")
        console.log(util.inspect(result, false, null, true))
    }
)

order.price(
    function(result) {
        console.log("*********************************** Price ************************************")
        console.log(util.inspect(result, false, null, true))
    }
)

let cardNumber = process.env.CC_NUMBER
let cardInfo = new order.PaymentObject()
    cardInfo.Amount = order.Amounts.Customer
    cardInfo.Number = cardNumber
    cardInfo.CardType = order.validateCC(cardNumber)
    cardInfo.Expiration = process.env.CC_EXPIRE
    cardInfo.SecurityCode = process.env.CC_SECCODE
    cardInfo.PostalCode = process.env.CC_ZIP

//console.log(process.env.CC_NUMBER)

order.Payments.push(cardInfo)

order.place(
    function(result) {
        console.log("*********************************** Order Placed! ************************************")
        console.log(util.inspect(result, false, null, true))
    }
)

