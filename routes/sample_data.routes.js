const router = require('express').Router();

const {postController}=require('../controllers/sample_data')

router.post('/',postController.sampleData);

module.exports = router;