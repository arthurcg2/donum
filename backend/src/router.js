const express = require("express");
const router = express.Router();

const UserController = require("./controllers/UserController");

router.get("/user", UserController.index);
router.post("/user", UserController.store);

module.exports = router;
