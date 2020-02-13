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

// user route
const userRouter = require('./routes/userRoute')
app.use('/user', userRouter)

// order route
const orderRouter = require('./routes/order')
app.use('/order', orderRouter)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
mongoose.set('useFindAndModify', false)
dotenv.config()

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
    res.json('/')
})

app.listen(PORT, () => {
    console.log('DOMinos is now running on port ' + PORT)
})
