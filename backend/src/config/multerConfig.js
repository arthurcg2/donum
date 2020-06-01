const multer = require("multer");

module.exports = {
  storage: multer.MemoryStorage,
  limits: {
    fileSize: 50 * 1024 * 1024,
    fieldSize: 50 * 1024 * 1024,
  },
};
