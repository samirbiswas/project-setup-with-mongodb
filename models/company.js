const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    tag: {
        type: String,
    },
    name: {
        type: String,
    },
    contactPerson: {
        type: String,
    },
    phone: {
        type: String,
    },
    logo: {
        type: String,
    },
    maxSeatPerTicket: {
        type: Number,
    },
    ticketBlockHour: {
        type: Number,
    },
    allowDiscount: {
        type: Boolean,
        default: false
    },
    allowTotalPaidEdit: {
        type: Boolean,
        default: false
    },
    allowPandemicFares: {
        type: Boolean,
        default: false
    },
    deckCommissionBase: {
        type: String,
    },
    deckCommissionRate: {
        type: String,
    },
    goodsCommissionBase: {
        type: String,
    },
    goodsCommissionRate: {
        type: String,
    },
    digitalTicketingCommissionBase: {
        type: String,
    },
    digitalTicketingCommissionRate: {
        type: String,
    },
    paymentGatewayRate: {
        type: String,
    },
    seatCommissionBase: {
        type: String,
    },
    seatCommissionRate: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Company = mongoose.model('Company', CompanySchema);
module.exports = Company;