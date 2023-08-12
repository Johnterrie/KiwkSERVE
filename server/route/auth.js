const {Router} = require('express');
const signUp =  require('../controller/signup')

const router = Router();

router.post('/signup', signUp);
// router.post('/login', controller.login);
module.exports = router;
