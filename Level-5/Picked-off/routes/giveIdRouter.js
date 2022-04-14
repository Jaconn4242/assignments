const express = require("express")
const  = express.Router()
const {v4: uuidv4} = require("uuid")

const homes = [
    {
        _id: uuidv4(),
        owners: "The Thompsons",
        style: "ranch",
        sqaureFootage: "1200",
        yearBuilt: "1950",
        numberOfBeds: "3",
        numberOfBaths: "2"
    },
    {
        _id: uuidv4(),
        owners: "The Smiths",
        style: "victorian",
        sqaureFootage: "1400",
        yearBuilt: "1980",
        numberOfBeds: "3",
        numberOfBaths: "1 1/2"
    },
    {
        _id: uuidv4(),
        owners: "The Walts",
        style: "Mid-century Modern",
        sqaureFootage: "1000",
        yearBuilt: "2000",
        numberOfBeds: "2",
        numberOfBaths: "2"
    }
]
// GET Request
homesRouter.get("/", (req, res, next) => {
    res.send(homes)
})

// POST Request
homesRouter.post("/", (req, res, next) => {
    const newHome = req.body
    homes.push(newHome)
    res.send(`Successfully added ${newHome.owners} to the database!`)
})





module.exports = homesRouter
