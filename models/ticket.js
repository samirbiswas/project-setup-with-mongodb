const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    totalSeat: {
        type: Number,
    },
    companyName: {
        type: String,
    },
    ticketType: {
        type: String,
    },
    tripCode: {
        type: String,
    },
    serial: {
        type: Number,
    },
    tripDateTime: {
        type: Date,
    },
    direction: {
        type: String,
    },
    shipName: {
        type: String,
    },
    pnrCode: {
        type: String,
    },
    userType: {
        type: String,
    },
    passengerName: {
        type: String,
    },
    passengerPhone: {
        type: String,
    },
    passengerGender: {
        type: String,
    },
    passengerNID: {
        type: String,
    },
    passengerAddress: {
        type: String,
    },
    boardingPlace: {
        type: String,
    },
    droppingPoint: {
        type: String,
    },
    seatClassId: {
        type: String,
    },
    seatClassName: {
        type: String,
    },
    seatNumbers: {
        type: String,
    }
});

const Ticket = mongoose.model('Ticket', TicketSchema);
module.exports = Ticket;