var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var urlendcoderParser = bodyParser.urlencoded();

app.use(express.static('Public'))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/Public/Webb/index.html');
});

var server = app.listen(1000, function(){
    console.log('Server is up and running on port ' + server.address().port);
});