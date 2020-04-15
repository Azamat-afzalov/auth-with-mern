const express = require('express');

const router = express.Router();
const userControllers = require('../controllers/userControllers');
const verifyToken = require('../middlewares/verifyToken');
router.get('/all', userControllers.getAllUsers);



router.post('/login', userControllers.login);
router.post('/signup', userControllers.signUp);

router.use(verifyToken);
router.get('/:userId', userControllers.getUserById);





module.exports = router;