const { Router } = require('express');
const { Internship } = require('../../models' );

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Internship.getWithInternshipFilter(req.query)));
router.get('/nbIntership', (req, res) => res.status(200).json(Internship.getInternshipsNb(req.query)));
router.get('/averageRatingIntership', (req, res) => res.status(200).json(Internship.getAverageRatingIntershipByCountryId(req.query)));
router.get('/:internshipId', (req, res) => res.status(200).json(Internship.getById(req.params.internshipId)));

router.post('/', (req, res) => {
    try {
        const internship = Internship.create(req.body);
        res.status(201).json(internship);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});

module.exports = router;
