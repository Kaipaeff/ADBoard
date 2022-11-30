const express = require("express");

const router = express.Router();

const { renderHome } = require("../controllers/indexControllers");

router.get("/", renderHome);
// router.get("/login", renderHome);

module.exports = router;
