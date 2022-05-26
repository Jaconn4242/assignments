const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    aircraft: {
        type: Schema.Types.ObjectId,
        ref: "Aircraft",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)