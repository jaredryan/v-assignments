const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    votes: Number,
    comments: [String]
});

module.exports = mongoose.model("Issue", issueSchema);
