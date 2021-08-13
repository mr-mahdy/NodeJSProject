const express = require('express');
const komponenUSMController = require('../controllers/komponenUSM');
const router = express.Router();

router.get('/setup-pmb/komponen-usm', komponenUSMController.getKomponenUSM);
router.get('/setup-pmb/komponen-usm/:page', komponenUSMController.getKomponenUSM);
// router.post('/setup-pmb/periode', periodeController.addPeriode);
// router.post('/setup-pmb/form/edit/:id', periodeController.editperiode);
router.get('/setup-pmb/komponen-usm/delete/:id', komponenUSMController.deleteKomponenUSM);

module.exports = router;