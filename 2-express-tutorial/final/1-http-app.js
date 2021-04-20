const { readFileSync } = require('fs')
const http = require('http')

const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  // console.log('user hit the server')
  // console.log(req.method)
  const url = req.url

  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    // res.write('<h1>Home Page</h1>')
    res.write(homePage)
    res.end()
  } else if (url === '/about') {
    // about page
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>About Page</h1>')
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Page not found</h1>')
    res.end()
  }
})

server.listen(9001)
