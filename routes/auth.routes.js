const router = require('express').Router();

const { postController }= require('../controllers/auth')



router.post('/login',postController.login);

module.exports = router;
