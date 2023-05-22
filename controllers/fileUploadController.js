const fileUploads = [];
const { uploadToCloudinary } = require("../services/cloudinaryservice");

const fileUpload = (req, res, next) => {
  uploadToCloudinary(req.files.file.path)
    .then((data) => {
      res.json({
        message: "file uploaded to cloudinary",
        fileLink: data,
      });
    })
    .catch((err) => {
      next(err);
    });

  fileUploads.push(req.files);

  console.log(fileUploads);
};
const getUploads = (req, res) => {
  res.json({
    message: "success",
    data: fileUploads,
  });
};

module.exports = {
  fileUpload,
  getUploads,
};
