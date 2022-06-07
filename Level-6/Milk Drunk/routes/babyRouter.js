const express = require("express")
const aircraft = require("../../Rock-The-Vote/models/aircraft")
const babyRouter = express.Router()
const Baby = require("../models/baby.js")

// Get all Babies
babyRouter.get("/", (req, res, next) => {
    Baby.find((err, babies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(babies)
    })
})

// Get all babies by parentId
babyRouter.get("/:parent", (req, res, next) => {
    Baby.find({parent: req.auth._id}, (err, babies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(babies)
    })
})

// Get baby by babyId
babyRouter.get("/:babyId", (req, res, next) => {
    Baby.findById(req.params.babyId, (err, foundbaby) => {
        if(err){
            res.status(500)
            return next(err)
        } else if(!foundbaby){
            res.status(404)
            return next(new Error("No Baby found"))
        }
        return res.send(foundbaby)
    })
})

// Post a new Baby
babyRouter.post("/", (req, res, next) => {
    req.body.parent = req.auth._id
    const baby = new Baby(req.body);
    baby.save((err, newBaby) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newBaby)
    })
})

// Update baby info
babyRouter.put("/:babyId", (req, res, next) => {
    Baby.findOneAndUpdate(
        {_id: req.params.babyId, parent: req.auth._id},
        req.body,
        {new: true},
        (err, updatedBaby) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedBaby)
        }
    );
});

// Delete baby
babyRouter.delete("/:babyId", (req, res, next) => {
    Baby.findByIdAndDelete({_id: req.params.babyId, parent: req.auth._id}, (err, deletedBaby) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200). send(`Successfully deleted ${deletedBaby.babyname}`)
    })
})

module.exports = babyRouter