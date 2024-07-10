const express = require ('express');
const app = express();
const port = 4000;
const middel = require ("./middlewares/isAuth")

app.use(express.static("public"))

app.set('view engine', 'pug')
app.get('/contact',middel, function(req,res){

    res.render("contact")
})

app.get('/', function(req, res){
    res.render("home_page")
    });

app.get('/services', function(req, res){
        res.render("our_Services")
        });






app.use(function(req, res, ){
    res.status(404).send('Page introuvable !')})


app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
  });