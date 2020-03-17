// Dependencies
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const PORT = 1200

// order route
const orderRouter = require('./routes/order')
app.use('/order', orderRouter)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
dotenv.config()

app.get('/', (req, res) => {
    res.json('/')
})

app.listen(PORT, () => {
    console.log('DOMinos is now running on port ' + PORT)
})
