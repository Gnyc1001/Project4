const db = require('../db/config');

const Favlisting = {};

Favlisting.findAll = id => {
    return db.query(`SELECT * FROM favlisting`)
};

Favlisting.findbyId = id => {
    return db.one(` SELECT * FROM favlistings WHERE id = $1`)
    [id])
};

module.exports = Favlisting;