const express = require("express");
const router = express.Router();

const UserController = require("./controllers/UserController");
const OngController = require("./controllers/OngController");
const CampaignController = require("./controllers/CampaignController");

router.post("/user", UserController.store);
router.put("/user/:email", UserController.update);
router.delete("/user/:email", UserController.delete);
router.post("/user/login", UserController.login);

router.get("/ong", OngController.index);
router.post("/ong", OngController.store);
router.put("/ong/:email", OngController.update);
router.delete("/ong/:email", OngController.delete);
router.post("/ong/login", OngController.login);

router.get("/campaign", CampaignController.index);
router.post("/campaign", CampaignController.store);
router.put("/campaign/:email", CampaignController.update);
router.delete("/campaign/:email", CampaignController.delete);

module.exports = router;
