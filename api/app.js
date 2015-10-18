var express 		= require('express')
var path 			= require('path')
var cors 			= require('cors')
var logger 			= require('morgan')
var bodyParser 		= require('body-parser')
var app 			= express()
var morgan			= require('morgan')
var port 			= process.env.PORT || 8080
var mongoose 		= require('mongoose')
var apiRouter = require('./api/config/userRoutes')

mongoose.connect('mongodb://localhost:27017/golunch')

var routes 			= require('./config/routes')


// set up middleware
app.use(cors())

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

app.listen(port)

console.log("omg magic! running the server on " + port)

