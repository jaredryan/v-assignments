const mongoose = require('mongoose');

const weaponOptions = ["Single Green Shell", "Banana Peel", "Red Shell", "Blue Shell", "Triple Green Shell", "Single Red Shell", "Triple Red Shell", "Star"];

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    coolness: {
        type: Number,
        min: 1,
        max: 10
    },
    isGoodGuy: Boolean,
    favoriteWeapons: [{
        type: String,
        enum: weaponOptions
    }],
    address: {
        stress: String,
        city: String,
        state: {
            type: String,
            match: /[aeiou]/,
            minlength: 2,
            maxlength: 2,
            enum: ["AL", "AK"],
            uppercase: true
        },
        zip: String
    }
});

module.exports = mongoose.model("Character", characterSchema);
