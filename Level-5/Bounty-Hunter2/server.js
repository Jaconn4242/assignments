const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


// Middleware
app.use(express.json())
app.use(morgan("dev"))

// Mongoose connect to DB
mongoose.connect("mongodb+srv://jaconn4242:ConnsCoding2021@cluster0.lvqmn.mongodb.net/BountyData?retryWrites=true&w=majority",
() => console.log("Connected to the database (Atlas)"))

// Routes
app.use("/bounties", require("./routes/bountiesRouter.js"))


// Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
    // This function is the same syntax for every project
})


app.listen(9000, () => {
    console.log("App is running on port 9000")
})