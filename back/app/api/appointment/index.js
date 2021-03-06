const { Router } = require('express');
const { Appointment } = require('../../models');

const router = new Router();
router.get('/receiverId', (req, res) => res.status(200).json(Appointment.getByReceiverId(req.query.receiverId)));
router.get('/askerId', (req, res) => res.status(200).json(Appointment.getByAskerId(req.query.askerId)));
router.get('/numberAppointementByReceiverId', (req, res) => res.status(200).json(Appointment.getNumberAppointementByReceiverId(req.query.receiverId)));
router.get('/positionByReceiverIdAndAskerId', (req, res) => res.status(200).json(Appointment.getPositionByReceiverIdAndAskerId(req.query.receiverId, req.query.askerId)));

router.get('/next', (req, res) => res.status(200).json(Appointment.items.find(appointment => appointment.receiverId == req.query.receiverId)));

router.post('/', (req, res) => {
  try {
    const appointment = Appointment.create(req.body);
  res.status(201).json(appointment);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

router.delete('/:appointmentId', (req, res) => {
  try {
    Appointment.delete(req.params.appointmentId);
  res.status(204).end();
  } catch (err) {
    if (err.name === 'NotFoundError') {
      res.status(404).end();
    } else {
      res.status(500).json(err);
    }
  }
});

router.delete('/lastAppointmentByAskerId/:askerId', (req, res) => {
  try {
    Appointment.delete(Appointment.getLastAppointmentByAskerId(req.params.askerId));
res.status(204).end();
} catch (err) {
  if (err.name === 'NotFoundError') {
    res.status(404).end();
  } else {
    res.status(500).json(err);
  }
}
});

module.exports = router;
