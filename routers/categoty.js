const express = require('express');
const router=express.Router();
const controllers=require('../controllers/category');
const passport = require('passport');
const upload=require('../middleware/load');

// /api/auth/
router.get('/',passport.authenticate('jwt',{session:false}),controllers.getAll);
router.get('/:id',passport.authenticate('jwt',{session:false}),controllers.getById);
router.delete('/:id',passport.authenticate('jwt',{session:false}),controllers.remove);
router.post('/',passport.authenticate('jwt',{session:false}),upload.single('image'),controllers.create);
router.patch('/:id',passport.authenticate('jwt',{session:false}),upload.single('image'),controllers.update);


module.exports=router;