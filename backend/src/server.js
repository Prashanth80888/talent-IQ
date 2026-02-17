import express from 'express'
import path from "path"
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';


const app=express()
const __dirname=path.resolve()


app.get('/pvk',(req,res)=>{
    res.status(200).json({msg:"Success from api"})
})

app.get('/hooks',(req,res)=>{
    res.status(200).json({msg:"This is the hooks endpoint"})
})

//Make Ready our app from deployment
if(ENV.NODE_ENV=== "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*any}",(req,res)=>{
         res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

app.listen(ENV.PORT,()=>{
    console.log("Server Running On the PORT:",ENV.PORT);
    connectDB();    
})

const startServer=async()=>{
    try {
        await connectDB();
        app.listen(ENV.PORT,()=>{
        console.log("🙌Server Running On the PORT:",ENV.PORT);   
})
    } catch (error) {
        console.error("🙌Error starting the server",error)
    }
}