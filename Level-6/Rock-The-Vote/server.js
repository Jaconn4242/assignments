const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const {expressjwt: jwt} = require("express-jwt")

// middleware
app.use(morgan("dev"))
app.use(express.json()) //why is word express blue upon opening of file then yellow after a few seconds

// connection to database
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@rtvdata.8yvmd.mongodb.net/?retryWrites=true&w=majority`, (err) => {
    if(err) throw err
    console.log("Connected to rtvDatabase")
})
// Routes
app.use("/auth", require("./routes/authRouter.js"))
app.use("/api", jwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/aircraft", require("./routes/aircraftRouter.js"))
app.use("/api/aircraft/comments", require("./routes/commentRouter.js"))


// Global error handler
app.use((err,req,res,next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
// Server listening
app.listen(process.env.MY_VAR || 7000, () => {
    console.log("Application server is running")
})