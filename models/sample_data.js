const mongoose = require('mongoose');

const SerialSchema = new mongoose.Schema({
    serial: {
        type: Number,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    
});

const SapmleData = mongoose.model('Sample', SerialSchema);
module.exports = SapmleData;