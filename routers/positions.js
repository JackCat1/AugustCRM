const express = require('express');
const router=express.Router();
const controllers=require('../controllers/positions');


router.get('/:id',passport.authenticate('jwt',{session:false}),controllers.getByCategoryId);
router.delete('/:id',passport.authenticate('jwt',{session:false}),controllers.remove);
router.post('/',passport.authenticate('jwt',{session:false}),controllers.create);
router.patch('/:id',passport.authenticate('jwt',{session:false}),controllers.update);


module.exports=router;