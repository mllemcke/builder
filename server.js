var express = require('express');
var app = express();

app.use('/builder', express.static(__dirname))
app.listen(3000);