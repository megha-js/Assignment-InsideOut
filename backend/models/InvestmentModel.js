const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 20
    },
    type: {
        type: String,
        default: "investment"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },

}, { timestamps: true })

module.exports = mongoose.model('Investment', InvestmentSchema)