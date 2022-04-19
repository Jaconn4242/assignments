const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware
app.use(express.json())
app.use(morgan("dev"))

// Routes
app.use("/inventory", require("./routes/InventoryRouter.js"))

// Connecting to database using MongoDB Atlas
mongoose.connect("mongodb+srv://jaconn4242:ConnsCoding2021@cluster0.jykgn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
 () => console.log("Connected to the Database! (Atlas)"))
 
// Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// App listening of port 9000
app.listen(9000, () => {
    console.log("App is running on port 9000")
})