var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var port = '9000';
//DB and Server Init
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
