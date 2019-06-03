const { Router } = require('express');
const { User } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(User.getWithUserFilter(req.query)));
router.get('/:userId', (req, res) => res.status(200).json(User.getById(req.params.userId)));


module.exports = router;
