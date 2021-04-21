const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(9001, () => {
  console.log('Server is running at port 9001: ')
})

// app.listen

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
