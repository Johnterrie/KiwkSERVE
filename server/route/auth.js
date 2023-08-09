const {Router} = require('express');
const {signUp}=require('../controllers/signup')

const router = Router();

router.post('/signup', signUp);
// router.post('/login', controller.login);
router.get('/api/')
module.exports = router;
