const multer = require('multer')
// Define your storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/'); // Define the destination for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g,'-')+ file.originalname); // Generate a unique filename for each file
    }
  });
  
  const upload = multer({ storage: storage });
  module.exports=upload;