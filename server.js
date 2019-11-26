var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.sendfile(__dirname + '/Public/Webb/index.html');
});

var server = app.listen(process.env.PORT, function(){
    console.log('Server is up and running on port ' + server.address().port);
})