const express = require('express');
const router = express.Router();

const { renderFlat, postFlat } = require('../controllers/flatController');

router.get('/', renderFlat);
router.post('/', postFlat);

module.exports = router;