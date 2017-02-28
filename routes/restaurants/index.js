const express = require('express')
const Router = express.Router()

const getAll = require('./handlers/getAll')
const getByBorough = require('./handlers/getByBorough')

function getRouter(db) {

  Router.get('/', getAll.bind(null, db) )
  Router.get('/borough/:borough', getByBorough.bind(null, db) )

  return Router

}

module.exports = getRouter