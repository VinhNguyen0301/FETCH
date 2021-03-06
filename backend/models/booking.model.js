const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: Number, required: true },
    quantity: { type: Number, required: true },
    prices: { type: Number, require: true },
    date: { type: Date, required: true }
}, {
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;