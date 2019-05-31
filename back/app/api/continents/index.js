const { Router } = require('express');
const { Country } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Country.items.map(country => country.continent).filter((v, i, a) => a.indexOf(v) === i)));


module.exports = router;
