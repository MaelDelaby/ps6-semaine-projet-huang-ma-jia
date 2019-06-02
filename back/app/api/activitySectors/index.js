const { Router } = require('express');
const { Company } = require('../../models');
const fs = require('fs');


const router = new Router();
router.get('/', (req, res) => res.status(200).json(JSON.parse(fs.readFileSync("mocks/activitySector.mocks.json", 'utf8'))));


module.exports = router;
