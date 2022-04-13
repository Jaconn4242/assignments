const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")

// Middleware
app.use(express.json())

// Routes

app.use("/movies", require("./routes/movieRouter.js"))
app.use("/players", require("./routes/playerRouter.js"))

// server listens on port 9000
app.listen(9000, () => {
    console.log("Server is running on port 9000")
})
























// const express = require("express")
// const app = express()

// const players = [
//     {
//         firstName: "Addy",
//         lastName: "",
//         battingOrder: 1
//     },
//     {
//         firstName: "Abbi",
//         lastName: "",
//         battingOrder: 1
//     },
//     {
//         firstName: "Michael",
//         lastName: "",
//         battingOrder: 1
//     }
// ]

// app.get("/api", (req,res) => {
//     res.send(players)
// })

// app.listen(5000, () => {console.log("Server started on port 5000")})