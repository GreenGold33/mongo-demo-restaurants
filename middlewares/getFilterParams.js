module.exports = (req,res,next) => {

  const { limit=10, page=1 } = req.query
  const { show, hide } = req.query
  const skipResults = (+page-1) * limit
  const projection = {}

  if (show) { // !== undefined
    show.split(',').forEach( field => projection[field] = 1 )
  }

  if (hide) { // !== undefined
    hide.split(',').forEach( field => projection[field] = 0 )
  }

  req.limit = +limit
  req.skipResults = skipResults
  req.projection = projection

  next()

}