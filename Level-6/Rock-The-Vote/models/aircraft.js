const mongoose = require("mongoose")
const Schema = mongoose.Schema

const aircraftSchema = new Schema({
    year: {
        type: Number,
        required: true
    },
    make: {
        type: String,
        required: true,
        lowercase: true
    },
    model: {
        type: String,
        required: true,
        lowercase: true
    },
    imgUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    upVotes: [{
        type: Schema.Types.ObjectId,
         ref: 'User'
        }],
    downVotes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
        }],
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Aircraft", aircraftSchema)