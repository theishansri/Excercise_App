const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const usersRouter=require('./routes/users');
const excercisesRouter=require('./routes/excercises');
const app=express();
require('dotenv').config();
const port =process.env.PORT||5000;
app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});


const connection= mongoose.connection;
connection.once('open',()=>{
    console.log("Database connected successfully")
});

app.use('/excercises',excercisesRouter);
app.use('/users',usersRouter);
app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})