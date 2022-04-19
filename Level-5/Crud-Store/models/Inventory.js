const mongoose = require("mongoose")
const Schema = mongoose.Schema


const InventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    shipped: {
        type: Boolean,
        required: true
    }

})




module.exports = mongoose.model("Inventory", InventorySchema)













