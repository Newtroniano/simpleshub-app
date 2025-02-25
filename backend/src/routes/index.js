const express = require('express');
const router = express.Router();

// Importa as rotas
const uploadRoutes = require('./uploadRoutes');
const cpfRoutes = require('./cpfRoutes');

// Usa as rotas
router.use('/', uploadRoutes); // Todas as rotas de upload começam com /upload
router.use('/cpfs', cpfRoutes);     // Todas as rotas de CPFs começam com /cpfs

// Rota de exemplo
router.get('/', (req, res) => {
  res.send('Bem-vindo ao backend!');
});

module.exports = router;