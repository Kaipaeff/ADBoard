const express = require('express');

const router = express.Router();

const { renderHouse, postHouse } = require('../controllers/houseFormController');

router.get('/', renderHouse);
router.post('/', postHouse);

module.exports = router;
