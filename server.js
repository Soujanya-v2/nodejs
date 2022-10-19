var express = require('express');
var path= require('path');
var app = express();
app.use(express.static('public'));
app.set("view engine","ejs");
app.get('/', function (req, res) {
   res.render('index');
});
const port = process.env.port || 8081;
app.listen(port, () => console.log(`Example app listening ${port}`));
