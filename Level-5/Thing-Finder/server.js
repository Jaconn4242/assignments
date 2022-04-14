const express = require("express")
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/aircraft", require("./routes/aircraftRouter.js"))

// App listens on port 9000
app.listen(9000, () => {
    console.log("App running on port 9000")
})