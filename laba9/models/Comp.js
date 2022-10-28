const { Schema, model } = require("mongoose");

const schema = Schema({
    producer: {
        type: String
    },
    driveSpace: {
        type: Number
    },
    guarantee: {
        type: Number
    },
    amount: {
        type: Number
    }
})

module.exports = model('Comp', schema)