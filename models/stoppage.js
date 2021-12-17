const mongoose = require('mongoose');

const StoppageSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    digitalTicketingFromStoppage: {
        type: Boolean,
        default: true
    },
    digitalTicketingToStoppage: {
        type: Boolean,
        default: true
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Stoppage = mongoose.model('Stoppage', StoppageSchema);
module.exports = Stoppage;