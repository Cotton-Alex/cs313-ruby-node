const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// BEGIN SCHOOL REQUIRE STUFF
const toa11 = require('./toa11')
// END SCHOOL REQUIRE STUFF

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  // BEGIN SCHOOL USE STUFF
  .use('/toa11', toa11.sub)
  // END SCHOOL USE STUFF
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
