const { Router } = require('express');
const { Request } = require('../../models');

const router = new Router();
router.get('/next', (req, res) => res.status(200).json(Request.items[0]));
router.put('/accept', (req, res) => {
    try {
        let request = Request.items[0];
        Request.items.splice(0,1);
        res.status(201).json(request);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});
router.put('/reject', (req, res) => {
    try {
        let request = Request.items[0];
        Request.items.splice(0,1);

        Request.save();

        if (request.companyId != 0){
            const { Company } = require('../../models');
            let i = 0;
            while (i < Company.items.length){
                if (Company.items[i].id == request.companyId){
                    Company.items.splice(i, 1);
                    break;
                }
                ++i;
            }
            Company.save();
        }

        if (request.internshipId != 0){
            const { Internship } = require('../../models');
            let i = 0;
            while (i < Internship.items.length){
                if (Internship.items[i].id == request.internshipId){
                    Internship.items.splice(i, 1);
                    break;
                }
                ++i;
            }
            Internship.save();
        }
        res.status(201).json(request);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});
router.put('/moveEnd', (req, res) => {
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
