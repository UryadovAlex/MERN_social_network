const { Router } = require('express');
const router = Router();
// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('User posts'));

module.exports = router;
