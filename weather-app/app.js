const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const location = process.argv[2]
if(location === undefined) {
    console.log('Please provide the location')
} else {
    // data using default function parameter
    geocode(location, (error, {latitude, longitude, location} = {}) => {
        if(error)
            return console.log('Error: ', error)
        
        forecast(latitude, longitude, (error, foreCastData) => {
            if(error)
                return console.log('Error', error)
            
            console.log('Location:', location)
            console.log('Data: ', foreCastData)
        })
    })
} 