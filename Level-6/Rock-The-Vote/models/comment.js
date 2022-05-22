const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    aircraft: {
        type: Schema.Types.ObjectId,
        ref: "Aircraft"
    }
    

})