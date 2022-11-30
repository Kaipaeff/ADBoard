const express = require('express');
const router = express.Router();

const { renderApart, postApart } = require('../controllers/apartmentFormController')

router.get('/', renderApart);
router.post('/', postApart);

module.exports = router;