const express = require('express');
const router = express.Router();
const UploadController = require('../controllers/UploadController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


router.post('/upload', upload.single('file'), UploadController.uploadPdf);
module.exports = router;