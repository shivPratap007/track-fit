const express=require('express');
const database=require('./config/database')

const app=express();

require('dotenv').config()

// basic middlewares
app.use(express.json());

// create user
const userRouter=require('./routes/userRoutes');
app.use('/v1',userRouter);


app.get('/test',(req,res)=>{
    res.status(200).json({
        status:"Working",
    })
})


database(process.env.MONGOURL)
app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
})

