const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=c8da929051fc6639ef12b7edc1783033&query=45,-75&units=f'
const request = http.request(url, (response) => {
    let data = ''

    // fires when data comes in
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()