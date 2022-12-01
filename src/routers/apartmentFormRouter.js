const express = require('express');

const router = express.Router();

const { postApart } = require('../controllers/apartmentFormController');

// router.get('/', renderApart);
router.post('/', postApart);

module.exports = router;
