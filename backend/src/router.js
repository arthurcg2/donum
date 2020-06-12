const express = require('express');
const router = express.Router();
const multerConfig = require('./config/multerConfig');
const upload = require('multer')(multerConfig);

const UserController = require('./controllers/UserController');
const OngController = require('./controllers/OngController');
const CampaignController = require('./controllers/CampaignController');
const ImageController = require('./controllers/ImageController');

//const ImageMiddleware = require("./middlewares/ImageMiddleware");

// User routes
router.post('/user', UserController.store);
router.post('/user/login', UserController.login);
router.delete('/user/:id', UserController.delete);
router.put('/user/:id', UserController.update);

// ONG routes
router.post('/ong/login', OngController.login);
router.post('/ong', upload.single('avatar'), OngController.store);
router.get('/ong', OngController.index);
router.put('/ong/:id', upload.single('avatar'), OngController.update);
router.delete('/ong/:id', OngController.delete);

// Campaign routes
router.post('/campaign', CampaignController.store);
router.get('/campaign', CampaignController.index);
router.put('/campaign/:id', CampaignController.update);
router.delete('/campaign/:id', CampaignController.delete);

// Image upload
router.post('/images', upload.single('file'), ImageController.uploadToCloud);

module.exports = router;
