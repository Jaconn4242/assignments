const express = require("express")
const app = express()
const morgan = require("morgan")


// Middleware
app.use(express.json())

app.use(morgan("dev"))
// Routes
app.use("/bounties", require("./routes/bountiesRouter.js"))







app.listen(9000, () => {
    console.log("App is running on port 9000")
})