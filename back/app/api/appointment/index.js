const { Router } = require('express');
const { Appointment } = require('../../models');

const router = new Router();
router.get('/receiverId', (req, res) => res.status(200).json(Appointment.getByReceiverId(req.query.receiverId)));
router.get('/askerId', (req, res) => res.status(200).json(Appointment.getByAskerId(req.query.askerId)));
router.get('/', (req, res) => res.status(200).json(Appointment.getAppointment()));

module.exports = router;
