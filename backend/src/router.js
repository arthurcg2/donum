const express = require("express");
const router = express.Router();

const UserController = require("./controllers/UserController");

router.post("/user", UserController.store);

module.exports = router;