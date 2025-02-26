const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); 
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const routes = require('./routes');

app.use(cors({
  origin: 'http://localhost:8080', 
  methods: ['GET', 'POST'],        
  allowedHeaders: ['Content-Type'], 
}));

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});