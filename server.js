/* 使用express + mongoose */
const express = require('express')
const dbConfig = require('./config/db.config')
const mongoose = require('mongoose')

mongoose.connect(dbConfig.mongodb)
mongoose.Promise = global.Promise

/* express router */
const indexRouter = require('./dbRouter/index')
const movieRouter = require('./dbRouter/movie')
const foodRouter = require('./dbRouter/food')

const app = express()
/* express port */
const port = process.env.PORT || 4321

app.use('/', indexRouter)
app.use('/api', movieRouter)
app.use('/api', foodRouter)

app.listen(port, () => {
  console.log(`web movies listening on port ${port}`)
})

module.exports = app