const db = require('../db/config');
//const seenlist = require('./')

const Favlisting = {};

Favlisting.findAll = id => {
    return db.query(`SELECT * FROM favlistings`)
};

Favlisting.findbyId = id => {
    console.log('find one models')
    return db.one(` SELECT * FROM favlistings WHERE id = $1`,
    [id])
};

Favlisting.delete = id => {
    console.log('deleted');
    return db.none(`DELETE FROM favlistings WHERE id =$1`,
    [id])
};

Favlisting.create = data => {
    console.log('insert data in favorites');
    return db.one( `INSERT INTO favlistings 
    UnparsedAddress, 
    CountyOrParish, 
    PostalCode,
    ListAgentFullName,
    ListAgentPreferredPhone,
    ListOfficeName,
    BedroomsPossible,
    BathroomsTotalInteger,
    LivingArea,
    YearBuilt,
    media,
    comments,
    seenstatus,
    user_id )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
    [data.UnparsedAddress, data.CountyOrParish, data.PostalCode, data.ListAgentFullName, data.ListAgentPreferredPhone, data.ListOfficeName, data.BedroomsPossible, data.BathroomsTotalInteger, data.LivingArea, data.YearBuilt, data.media, data.comments, data.seenstatus, data.user_id])
};

Favlisting.update = (data, id) => {
    return db.one(`
    UPDATE favlistings SET
    comments = $1,
    seenstatus = $2
    WHERE id = $3`,
    [data.comments, data.seenstatus, id])
};

module.exports = Favlisting;