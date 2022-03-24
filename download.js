let fs = require('fs').promises

let url = 'https://restcountries.com/v3.1/all'

let parseResponse = response=> response.json()
//let logJson = json=> console.log(JSON.stringify(json))
let writeJsonToFile = json=> fs.writeFile('./countries.json', JSON.stringify(json))
let handleError = error=> console.error(error)

fetch(url)
  .then(parseResponse)
  .then(writeJsonToFile)
  .catch(handleError)

