const router = require('express').Router();

const { postController }= require('../controllers/auth')



router.get('/login',postController.login);

module.exports = router;
