const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()

// Setup handlebars engine and view location
app.set('view engine', 'hbs') // set view engine to use module hbs
app.set('views', path.join(__dirname, '../templates/views')) // set view path to other directory (the default is 'views')
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public'))) // set to directory with static content

// Setup routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Application',
        name: 'Intan Puspitasari'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Intan Puspitasari'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        desc: 'This is our help text',
        name: 'Intan Puspitasari'
    })
})
app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        });
    }

    // Get geocode and weather using API
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error)
            return res.send({
                error
            });
        
        forecast(latitude, longitude, (error, foreCastData) => {
            if(error)
                return res.send({
                    error
                });
            
            res.send({
                location,
                forecast: foreCastData
            })
        })
    })
})
app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query);
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        errorMessage: 'Help article not found',
        title: 'Error Page',
        name: 'Intan Puspitasari'
    })
})
app.get('*', (req, res) => {
    res.render('error', {
        errorMessage: 'Page not found',
        title: 'Error Page',
        name: 'Intan Puspitasari'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})