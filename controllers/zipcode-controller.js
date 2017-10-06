const Zipcode = require('../models/zipcode');

const zipcodeController = {};

zipcodeController.findOne = (req, res) => {
    console.log('zipcodecontroller')
    console.log(req.locals.zipcode)
    Zipcode.findById(req.locals.zipcode)
    .then(x =>{
        res.json({
            message: 'show one zipcode data set',
            data: x
        })
    }).catch(err =>{
        console.log(err)
    })
}

module.exports = zipcodeController;