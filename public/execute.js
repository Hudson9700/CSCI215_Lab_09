var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require("path");

app.get('/', function(req, res) {
    console.log('root called. Returning index.html');
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.post('/myPost', function(req, res) {
    console.log('post called. Returning data');
    console.log(req.body.name1);
    console.log(req.body.email1);
    console.log(req.body.age1);
    res.json({"testdata" : req.body.name1 + ' ' + req.body.email1 + req.body.age1});
});

app.use(express.static("public"));