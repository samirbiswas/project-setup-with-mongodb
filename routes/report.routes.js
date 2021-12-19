const router = require('express').Router();
const {getController}=require('../controllers/report')

router.get('/',getController.report);

module.exports = router;