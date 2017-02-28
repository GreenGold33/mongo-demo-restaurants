const ObjectId = require('mongodb').ObjectId

module.exports = (db, req,res) => {

  const { projection } = req
  const id = req.params.id

  db.collection('restaurants')
    .find( { _id: ObjectId(id) }, projection )
    .toArray( (err, aRestaurants) => {
        res.json(aRestaurants)
    })

}