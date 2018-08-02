const express = require('express');
const router=express.Router();
const controllers=require('../controllers/auth');

// /api/auth/
router.post('/login',controllers.login);
router.post('/reg',controllers.reg);

module.exports=router;