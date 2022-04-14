const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")

app.use(express.json())

const homes = [
    {
        _id: uuidv4(),
        owners: "The Thompsons",
        style: "ranch",
        sqaureFootage: "1200",
        yearBuilt: "1950",
        numberOfBeds: "3",
        numberOfBaths: "2"
    }
]
// 1st Middleware
app.use("/homes", (req, res, next) => {
    console.log("Middleware will add the for sale property")
    next()
})
// second Middleware
app.use("/homes", require("./routes/addPropRouter.js"))


// GET request
app.get("/homes", (req, res, next) => {
    req.body.homes = homes
    res.send(req.body)
})

// App listens on port 5000
app.listen(5000, () => {
    console.log("App running on port 5000")
})