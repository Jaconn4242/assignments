const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
        // lowercase: true,
        // unique: true
        //default: lastname or saved image
    },
    isLiving: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    bountyAmount: {
            type: String,
            required: true
        }
    })
    
  module.exports = mongoose.model("Bounty", bountySchema)  

  
    // module.exports = mongoose.model("Bounty", bountySchema)
    // const mongoose = require("mongoose")
    // const Schema = mongoose.Schema
    
    // // schemas (method built in to mongoose)
    
    // const bountySchema = new Schema(