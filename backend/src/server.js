import express from 'express'
import { ENV } from './lib/env.js';

const app=express()


app.get('/',(req,res)=>{
    res.status(200).json({msg:"Success from api"})
})


app.listen(ENV.PORT,()=>{
    console.log("Server Running On the PORT:",ENV.PORT);
    
})