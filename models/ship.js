const mongoose = require('mongoose');

const ShipSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    seatCapacity: {
        type: Number,
    },
    deckAvailability: {
        type: Boolean,
        default: true
    },
    deckFare: {
        type: Number,
    },
    seatPlan: {
        type: Boolean,
        default: true
    },
    status: {
        type: Boolean,
        default: true
    },
    
});

const Ship = mongoose.model('Ship', ShipSchema);
module.exports = Ship;