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

// get aircraft by userId
aircraftRouter.get("/user", (req, res, next) => {
    Aircraft.find({user: req.auth._id}, (err, aircraft) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(aircraft)
    })
})
// get aircraft by aircraftId
aircraftRouter.get("/:aircraftId", (req, res, next) => {
    Aircraft.findById(req.params.aircraftId, (err, aircraft) => {
        if(err){
            res.status(500)
            return next(err)
        } else if(!aircraft){
            res.status(404)
            return next(new Error("No aircraft found"));
        }
        return res.send(aircraft)
    })
})
// post a new aircraft
aircraftRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const aircraft = new Aircraft(req.body);
    aircraft.save((err, newAircraft) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newAircraft);
    });
});

// update an aircraft
aircraftRouter.put("/:aircraftId", (req, res, next) => {
    Aircraft.findOneAndUpdate(
        {_id: req.params.aircraftId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedAircraft) => {
            if(err){
                res.status(500);
                return next(err);
            }
            return res.status(200).send(updatedAircraft)
        }
    );
});

// delete an aircraft
aircraftRouter.delete("/:aircraftId", (req, res, next) => {
    Aircraft.findOneAndDelete({_id: req.params.aircraftId, user: req.auth._id}, (err, deletedAircraft) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted the ${deletedAircraft.model}`)
    })
})





module.exports = aircraftRouter