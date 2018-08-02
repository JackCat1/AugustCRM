const express = require('express');
const router=express.Router();
const controllers=require('../controllers/analytics');

// /api/analytics/
router.get('/overview',controllers.overview);
router.get('/analytics',controllers.analytics);

module.exports=router;