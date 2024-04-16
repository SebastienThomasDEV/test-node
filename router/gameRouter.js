const gameController =  require('../controller/gameController');
const express = require('express');
// const cors = require('cors');
const router = express.Router();

router.get('/play/:choice', gameController.play);
router.get('/score', gameController.getScore);
router.get('/reset', gameController.reset);
router.get('/start', gameController.start);
router.post('/cheat', gameController.cheat);


module.exports = router;