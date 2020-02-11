// Dependencies
const express = require('express')
const pizzaapi = require('dominos')
const dotenv = require('dotenv')
const util = require('util')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 1200
const User = require('./models/user')
const app = express()
global.bcrypt = require('bcrypt')
global.SALT_ROUNDS = 10
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
mongoose.set('useFindAndModify', false);
dotenv.config()

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true})

//registers a user
app.post('/register-user', async (req, res) => {

    let //firstName = req.body.firstName,
    //lastName = req.body.lastName,
    email = req.body.email,
    //phone = req.body.phone
    password = req.body.password

    let persistedUser = await User.findOne({email})

    if (persistedUser === null) {
        bcrypt.hash(password, SALT_ROUNDS, async(error, hash) => {
            if (error) {
                console.log(error)
                res.send('Error creating user ¯\_(ツ)_/¯')
            }
            else {
                let user = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    address: {
                        Street: req.body.street,
                        City: req.body.city,
                        Region: req.body.state,
                        PostalCode: req.body.zip
                    },
                    email: req.body.email, 
                    phone: req.body.phone,
                    password: hash,
                    pastOrders: {
                        item: {
                            code: req.body.item_code,
                            options: req.body.item_options,
                            quantity: req.body.item_quantity
                        },
                        date_ordered: req.body.date_ordered,
                        delivery_address: {
                            Street: req.body.street,
                            City: req.body.city,
                            Region: req.body.state,
                            PostalCode: req.body.zip
                        }
                    }
                })
                let registeredUser = await user.save()

                await console.log(registeredUser)
                if (registeredUser !== null) {
                    console.log('User registered!')
                    res.send('User registered!')
                }
                else {
                    res.send('There is already a user who has registered with that information ¯\_(ツ)_/¯')
                }
            }
        })
    }
    else {
        res.send('There is already a user who has registered with that information ¯\_(ツ)_/¯')
    }
})

//view all registered users
app.get('/view-registered-users', (req, res) => {
    User.find({}).then(users => res.json(users))
})

//unregister (delete) a user
app.post('/unregister-user/:userId', (req, res) => {
    const userId = req.params.userId
    User.findOneAndDelete(userId).then(() => res.send('User removed from database.'))
})

//update registered user's info
app.put('/view-registered-users/update/:userId', (req, res) => {
    const userId = req.params.userId    

    User.findByIdAndUpdate(userId, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: {
            Street: req.body.street,
            City: req.body.city,
            Region: req.body.state,
            PostalCode: req.body.zip
        },
        email: req.body.email, 
        phone: req.body.phone,
        password: hash 
    }).then(res.send('Profile updated!')).catch(error => res.send(error))
})








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
