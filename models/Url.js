const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    urlcode: String,
    longUrl: String,
    shortUrl: String,
    date:{
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('Url',UrlSchema);