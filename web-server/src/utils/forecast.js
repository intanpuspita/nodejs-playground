const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c8da929051fc6639ef12b7edc1783033&query='
                + latitude + ',' + longitude

    // json: true => set body to json
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather API', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast