var burger = require('../models/burger.js');

module.exports=function(app){

  app.get('/', function (req, res) 


{

  res.redirect('/index');

});

app.get('/index', function (req, res) 

{

  burger.selectAll(function(data) 

  {

    var hbsObject = { burgers: data };

    res.render('index.handlebars', hbsObject);

  });

});

app.post('/burger/create', function (req, res) 

{

  burger.insertOne(req.body.burger_name, function() 

  {

    res.redirect('/index');

  });

});

app.post('/burger/eat/:id', function (req, res) 

{

  burger.updateOne(req.params.id, function() 

  {

    res.redirect('/index');

  });

});

}