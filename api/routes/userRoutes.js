const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/Users', UserController.readBInfos);

router.post('/Users', UserController.createDBInfo);

router.put('/Users/:id', UserController.putDBInfo);

router.delete('/Users/:id', UserController.deleteDBInfo);

module.exports = router;