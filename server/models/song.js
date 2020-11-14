const mongoose = require('mongoose');
const schema = mongoose.schema;

const songSchema =  new Schema({
    name: String,
    genre: String,
    artistId: String
});

module.exports = mongoose.model('Song', songSchema);