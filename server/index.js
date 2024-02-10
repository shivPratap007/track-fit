const express=require('express');

const app=express();

require('dotenv').config()

// basic middlewares
app.use(express.json());


app.get('/test',(req,res)=>{
    res.status(200).json({
        status:"Working",
    })
})


app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
})

