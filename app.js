const express = require('express');
const logger = require('morgan');
const path = require ('path');
const bodyParser = require('body-parser');
//const cors = require('cors');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
//Home Buyer Investor App
//app.use(cors());
const app = express();

//ignore files
require('dotenv').config();

//app.use(cors())
app.use(logger('dev'));
app.use(express.static('client/hbi/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

// const authRoutes = require('./routes/auth-routes');
// app.use('/auth', authRoutes);

// const zipcodeRoutes = require('./routes/zipcode-routes');
// app.use('/zipcode', zipcodeRoutes);

//listing from api dataset
const listingRoutes = require('./routes/listing-routes');
app.use('listing',listingRoutes);
//adding user favs
const favlistingRoutes = require('./routes/favlisting-routes');
app.use('/favlisting', favlistingRoutes);

app.get('*', (req, res) => {
    res.send('404error in express app');
  });