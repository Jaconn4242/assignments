const mongoose = require("mongoose")
const Schema = mongoose.Schema

const trackerSchema = new Schema({
// Feeding Section Below
    feedingDate:{
        type: String
    },
    feedingTime:{
        type: String
    },
    feedingAmount:{
        type: String
    },
    feedingNotes:{
        type: String
    },
// Diaper Section Below
    diaperDate: {
        type: String
    },
    diaperTime:{
        type: String
    },
    diaperStatus:{
        type: String
    },
//Sleeping Section Below
    sleepingDate: {
        type: String,
    },
    sleepingStart:{
        type: String
    },
    sleepingEnd:{
        type: String
    },
    sleepingNotes:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    baby: {
        type: Schema.Types.ObjectId,
        ref: "Baby",
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Tracker", trackerSchema)