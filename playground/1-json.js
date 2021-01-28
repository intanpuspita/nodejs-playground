const fs = require('fs')

const buffer = fs.readFileSync('1-data.json')

// New content
const model = JSON.parse(buffer)
model.name = 'Intan Puspita'
model.planet = 'earth'
model.age = '27.3'

const content = JSON.stringify(model)
fs.writeFileSync('1-data.json', content)