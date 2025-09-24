import Event from "../models/event-model.js";

const postEvent=async(req,res)=>{
    try{
        const {name,time,address,message}=req.body;
        if(!name || !time || !address || !message) return res.status(400).json({msg:"All the fields must be filled"});
        const event=await Event.create({name:name,date:Date.now(),time:time,address:address,message:message});
        if(!event) return res.status(400).json({msg:"Event not created"});
        return res.status(200).json({msg:"Event Posted",Event:event});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({error:error ,msg:"Event not posted"});
    }
}

export default postEvent;