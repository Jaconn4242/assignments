const express = require("express")
const inventoryRouter = express.Router()
const mongoose = require("mongoose")
const Inventory = require("../models/Inventory.js")

// Get All
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, items) =>{
        if(err){
            res.status(500)
            return next(err)
        }
       res.status(200).send(items)
    })
})
// Get one
inventoryRouter.get("/:itemId", (req, res, next) => {
    Inventory.findOne({_id: req.params.itemId},(err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})
// Post Request
inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newItem)
    })

})
// Put Request
inventoryRouter.put("/:itemId", (req, res, next) => {
  Inventory.findOneAndUpdate(
      {_id: req.params.itemId},
      req.body,
      {new: true},
      (err, updatedItem) => {
          if(err){
              const error = new Error("Something went wrong, figure it out Jeff!")
              res.status(500)
              return next(error)
          }
          return res.status(201).send(updatedItem)
      }
    ) 
})

// Delete Request
inventoryRouter.delete("/:itemId", (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.name} from database`)
    })
})





module.exports = inventoryRouter