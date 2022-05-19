const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware
app.use(morgan("dev"))
app.use(express.json())

// Connection to db
mongoose.connect("mongodb+srv://jaconn4242:helloworld@userdata.w1lgk.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if(err) throw err
    console.log("Connected to Database")
})

app.use("/auth", require("./routes/authRouter.js"))
app.use("/todo", require("./routes/todo"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ message: err.message })
})

app.listen(9000, () => {
    console.log("[+] App listening on port 9000")
})


