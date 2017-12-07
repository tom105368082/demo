var mongoose = require('mongoose')
var Schema = mongoose.Schema

var circleSchema = mongoose.Schema({
    name: String,
    position: String,
})


module.exports = circleSchema
