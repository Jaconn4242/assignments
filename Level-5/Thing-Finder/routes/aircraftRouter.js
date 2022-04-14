const express = require("express")
const aircraftRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const aircraft = [
    {
        year: 2000,
        make: "Cessna",
        model: "150",
        price: 51000,
        color: "red",
        _id: uuidv4()
    },
    {
        year: 2019,
        make: "Piper",
        model: "Cub",
        price: 49275,
        color: "white",
        _id: uuidv4()
    },
    {
        year: 1950,
        make: "Aeronca",
        model: "350",
        price: 125000,
        color: "white",
        _id: uuidv4()
    }
]



// GET Request
aircraftRouter.get("/", (req, res) => {
    res.send(aircraft)
})

// POST Request
aircraftRouter.post("/", (req, res) => {
    const newAircraft = req.body
    newAircraft._id = uuidv4()
    aircraft.push(newAircraft)
    res.send(`Successfully added ${newAircraft.make} ${newAircraft.model} to the database!`)
})

// GET Request by ID
aircraftRouter.get("/:aircraftId", (req, res) => {
    const aircraftId = req.params.aircraftId
    const foundAircraft = aircraft.find(plane => plane._id === aircraftId)
    res.send(foundAircraft)
})

// GET Request using query ***filter by color***
aircraftRouter.get("/search/color", (req, res) => {
    const color = req.query.color
    const filteredAircraft = aircraft.filter(plane => plane.color === color)
    res.send(filteredAircraft)
})

// GET Request using query ***filter by price***
aircraftRouter.get("/filter/price", (req, res) => {
    const price = req.query.price
    if(price < 50000){
        res.send(aircraft.filter(plane => plane.price < 50000))
    } else{
        res.send(aircraft.filter(plane => plane.price > 50000))
    }
})

// DELETE Request
aircraftRouter.delete("/:aircraftId", (req, res) => {
    const aircraftId = req.params.aircraftId
    const index = aircraft.findIndex(plane => plane._id === aircraftId)
    aircraft.splice(index, 1)
    res.send(`Successfully deleted from the Database`)
})






module.exports = aircraftRouter