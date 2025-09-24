
const validateWorker=(req,res,next)=>{
    try{
        if(req.user.role=="worker") next();
        else{
        console.log("This route can be accessed by the workers");
        return res.json({msg:"Unauthorised. This route can be accessed by the workers only"});
        }
    }
    catch(error){
        console.log("Server Error");
        return res.json({msg:"Error validating Worker",error:error});
    }
}

export default validateWorker;