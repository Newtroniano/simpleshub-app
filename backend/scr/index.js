const express = require('express');
const multer = require('multer');
const UploadController = require('./controllers/UploadController');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), UploadController.uploadPdf);
app.get('/cpfs', UploadController.listCpfs);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});