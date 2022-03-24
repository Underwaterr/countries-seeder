let mongoose = require('mongoose')

let countryModel = mongoose.model('Country', new mongoose.Schema({
  name: String, 
  capital: String,
  region: String,
  population: Number
}))

module.exports = countryModel
