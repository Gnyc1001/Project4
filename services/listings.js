require('isomorphic-fetch');
require('dotenv').config();
const axios = require('axios');

function allListings(req, res, next){

    axios(`${process.env.listings_API_KEY} ${req.body.zipcode}`)
    .then( allList => {
        res.locals.allList = allList;
        next();
    }).catch (err =>{
        console.log('error in listings api')
        console.log(err)
    })
}

module.exports = {allListings};