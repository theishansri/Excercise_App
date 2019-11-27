const router=require('express').Router();
let Excersice=require('../models/excersice.model');

router.route('/').get((req,res)=>{
    Excersice.find()
    .then(excersices=>res.json(excersices))
    .catch(err=>res.status(400).json("Error: "+err))
});

router.route('/add').post((req,res)=>{
    const userName=req.body.userName;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date);
    const newExcersice=new Excersice({userName,description,duration,date});
    newExcersice.save()
                .then(()=>res.json("Excersice added"))
                .catch((err)=>res.status(400).json("Error: ")+err);
})
module.exports=router;