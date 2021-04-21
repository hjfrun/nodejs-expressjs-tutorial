const express = require('express')

const app = express()

const { products, people } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map(product => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params
  // const singleProduct = products.find(product => product.id === +productID)
  const singleProduct = products.find(product => product.id === Number(productID))

  if (!singleProduct) {
    res.status(404).send('Product Does Not Exist')
  }
  res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('single review')
})

app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search)
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit)
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send('No products matched your search...')
    return res.status(200).json({ success: true, data: [] })
  }

  return res.status(200).json({ success: true, data: sortedProducts })
})

app.get('/contact', (req, res) => {
  res.json(people)
})


app.listen(9001, () => {
  console.log('Server is running on port 9001...')
})
