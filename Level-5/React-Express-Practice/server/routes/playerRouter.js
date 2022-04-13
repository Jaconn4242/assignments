const express = require("express")
const playerRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const players = [
    {firstName: "Michael", lastName: "Donahue", _id: uuidv4()},
    {firstName: "Amy", lastName: "Carmicle", _id: uuidv4()},
    {firstName: "Eric", lastName: "Wilson", _id: uuidv4()}
]
   
playerRouter.route("/")

    .get((req,res) => {
        res.send(players)
    })

    .post((req,res) => {
        const newPlayer = req.body
        newPlayer._id = uuidv4()
        players.push(newPlayer)
        res.send(`Successfully added ${newPlayer.firstName} to the database`)
       })




module.exports = playerRouter