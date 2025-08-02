const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const services = require('./public/javaScript/services.js');


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('home')
});

app.get('/about', function(req, res){
    res.render('about')
});

app.get('/projects', function(req, res){
    res.render('projects')
});

app.get('/contact', function(req, res){
    res.render('contact')
});
app.post('/send-message', function(req, res){
    const name = req.body.name
    res.render('contactreply', {name : name})
})

app.get('/services/:slug', function(req, res){
    var storedParams = req.params.slug;
    const service = services.find(items => items.slug === req.params.slug)
        if (service) {
            res.render('services', {service})
        } else {
            return res.status(404).send('<h1>Not Found</h1>')
        }
});

app.listen(3000, function(){
    console.log('Server running on port 3000')
});