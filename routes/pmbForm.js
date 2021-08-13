const express = require('express');
const pmbFormController = require('../controllers/pmbForm');
// const isAuth = require('../middleware/is-auth');
const router = express.Router();

// router.get('/add-comment', pmbController.getAddComment);
// router.post('/add-comment', isAuth, commentController.postAddComment);
router.get('/setup-pmb/form', pmbFormController.getPmbForm);
router.get('/setup-pmb/form/:page', pmbFormController.getPmbForm);
router.post('/setup-pmb/form', pmbFormController.addPmbForm);
router.post('/setup-pmb/form/edit/:id', pmbFormController.editPmbForm);
router.get('/setup-pmb/form/delete/:id', pmbFormController.deletePmbForm);
// router.get('/edit-comment/:commentId', isAuth, commentController.getEditComment);
// router.post('/edit-comment', isAuth, commentController.postEditComment);
// router.post('/delete-comment', isAuth, commentController.postDeleteComment);

module.exports = router;