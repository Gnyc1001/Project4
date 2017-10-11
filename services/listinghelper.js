require('isomorphic-fetch');
require('dotenv').config();
const axios = require('axios');

function allListings(req, res, next){
    const detail = {}
    detail.search = req.body.zipcode;
    deail.

    axios(`https://rets.io/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=10`)
    .then( allList => {
        res.locals.allList = allList;
        next();
    }).catch (err =>{
        console.log('error in listings api')
        console.log(err)
    })
}

module.exports = {allListings};




/*

https://rets.ly/docs/retsly/index.html#listings
test data from rets
https://rets.io/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=100



https://medium.com/@patpohler/a-big-list-of-real-estate-apis-d16847a751b2

retsrabbit api ex
https://retsrabbit.com/docs?__s=qbcsjgppxvqbxbswm59y#rets-rabbit-api-documentation-getting-started-getting-an-access-token

All requests must be made over SSL (https). KEEP YOUR CLIENT ID & SECRET PRIVATE, do not share with anyone. After sending the request you should get an access token back.

Standard API endpoint
POST https://api.retsrabbit.com/oauth/access_token?
grant_type=client_credentials&
client_id=<your client id>&
client_secret=<your client secret>

Custom API endpoint
POST https://mydomain.retsrabbit.com/api/oauth/access_token?
grant_type=client_credentials&
client_id=<your client id>&
client_secret=<your client secret>

Getting the access_token back in a request
{
    "access_token":"<your access token>",
    "token_type":"bearer",
    "expires":<timestamp>,
    "expires_in":3600
}

Using the access_token in a request
https://api.retsrabbit.com/v1/server?access_token=token

https://mydomain.retsrabbit.com/api/v1/server?access_token=token


zillow api ex
https://www.zillow.com/howto/api/APIOverview.htm
Limit queries to 1,000 per day, per API.

https://www.zillow.com/howto/api/GetSearchResults.htm
The API result set:

PARAMETER	

DESCRIPTION

zpid	
The Zillow Property ID. Other API calls use this ZPID to identify properties, and to retrieve property-specific data.

Links	
URLs to specific Zillow pages for this property:
Home details page
Chart data page
Map this home page
Similar sales page

Full address	
The complete address for the property:
Street address
ZIP code
City
State
Latitude
Longitude

onboard
https://developer.onboard-apis.com/docs#propOverview
5,000 Hits a Month
50 Calls per Minute
500 Calls per Day
Non-Commercial Use



*/