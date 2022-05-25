const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
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
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Comment", commentSchema)