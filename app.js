const express = require('express')
const MongoClient = require('mongodb').MongoClient

const getFilterParams = require('./middlewares/getFilterParams')
const getRouterRestaurants = require('./routes/restaurants')

const app = express()

const url='mongodb://localhost:27017/test'
const PORT=3000

MongoClient.connect(url)
  .then ( db => {

    app.use( getFilterParams )
    app.use( '/restaurants', getRouterRestaurants(db) )

  })

app.listen(PORT, () => console.log(`🚀  Magic happens at PORT ${PORT}...`))
