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

/*
/restaurants

limit=10
skipResults=0

/restaurants?limit=30&page=2

limit=30
skipResults=0

*/