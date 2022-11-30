const express = require("express");

const router = express.Router();

const { renderHousePage } = require("../controllers/housePageControllers");

router.get("/", renderHousePage);

module.exports = router;
