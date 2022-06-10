const mongoose = require("mongoose")
const Schema = mongoose.Schema

const trackerSchema = new Schema({
    diaperLog: {
        type: String,
        required: true
    },
    feedingLog: {
        type: String,
        required: true
    },
    sleepingLog: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    baby: {
        type: Schema.Types.ObjectId,
        ref: "Baby"
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Tracker", trackerSchema)