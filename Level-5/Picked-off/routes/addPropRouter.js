const express = require("express")
const addPropRouter = express.Router()
const {v4: uuidv4} = require("uuid")


addPropRouter.use("/", (req, res, next) => {
     req.body = {forSale: true}
     next()
})

module.exports = addPropRouter
