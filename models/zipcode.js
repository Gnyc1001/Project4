const db = require('../db/config');

const Zipcode = {};

Zipcode.results = data => { 
    console.log('zipcodes', data)
    return db.query(`
    SELECT 
    zipcodes.latitude, 
    zipcodes.longitude, 
    zipcodes.city, 
    zipcodes.state, 
    zipcodes.county 
    FROM zipcodes
    WHERE zipcodes.zip_code = data.zipcode `,
    )
}

module.exports = Zipcode;