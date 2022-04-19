const express = require("express")
const bountiesRouter = express.Router()
const mongoose = require("mongoose")
const bounty = require("../models/bounty.js")
const Bounty = require("../models/bounty.js")
// const {v4: uuidv4} = require('uuid')


// const bounties = [
//     {
//         firstName: "Victor",
//         lastName: "Smorkisborg",
//         living: true,
//         bountyAmount: 50,
//         type: "sith",
//         _id: uuidv4()
//     },
//     {
//         firstName: "Hector",
//         lastName: "Wallas",
//         living: false,
//         bountyAmount: 20,
//         type: "jedi",
//         _id: uuidv4()
//     }
// ]
// GET REQUEST
bountiesRouter.get("/", (req,res,next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(bounties)
    })
})

// POST request
bountiesRouter.post("/", (req,res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
    })

// GET request by Id **
bountiesRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        const error = new Error(`The item with id ${bountyId} was not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

// GET request by query string *SEARCH BY TYPE*
bountiesRouter.get("/search/type", (req, res, next) => {
 Bounty.find({type: req.query.type}, (err, bounties) => {
     if(err){
         res.status(500)
         return next(err)
     }
    //  console.log(res.body)
     return res.status(200).send(bounties)
 })
})
// GET request by query string *SEARCH BY LIVING STATUS*
bountiesRouter.get("/search/isLiving", (req, res, next) => {
    Bounty.find({isLiving: req.query.isLiving}, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
       //  console.log(res.body)
        return res.status(200).send(bounties)
    })
   })

// DELETE Request
bountiesRouter.delete("/:bountyId", (req, res, next) =>{
  Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(200).send(`Successfully deleted item ${deletedBounty} from the database`)
  })
    // const bountyId = req.params.bountyId
    // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    // bounties.splice(bountyIndex, 1)
    // res.send("Deleted Successfully!")
})

// PUT Request
bountiesRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findByIdAndUpdate(
        {_id: req.params.bountyId}, //find one to update
        req.body, //update the object with this data
        {new: true}, //send back the updated version
        (err, updatedBounty)=> {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
        )

    // const bountyId = req.params.bountyId
    // const update = req.body
    // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    // const updatedBounty = Object.assign(bounties[bountyIndex], update)
    // res.status(201).send(updatedBounty)
})

    




module.exports = bountiesRouter


// Get request to filter by type
  // const type = req.query.type
    // if(!type) {
    //     const error = new Error(`You must provide a type`)
    //     res.status(500)
    //     return next(error)
    // } else if (type !== "jedi" && type !== "sith"){
    //     const error = new Error(`this type does not exist, please define whether the person is "sith" or "jedi"`)
    //     res.status(500)
    //     return next(error)
    // }
    // const filteredType = bounties.filter(bounty => bounty.type === type)
    // res.status(200).send(filteredType)