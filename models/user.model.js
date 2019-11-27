const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userScheme=new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },

},{
    timestamps:true
})
const User=mongoose.model('User',userScheme);
module.exports=User;