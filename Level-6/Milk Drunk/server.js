const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const {expressjwt: jwt} = require("express-jwt")

// Middleware
app.use(express.json())
app.use(morgan("dev"))

//Database Connection
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.w6vdk.mongodb.net/?retryWrites=true&w=majority`,(err)=> {
    if(err) throw err
    console.log("Connected to MD-MongoDB ")
})
//Routes

app.use("/auth", require("./routes/authRouter.js"))
app.use("/api", jwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/post", require("./routes/postRouter.js"))
app.use("/api/baby", require("./routes/babyRouter.js"))
app.use("/api/baby/trackerLogs", require("./routes/trackerRouter.js"))

// Global Error Handler
app.use((err,req,res,next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// Server Listening
app.listen(process.env.MY_VAR || 9000, ()=> {
    console.log(`App is running on port ${process.env.MY_VAR}`)
})