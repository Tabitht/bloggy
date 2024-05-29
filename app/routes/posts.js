const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const validateRequest = require('../middlewares/createPostValidator');

router.get('/', postsController.index);

router.get('/:post', postsController.show);

router.post('/', validateRequest, postsController.store);

router.put('/:id', postsController.update);

router.delete('/:id', postsController.Delete);

module.exports = router;
