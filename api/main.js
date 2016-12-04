var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
app.use(bodyParser())
app.use(cors())

data = []

app.get('/', function (req, res) {
  res.send(data)
})

app.post('/', function (req, res) {
  data.push(req.body)
  res.send(req.body)
})

app.listen(3000, function () {
  console.log('listening on port 3000')
})
