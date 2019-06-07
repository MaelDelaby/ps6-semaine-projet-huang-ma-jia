const { Router } = require('express');
const { Request } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Request.items.find(request => request.studentId == req.query.studentId)));
router.get('/next', (req, res) => res.status(200).json(Request.items.filter(request => request.waitAppointment == 0)[0]));
router.get('/nb', (req, res) => res.status(200).json(Request.items.filter(request => request.waitAppointment == 0).length));
router.put('/accept/:id', (req, res) => {
    try {
        let request = Request.items.find(request => request.id == req.params.id);
        Request.items.splice(Request.items.findIndex(request => request.id == req.params.id), 1);
        
        Request.save();

        res.status(201).json(request);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});

router.put('/reject/:id', (req, res) => {
    try {
        let request = Request.items.find(request => request.id == req.params.id);
        Request.items.splice(Request.items.findIndex(request => request.id == req.params.id), 1);

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

router.put('/late/:id', (req, res) => {
    try {
        let request = Request.items.find(request => request.id == req.params.id);
        Request.items.push(request);
        Request.items.splice(Request.items.findIndex(request2 => request2.id == req.params.id), 1);
        Request.save();
        res.status(201).json(request);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});

router.put('/appointment/', (req, res) => {
    try {
        let request = Request.items.find(request => request.id == req.query.requestId);
        request.waitAppointment = req.query.adminId;
        Request.items.push(request);
        Request.items.splice(Request.items.findIndex(request => request.id == req.query.requestId), 1);
        Request.save();
        res.status(201).json(request);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});

router.post('/', (req, res) => {
    try {
        const request = Request.create(req.body);
        res.status(201).json(request);
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra);
        } else {
            res.status(500).json(err);
        }
    }
});

module.exports = router;
