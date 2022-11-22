const express = require('express')
const multer = require('multer')
const router = express.Router()
const controllers = require('./../controllers/controllers')

//middleware multer (uploads file)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
  })
const upload = multer({ storage: storage }).single("image");


router.get('/', controllers.fetchAllPost);
router.get('/:id', controllers.fetchPostById);
router.post('/', upload, controllers.createPost);
router.patch('/:id', upload, controllers.updatePost);
router.delete('/:id', controllers.deletelPost);


module.exports = router
