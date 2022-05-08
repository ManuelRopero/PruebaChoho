const express = require('express');
const router = express.Router();
const asesorController = require('../controllers/asesorController');

router.get('/allAsesor', asesorController.getAllasesors);
router.get('/allUser', asesorController.getAllusers);
router.get('/allproducts', asesorController.getAllproducts);
router.get('/allPedidos', asesorController.getAllPedidos);
router.get('/:id', asesorController.getAsesorsId);
module.exports = router;