const express = require("express")
const bountiesRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {
        firstName: "Victor",
        lastName: "Smorkisborg",
        living: true,
        bountyAmount: 50,
        type: "sith",
        _Id: uuidv4()
    },
    {
        firstName: "Hector",
        lastName: "Wallas",
        living: false,
        bountyAmount: 20,
        type: "lord",
        _Id: uuidv4()
    }
]
// GET REQUEST
bountiesRouter.get("/", (req,res) => {
    res.send(bounties)
})

// POST request
bountiesRouter.post("/", (req,res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} to the database!`)
    })

// GET request by Id **
bountiesRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._Id === bountyId)
    console.log(foundBounty)
    res.send(foundBounty)
})

// GET request by query string
bountiesRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredType = bounties.filter(bounty => bounty.type === type)
    res.send(filteredType)
})

    




module.exports = bountiesRouter