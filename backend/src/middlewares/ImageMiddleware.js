const cloudinary = require("cloudinary").v2;
const fs = require("fs");

module.exports = async (req, res, next) => {
  if (!req.file) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ error: "No image files were sent." });
  }
  const img = fs.readFileSync(req.file.path).toString("base64");

  cloudinary.uploader.upload(img, (error, response) => {
    fs.unlinkSync(req.file.path);

    if (error) return res.sendStatus(500);

    //success
    console.log(response.url);
    next(response.url);
  });
};
