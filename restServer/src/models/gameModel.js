const mongoose = require('mongoose');

const desctinationSchema = new mongoose.Schema({

    name: String,
    description: String,
    imgOne: String,
    imgTwo: String,
    imgThree: String,
});

module.exports = mongoose.model('Destination', desctinationSchema);