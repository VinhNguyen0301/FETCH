const router = require('express').Router();
let Booking = require('../models/booking.model');

router.route('/').get((req, res) => {
    Booking.find()
        .then(bookings => res.json(bookings))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const type = Number(req.body.type);
    const quantity = Number(req.body.quantity);
    const prices = Number(req.body.prices);
    const date = Date.parse(req.body.date);

    const newBooking = new Booking({ username, description, type, quantity, prices, date });

    newBooking.save()
        .then(() => res.json('Booking added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Booking.findById(req.params.id)
        .then(booking => res.json(booking))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Booking.findByIdAndDelete(req.params.id)
        .then(booking => res.json('Booking deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Booking.findById(req.params.id)
        .then(booking => {
            booking.username = req.body.username;
            booking.description = req.body.description;
            booking.type = Number(req.body.type);
            booking.quantity = Number(req.body.quantity);
            booking.prices = Number(req.body.prices);
            booking.date = Date.parse(req.body.date);

            booking.save()
                .then(() => res.json('Booking updated !'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;