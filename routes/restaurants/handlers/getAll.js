module.exports = (db, req,res) => {

  const { limit, skipResults, projection } = req

  db.collection('restaurants')
    .find( {}, projection )
    .limit( limit )
    .skip( skipResults )
    .toArray( (err, aRestaurants) => {
        res.json(aRestaurants)
    })

}