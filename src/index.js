const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//Initializations
const app = express();
//Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());
//Routes
app.use(require('./routes/user'));
//Starting the server
app.listen(app.get('port'),() => {
    console.log('Server on port',app.get('port'));
});
