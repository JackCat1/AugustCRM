const express=require('express');
const authRouter=require('./routers/auth');
const analyticRouter=require('./routers/analytics');
const categotyRouter=require('./routers/categoty');
const orderRouter=require('./routers/order');
const positionRouter=require('./routers/positions');
const app=express();


app.use('/api/auth', authRouter);
app.use('/api/analytics',analyticRouter);
app.use('/api/categoty',categotyRouter);
app.use('/api/order',orderRouter);
app.use('/api/position',positionRouter);

module.exports=app;