const express = require('express');
const router = express.Router();
const CpfController = require('../controllers/CpfController');

router.get('/cpfs', CpfController.listCpfs);

module.exports = router;