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
    upvote:{
        type: Boolean,
        default: false
    },
    downvote:{
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

})

module.exports = mongoose.model("Aircraft", aircraftSchema)