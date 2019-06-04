const { Router } = require('express');
const { AvailabilityTimeSlot } = require('../../models');

const router = new Router();
router.get('/receiverId', (req, res) => res.status(200).json(AvailabilityTimeSlot.getAvailabilityTimeSlotByReceiverId(req.query.receiverId)));
router.get('/', (req, res) => res.status(200).json(AvailabilityTimeSlot.getAvailabilityTimeSlot()));

module.exports = router;
