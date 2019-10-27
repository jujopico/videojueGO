if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const axios = require('axios')
const path = require("path")
const app = express()

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/games/:searchTerm', (request, response) => {
  const { searchTerm } = request.params;
  axios.get(`https://api.rawg.io/api/games?search=${searchTerm}`)
  .then(gamesData => response.send(gamesData.data))
})
app.get('/game/:id', (request, response) => {
  const { id } = request.params;
  axios.get(`https://api.rawg.io/api/games/${id}`)
  .then(gameData => response.send(gameData.data))
})
app.get('/api/demo', (request, response) => {
  response.json({
    message: "Hello from server.js"
  })
})
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const port = process.env.PORT || 8080
app.listen(
  port,
  () => { console.log(`API listening on port ${port}...`) }
)
