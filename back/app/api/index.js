const { Router } = require('express');
const CountryRouter = require('./countries');
const UserRouter = require('./users');
const CompanyRouter = require('./companies');
const PartnerHousingRouter = require('./partnersHousings');
const InternshipRouter = require('./internships');
const SpecialtyRouter = require('./specialties');
const SectorRouter = require('./sectors');
const CompanySizeRouter = require('./companySizes');
const ActivitySectorsRouter  = require('./activitySectors');
const ContinentRouter  = require('./continents');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/countries', CountryRouter);
router.use('/users', UserRouter);
router.use('/companies', CompanyRouter);
router.use('/partnersHousings', PartnerHousingRouter);
router.use('/internships', InternshipRouter);
router.use('/specialties', SpecialtyRouter);
router.use('/sectors', SectorRouter);
router.use('/companySizes', CompanySizeRouter);
router.use('/activitySectors', ActivitySectorsRouter);
router.use('/continents', ContinentRouter);

module.exports = router;
