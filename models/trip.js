const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    bookedSeats: {
        type: Array,
    },
    status: {
        type: String,
    },
    tripCode: {
        type: String,
    },
    deckAvailability: {
        type: Boolean,
        default: true
    },
    deckFare: {
        type: Number,
    },
    direction: {
        type: String,
    },
    tripDate: {
        type: Date,
    },

});

const Trip = mongoose.model('Trip', TripSchema);
module.exports = Trip;