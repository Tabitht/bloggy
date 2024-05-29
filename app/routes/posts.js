const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const validateRequest = require('../middlewares/createPostValidator');

router.get('/', postsController.index);

router.get('/:post', postsController.show);

router.post('/', validateRequest, postsController.store);

router.put('/', postsController.update);

router.delete('/', postsController.Delete);

module.exports = router;
