const { Router } = require('express');
const { AvailabilityTimeSlot } = require('../../models');

const router = new Router();
router.get('/receiverId', (req, res) => res.status(200).json(AvailabilityTimeSlot.getAvailabilityTimeSlotByReceiverId(req.query.receiverId)));
router.get('/', (req, res) => res.status(200).json(AvailabilityTimeSlot.getAvailabilityTimeSlot()));

router.post('/', (req, res) => {
  try {
    const availabilityTimeSlot = AvailabilityTimeSlot.create(req.body);
  res.status(201).json(availabilityTimeSlot);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

router.delete('/:availibilityId', (req, res) => {
  try {
    AvailabilityTimeSlot.delete(req.params.availibilityId);
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
