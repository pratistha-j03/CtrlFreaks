
const validateCitizen=(req,res,next)=>{
    try{
        if(req.user.role=="citizen") next();
        else{
        console.log("This route can be accessed by the citizens");
        return res.json({msg:"Unauthorised"});
        }
    }
    catch(error){
        console.log("Server Error");
        return res.json({msg:"Error validating citizen",error:error});
    }
}

export default validateCitizen;