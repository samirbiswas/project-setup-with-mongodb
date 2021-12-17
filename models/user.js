const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    reportPrintLimit: {
        type: Number,
    },
    shipId: {
        type: Array,
    },
    roles: {
        type: Array,
    },
    name: {
        type: String,
    },
    designation: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    nid: {
        type: String,
    },
    address: {
        type: String,
    },
    avatar: {
        type: String,
    },
    transactionType: {
        type: String,
    },
    balance: {
        type: String,
    },
    commission: {
        type: String,
    },
    commissionType: {
        type: String,
    },
    userType: {
        type: String,
    },
    companyId: {
        type: String,
    },
    counterId: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    },
    api_token: {
        type: String,
    },
    device_token: {
        type: String,
    },
    reset_token: {
        type: String,
    },

});

const User = mongoose.model('User', UserSchema);
module.exports = User;