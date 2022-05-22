const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const { expressjwt: jwt } = require("express-jwt");
// const expressJwt = require("express-jwt")


// Middleware
app.use(morgan("dev"))
app.use(express.json())

// Connection to db
mongoose.connect(`mongodb+srv://jaconn4242:helloworld@userdata.w1lgk.mongodb.net/?retryWrites=true&w=majority`, (err) => {
    if(err) throw err
    console.log("Connected to Database")
})

app.use("/auth", require("./routes/authRouter.js"))
// app.use("/api", expressJwt({secret: process.env.SECRET})); //creates the payload or req.user
app.use("/api", jwt( {secret: process.env.SECRET, algorithms: ['HS256']})) //best algorithm to protect .env info
app.use("/api/todo", require("./routes/todo"))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

app.listen(9000, () => {
    console.log("[+] App listening on port 9000")
})


