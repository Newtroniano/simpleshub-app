const express = require('express');
const router = express.Router();

const uploadRoutes = require('./uploadRoutes');
const cpfRoutes = require('./cpfRoutes');

router.use('/', uploadRoutes); 
router.use('/', cpfRoutes);     

router.get('/', (req, res) => {
  res.send('Bem-vindo ao backend!');
});

module.exports = router;