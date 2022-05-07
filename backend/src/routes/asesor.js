const express = require('express');
const router = express.Router();
const asesorController = require('../controllers/asesorController');

router.get('/allAsesor', asesorController.getAllasesors);

module.exports = router;