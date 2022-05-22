const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const {expressjwt: jwt} = require("express-jwt")

// middleware
app.use(morgan("dev"))
app.use(express.json())

// connection to database
mongoose.connect("mongodb+srv://Jaconn4242:rockthevote@rtvdata.8yvmd.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if(err) throw err
    console.log("Connected to rtvDatabase")
})
// Routes


// Server listening
app.listen(7000, ()=> {
    console.log("App running on port 7000")
})