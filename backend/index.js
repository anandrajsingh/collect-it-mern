const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config();

const app = express()
const port = process.env.PORT;

try {
    const connect = mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => console.log("mongodb connected."))
} catch (error) {
    console.log(error)
}

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: "Hello!" })
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})