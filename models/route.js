const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    boardingPlace: {
        type: Array,
    },
    droppingPoint: {
        type: Array,
    },
    contactPerson: {
        type: String,
    },
    name: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Route = mongoose.model('Route', RouteSchema);
module.exports = Route;