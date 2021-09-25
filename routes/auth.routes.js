const router = require('express').Router();

const {postController, getController}= require('../controllers/auth')



router.get('/login',postController.login);

module.exports = router;
