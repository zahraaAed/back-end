const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g,'-') + file.originalname); // Generate a unique filename for each file
  },
});
//middleware
const upload = multer({ storage: storage });

module.exports = upload;