const mongoose = require("mongoose")
const Schema = mongoose.Schema

const babySchema = new Schema({
    babyname: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    babyImg: {
        type: String,
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Baby", babySchema)
