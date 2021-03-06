const express=require('express');
const app=express();
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser=require('body-parser');
const authRouter=require('./routers/auth');
const analyticRouter=require('./routers/analytics');
const categotyRouter=require('./routers/categoty');
const orderRouter=require('./routers/order');
const positionRouter=require('./routers/positions');
const keys = require('./config/keys');

// DB connect
mongoose.connect(keys.mongoURI)
    .then(()=> console.log('DB is connect'))
    .catch(error => console.log(error));

// Passport (security service)
app.use(passport.initialize());
require('./middleware/passport')(passport);

//Utilits
app.use(require('cors')());
app.use('/uploads', express.static('uploads'));
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routers
app.use('/api/auth', authRouter);
app.use('/api/analytics',analyticRouter);
app.use('/api/category',categotyRouter);
app.use('/api/order',orderRouter);
app.use('/api/position',positionRouter);

module.exports=app;