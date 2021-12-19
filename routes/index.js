const router = require('express').Router();
const authRoutes = require('./auth.routes') 
const tripRoutes = require('./trpi.routes')
const reportRoutes = require('./report.routes') 
const sampleData = require('./sample_data.routes')

router.use('/api/auth',authRoutes);
router.use('/api/trip',tripRoutes);
router.use('/api/report',reportRoutes);
router.use('/api/sample_data',sampleData);


module.exports = router;