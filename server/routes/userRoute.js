const express = require('express')
const router = express.Router()
const User = require('../models/user')
router.use(express.urlencoded({extended: false}))
const cors = require('cors')
global.bcrypt = require('bcrypt')
global.SALT_ROUNDS = 10
router.use(express.json())

router.use(cors())

//registers a user
router.post('/register-user', async (req, res) => {

    let email = req.body.email,
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

//user login
router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    let permUser = await User.findOne({email})
    .then(function(permUser) {
        if (!permUser) {
            console.log("There isn't an account associated with this email.")
        }
        else {
            bcrypt.compare(password, permUser.password, function(err, result) {
                if (result == true) {
                    console.log(permUser.password)
                    const token = jwt.sign({email: permUser.email}, '91142069R2D2C3PO#getthatmoney')
                    res.json({token: token})
                }
                else {
                    console.log("Incorrect... password?")
                }
            })
        }
    })


})

//view all registered users
router.get('/view-registered-users', (req, res) => {
    User.find({}).then(users => res.json(users))
})

//unregister (delete) a user
router.post('/unregister-user/:userId', (req, res) => {
    const userId = req.params.userId
    User.findOneAndDelete(userId).then(() => res.send('User removed from database.'))
})

//update registered user's info
router.put('/view-registered-users/update/:userId', (req, res) => {
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
    }).then(res.send('Profile updated!')).catch(error => res.send(error))
})

module.exports = router