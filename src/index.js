const express = require('express');
const morgan = require('morgan');
//Initializations
const app = express();
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());
//Routes
app.use(require('./routes/user'));
//Starting the server
app.listen(app.get('port'),() => {
    console.log('Server on port',app.get('port'));
});
