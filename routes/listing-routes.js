const express = require('express');
const listingRoutes = express.Router();
const listingHelper = require('../services/listinghelper');

//displays listings
listingRoutes.get('/', listingHelper.allListings)


module.exports = listingRoutes;