const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {type: String},
    imgUrl: {type: String},
    description: {type: String,},
    upVotes: [{
        type: Schema.Types.ObjectId,
         ref: 'User'
        }],
    downVotes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
        }],
    // comments: [{
    //     type: Object,
    //     ref: "Comment"
    // }],
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

module.exports = mongoose.model("Post", postSchema)