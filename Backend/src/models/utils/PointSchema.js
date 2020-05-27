const mongooose = require('mongoose');

const PointSchema = new mongooose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        require: true,
    }
});

module.exports = PointSchema;