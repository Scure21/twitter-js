const express = require('express');
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const routes = require('./routes');
const request = chalk.green;
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const people = [{name: 'Grace'}, {name: 'Hopper'}, {name: 'Daugther'}];


app.set('view enginer', 'html');

app.engine('html', nunjucks.render);


app.use(morgan('dev'))

app.use('/', function (req, res, next) {
  res.render( 'index.html');
  next()
})
app.use('/', routes)
app.use(express.static('public'));


app.listen(3000, function(){
  console.log(chalk.blue('server listening'));
} );

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

