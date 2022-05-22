const express = require("express")
const aircraftRouter = express.Router()
const Aircraft = require("../models/aircraft.js")

// get all Aircraft
aircraftRouter.get("/", (req,res,next) => {
    Aircraft.find((err, aircraft) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(aircraft)
    })
})






module.exports = aircraftRouter