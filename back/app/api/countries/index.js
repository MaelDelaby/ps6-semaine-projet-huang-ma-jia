const { Router } = require('express');
const { Country } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Country.getWithCountryFilter(req.query)));
router.get('/:countryId', (req, res) => res.status(200).json(Country.getById(req.params.countryId)));

router.put('/', (req, res) => {
    try {
        const country = Country.create(req.body);
        res.status(201).json(country);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});

module.exports = router;
