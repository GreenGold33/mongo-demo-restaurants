const express = require('express')
const MongoClient = require('mongodb').MongoClient

const getFilterParams = require('./middlewares/getFilterParams')

const getRouterRestaurants = require('./routes/restaurants')
const getRouterRestaurant = require('./routes/restaurant')

const app = express()

const url='mongodb://localhost:27017/test'
const PORT=3000

MongoClient.connect(url)
  .then ( db => {

    app.use( getFilterParams )
    app.use( '/restaurants', getRouterRestaurants(db) )
    app.use( '/restaurant', getRouterRestaurant(db) )

    // app.use( '/restaurants',
    //   (req, res, next) => {
    //     const { key } = req.query;
    //     if ( key === '12345') {
    //       next()
    //     }
    //     else {
    //       res.send(`you don't have permissions!`)
    //     }
    //   },
    //   getRouterRestaurants(db)
    //)



  })

app.listen(PORT, () => console.log(`🚀  Magic happens at PORT ${PORT}...`))
