const express = require('express');
const opmbController = require('../controllers/opmb');
const router = express.Router();

router.get('/setup-pmb/opmb', opmbController.getOpmb);
router.get('/setup-pmb/opmb/:page', opmbController.getOpmb);
// router.post('/setup-pmb/periode', periodeController.addPeriode);
// router.post('/setup-pmb/form/edit/:id', periodeController.editperiode);
router.get('/setup-pmb/opmb/delete/:id', opmbController.deleteOpmb);

module.exports = router;