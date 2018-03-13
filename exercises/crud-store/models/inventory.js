const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    description: String
});

module.exports = mongoose.model("Inventory", inventorySchema);
