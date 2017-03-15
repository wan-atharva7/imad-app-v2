var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config={
    user:'wan-atharva7',
    database:'wan-atharva7',
    host:'cloud.imad.hasura.app',
    port:'5432',
    password:process.env.DB_PASSWORD
    
};
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req, res){
    counter+=1;
    res.send(counter.toString()); 
});


var pool = new Pool(config);
pool.query('SELECT * FROM test',function(req,res){
    if(err)
    {
        res.status(500).send(err.toString());
    }else{
        res.send(JSON.stringfy(result));
        }
});

app.get('/test-db',function (req,res){
   //make select a request 
   // return a response
   //
});

app.get('/article-one',function(req, res){
    res.sendFile(path.join(__dirname,'ui','article-one.html'));
});
app.get('/article-three',function(req, res){
   res.sendFile(path.join(__dirname,'ui','article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name',function(req , res){ // /submit-name?name = xxxx
   var name = req.query.name;
   
   
   names.push(name);
   //JSON javasceript object notation
   
   res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
