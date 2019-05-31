const { Router } = require('express');
const { PartnerHousing } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
    if (req.query.countryId) {
        res.status(200).json(PartnerHousing.getByCountryId(req.query.countryId));
    } else {
        res.status(200).json(PartnerHousing.get());
    }
});

router.put('/', (req, res) => {
    try {
        const partnerHousing = PartnerHousing.create(req.body);
        res.status(201).json(partnerHousing);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});

module.exports = router;
