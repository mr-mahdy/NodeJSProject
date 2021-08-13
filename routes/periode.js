const express = require('express');
const periodeController = require('../controllers/periode');
const router = express.Router();

router.get('/setup-pmb/periode', periodeController.getPeriode);
router.get('/setup-pmb/periode/:page', periodeController.getPeriode);
// router.post('/setup-pmb/periode', periodeController.addPeriode);
// router.post('/setup-pmb/form/edit/:id', periodeController.editperiode);
router.get('/setup-pmb/periode/delete/:id', periodeController.deletePeriode);

module.exports = router;