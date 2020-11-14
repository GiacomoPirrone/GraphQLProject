const mongoose = require('mongoose');
const schema = mongoose.schema;

const artistSchema =  new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Artist', artistSchema);