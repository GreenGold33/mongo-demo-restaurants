const express = require('express')
const MongoClient = require('mongodb').MongoClient

const getFilterParams = require('./middlewares/getFilterParams')
const getRestaurants = require('./getRestaurants')

const app = express()

const url='mongodb://localhost:27017/test'
const PORT=3000

MongoClient.connect(url)
  .then ( db => {

    app.use( getFilterParams )

    app.get('/restaurants', getRestaurants.bind(null, db) )

    app.get('/restaurants/borough/:borough', (req,res) => {

      const { borough } = req.params
      const { limit, skipResults } = req

      db.collection('restaurants')
        .find({ borough })
        .limit( limit )
        .skip( skipResults )
        .toArray( (err, aRestaurants) => {
            res.json(aRestaurants)
        })

    })


  })

app.listen(PORT, () => console.log(`🚀 Magic happens at PORT ${PORT}...`))
