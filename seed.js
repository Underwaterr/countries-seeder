// Import Mongoose Library
let mongoose = require('mongoose')

// For backwards compatibility (we can ignore this)
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }

// Connect our Node project to our MongoDB process
mongoose.connect('mongodb://127.0.0.1:27017/countries', mongooseConfig)

// Import our Countries JSON file
let data = require('./countries.json')

// Create an array of countries from the JSON file
let countries = []
for(let i=0; i<data.length; i++) {
  //Format the data from the JSON file to fit our model
  countries.push({
    name: data[i].name.common,
    capital: data[i].capital 
      ? data[i].capital[0] 
      : null,
    region: data[i].region,
    population: data[i].population,
  })
}

// Import our Mongoose Country Model
let Country = require('./country-model.js')

Country
  .deleteMany({})
  .then(()=> Country.create(countries))
  .then(()=> mongoose.disconnect())
  .then(()=> console.log("Done"))
  .catch(error=> console.error(error))

