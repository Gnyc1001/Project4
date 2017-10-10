const express = require('express');
const listingRoutes = express.Router();
const listingController = require('../controllers/listing-controller')
const listingHelper = require('../services/listings');
const FavlistingController = require('../controllers/favlisting-controller')

//displays the results page
/* 
adding an event controller to the sequence.
the event controller will be in charge of 
looking for events for each zipcode
it will then count the number of users signed up for each event
using the users2events table, and send this information in results.events
*/
listingRoutes.post('/', 
                resultsController.insertLocation, 
                resultsController.insertMusic2Location, 
                zipcodeHelper.getZips, 
                eventController.EventsByZips, 
                resultsController.queryResults
            )


module.exports = listingRoutes;