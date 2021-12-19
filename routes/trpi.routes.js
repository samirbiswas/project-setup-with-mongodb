const router = require('express').Router();
const {getController} = require('../controllers/trip')

router.get('/active_trip',getController.activeTrip);

module.exports = router;