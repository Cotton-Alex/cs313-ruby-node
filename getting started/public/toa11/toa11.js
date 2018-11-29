const express = require('express')

exports.sub = express()

exports.sub
  .get('/', (req, res) => res.render('pages/toa11-index'))

