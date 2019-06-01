const { Router } = require('express');
const { Company } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Company.getWithCompanyFilter(req.query)));
router.get('/companyNb', (req, res) => res.status(200).json(Company.getNumberCompanyByCountryId(req.query)));
router.get('/:companyId', (req, res) => res.status(200).json(Company.getById(req.params.companyId)));

router.post('/', (req, res) => {
    try {
        console.log(req.body);
        const company = Company.create(req.body);
        res.status(201).json(company);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});

module.exports = router;
