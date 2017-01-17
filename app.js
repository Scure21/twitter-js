const express = require('express');
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const router = express.Router();
const request = chalk.green;
const morgan = require('morgan');
//Loggin middleware
//comment


app.use(morgan('dev'))

//a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path


app.use('/special', function(req, res){
  //console.log(request(req.method,req.originalUrl,200))
  res.send('Welcome to special!')
})

app.get('/news', function(req, res){
  res.send('Welcome to news section');
})

app.use('/', function (req, res, next) {
  //console.log(request(req.method,req.originalUrl,200))
  //console.log(chalk.magenta('Successful Request :', req.method, 200 ,'OK'))
  res.send('Welcome!')
  next()
})

app.listen(3000, function(){
  console.log(chalk.blue('server listening'));
} );
