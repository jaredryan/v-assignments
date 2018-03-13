const mongoose = require('mongoose');

const bountySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    living: Boolean,
    bountyAmount: {
        type: Number,
        min: 0
    },
    type: {
        type: String,
        enum: ["Jedi", "Sith"]
    },
});

module.exports = mongoose.model("Bounty", bountySchema);
