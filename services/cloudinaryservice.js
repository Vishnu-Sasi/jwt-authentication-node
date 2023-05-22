const cloudinary = require("cloudinary").v2;
const { v4: uuidv4 } = require('uuid');

cloudinary.config({
    cloud_name: "dtvi1jp6k",
    api_key: "558141179549966",
    api_secret: "-__LDyVe5hCojvKb70doJq6rKmc"
  });


const uploadToCloudinary = (path) => {
  return new Promise((res, rej) => {
    cloudinary.uploader
      .upload(path, { public_id: uuidv4() })
      .then((data) => {
        res(data.secure_url);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

module.exports = {
  uploadToCloudinary,
};
