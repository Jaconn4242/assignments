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
    upvotes:{
        type: Number,
        default: 0
    },
    downvotes:{
        type: Number,
        default: 0
    },
    voter: [{
        type: String
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Aircraft", aircraftSchema)