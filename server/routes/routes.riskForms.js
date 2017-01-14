'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.Forms.js');

/*

 get All data
 create data
 update data
 delete data

*/

router.get('/find', controller.findDataId) ;
router.get('/:id',controller.getById) ;
router.post('/' , controller.createData ) ;
router.put('/fireProt/:id', controller.addFireProt) ;
router.put('/firePot/:id' , controller.addFirePot) ;
router.put('/buisnessPot/:id', controller.createBuisnessPot) ;
router.put('/buisnessProt/:id' , controller.createBuisnessProt) ;
router.put('/machineryPot/:id', controller.createMachineryPot) ;
router.put('/machineryProt/:id' , controller.createMachineryProt) ;
router.put('/naturalPot/:id', controller.createNaturalPot) ;
router.put('/naturalProt/:id', controller.createNaturalProt) ;

module.exports = router
