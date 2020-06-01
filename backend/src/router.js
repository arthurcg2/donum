const express = require("express");
const router = express.Router();
const multerConfig = require("./config/multerConfig");
const upload = require("multer")(multerConfig);

const UserController = require("./controllers/UserController");
const OngController = require("./controllers/OngController");
const CampaignController = require("./controllers/CampaignController");
const ImageController = require("./controllers/ImageController");

//const ImageMiddleware = require("./middlewares/ImageMiddleware");

// User routes
router.post("/user", UserController.store);
router.put("/user/:email", UserController.update);
router.delete("/user/:email", UserController.delete);
router.post("/user/login", UserController.login);

// ONG routes
router.get("/ong", OngController.index);
router.post("/ong", upload.single("avatar"), OngController.store);
router.put("/ong/:email", upload.single("avatar"), OngController.update);
router.delete("/ong/:email", OngController.delete);
router.post("/ong/login", OngController.login);

// Campaign routes
router.get("/campaign", CampaignController.index);
router.post("/campaign", CampaignController.store);
router.put("/campaign/:email", CampaignController.update);
router.delete("/campaign/:email", CampaignController.delete);

// Image upload
router.post("/images", upload.single("file"), ImageController.uploadToCloud);

module.exports = router;
