const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const { createComponent, getAllComponents, getSingleComponent, componentQrIdentifire, updateComponent, deleteComponent } = require('../controllers/componentsController');


// Create a new component
router.post('/',verifyToken, createComponent);

// // Get all components
router.get('/',verifyToken, getAllComponents);

// // Get a single component by QR identifier
router.get('/:id',verifyToken, getSingleComponent);

// get a single component with qr_scannerid
router.get('/scanner/:qr_identifier', componentQrIdentifire);

// // Update a component by QR identifier
router.put('/update/:id',verifyToken,  updateComponent);

// // Delete a component by id
router.delete('/:id',verifyToken, deleteComponent);

module.exports = router;
