const cloudinary = require("cloudinary");
const deleteCloudinaryImage = require("../services/CloudinaryService");
const deleteImage = async (req, res) => {
  const publicId = req.params.id;
  if (publicId === "" || !publicId) {
    es.status(500).send("publicId not found!");
  }
  try {
    await deleteCloudinaryImage(publicId);
    res.status(200).send("Image deleted successfully");
  } catch (error) {
    res.status(500).send("Failed to delete image");
  }
};

module.exports = { deleteImage };
