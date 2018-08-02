const express = require('express');
const router=express.Router();
const controllers=require('../controllers/positions');


router.get('/:id',controllers.getByCategoryId);
router.delete('/:id',controllers.remove);
router.post('/',controllers.create);
router.patch('/:id',controllers.update);


module.exports=router;