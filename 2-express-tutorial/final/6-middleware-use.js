const express = require('express')

const app = express()

const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res

// app.use(logger)
// app.use('/api', logger)
app.use(morgan('tiny'))

// app.use([authorize, logger])

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.listen(9001, () => {
  console.log('Server is running on port 9001...')
})
