const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())

app.use(morgan("dev"))

app.use("/to-do-list", require("./routes/ToDoListRouter.js"))




// App listens on port 9000
app.listen(9000, () => {
    console.log("App is running on port 9000")
})