const express = require('express')
const cors=require("cors")

const bodyParser = require('body-parser')
 const approutes=require('./routes/testroutes/userRoutes')
const app = express()
const mongoose = require("mongoose")
var connectionUrl = "mongodb://0.0.0.0:27017/day2"
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

 app.use(approutes); //routes from router

 mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(result => app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
}))
 .catch(err => console.log(err));
