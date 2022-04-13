const express = require("express")
const app = express()


// Middleware
app.use(express.json())

// Routes
app.use("/bounties", require("./routes/bountiesRouter.js"))







app.listen(9000, () => {
    console.log("App is running on port 9000")
})