const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
    s_no: { type: Number, required: true },
    name: { type: String, required: true },
    part_number: { type: String, required: true },
    date_received: { type: Date, required: true },
    number_received: { type: Number, required: true },
    date_dispatch: { type: Date },
    number_dispatched: { type: Number },
    balance_items: { type: Number, required: true },
    qr_identifier: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Component', componentSchema);