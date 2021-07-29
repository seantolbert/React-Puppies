const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../../controllers/api/puppies');

/* GET /api/puppies */
router.get('/', puppiesCtrl.index);
router.post('/', puppiesCtrl.create);
router.get('/:id', puppiesCtrl.show);

module.exports = router;
