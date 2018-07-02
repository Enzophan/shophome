var express = require ('express');
var bodyParser = require ('body-parser');
var morgan = require ('morgan');
var mongoose = require ('mongoose');

var config = require ('./config');
var setupController = require ('./api/controllers/setupController');
var productController = require ('./api/controllers/productController');

var app = express ();
var port = process.env.PORT || 3000;

app.use ('/assets', express.static (__dirname + '/public'));
app.use (bodyParser.json());
app.use (bodyParser.urlencoded ({extended: true}));

app.use (morgan ('dev'));
app.set ('view engine', 'ejs');
app.set ("views", "./views");

//DB
// console.log (config.getDbConnectionString());
mongoose.connect (config.getDbConnectionString());
setupController(app);
productController (app);

app.get ("/", function (req,res){
    res.render ("index");
});

app.get ("/about", function (req,res){
    res.render ("index");
});

app.get ("/services", function (req,res){
    res.render ("index");
});

app.get ("/contact", function (req,res){
    res.render ("index");
});

app.get ("/product/:id", function (req,res){
    var id = req.params.id
    res.render ("details", { name: productController.get[id] });
    // res.send (id);
});

app.get ("/:id", function (req,res){
    var id = req.params.id;
    console.log (id);
    res.render ("details", { productId: id});
    // res.send (id);
});


app.listen (port, function (){
    console.log ("App listening on port: " + port);
});