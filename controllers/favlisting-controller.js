//const Zipcode = require('../models/zipcode')
//const Users = require('../models/zipcode')
const FavListing = require('../models/favlisting')

const favlistingController = {};

//find all user listings by their user id
favlistingController.findAll = (req, res) => {
    console.log('favlist all control')
    FavListing.findAll()
    .then(x => {
        res.json({
            message: 'all listings by id',
            data: x
        })
    }).catch(err =>{
        console.log('control all error loc')
        console.log(err)
        res.status(500).json({
            message: 'all listings not found',
        })
    })
}

//find one listing user has selected and display
favlistingController.findOne = (req, res) => {
    console.log('favlist one control')
    console.log(req.body.id)
    FavListing.findbyId(req.body.id)
    .then(x =>{
        res.json({
            message: 'control one listing',
            data: x
        })
    }).catch(err =>{
        console.log('control one error loc')
        console.log(err)
    })
}

//create one favlisting by  user
favlistingController.create = (req, res) => {
    console.log(req.body.info)
    FavListing.insert(req.body.info)
    .then(x =>{
        res.json({
            message: 'control create one listing',
            data: x
        })
    }).catch(err =>{
        console.log('control create err loc')
        console.log(err)
    })
}
//delete one listing by user
favlistingController.delete = (req, res) => {
    console.log('favlist delete control')
    console.log(req.body.id)
    FavListing.delete(req.body.id)
    .then(() =>{
        res.end();
    }).catch(err =>{
        console.log('control delete error loc')
        console.log(err)
    })
}

//update one listing by user
favlistingController.update = (req, res) => {
    FavListing.update({
        //listing results
        comments: req.body.comments,
        seenstatus: req.body.seenstatus
    }).then(x =>{
        res.json({
            message: 'favlisting edit comments',
            data: x
        })
    }).catch(err =>{
        console.log('control update error loc')
        console.log(err)
    })
}

module.exports = favlistingController;