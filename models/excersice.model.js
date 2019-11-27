const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const excersiceScheme=new Schema({
    userName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }

},{
    timestamps:true
})
const Excersice=mongoose.model('Excersice',excersiceScheme);
module.exports=Excersice;