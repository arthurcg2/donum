const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "donum",
  api_key: 223521388517412,
  api_secret: "pRK57mk4n-rm1AEGdMn3zEaYrJ8",
});

module.exports = {
  async uploadToCloud(req, res) {
    console.log(req.file);
    try {
      cloudinary.uploader.upload(req.file, (error, result) => {
        console.log(result, error);
      });
    } catch (error) {
      console.log(error);
    }
  },
};
