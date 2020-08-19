require('./db/mongoose');
const express= require('express');
const app = express();
const userRouter = express.Router();
app.use(express.json())
userRouter.get('/',(req,res,next)=>{
    console.log("Hello World")
})