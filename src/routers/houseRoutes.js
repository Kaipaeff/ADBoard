const express = require("express");

const router = express.Router();

const { renderHousePage } = require("../controllers/housePageControllers");

router.get("/house", renderHousePage);

module.exports = router;
