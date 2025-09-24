

const getCheckList=(req,res)=>{
    try{
        const checkList=await 
    }
    catch(error){
        console.log("Error fetching the check list of the Households");
        return res.json({msg:"Error in Fetching the checklist of the households"});
    }
}

const getWorkerDashboard=async(req,res)=>{
    try{
        const workerId=req.params.id;
        const worker=await Worker.aggregate([
            {
                $match: {_id: new mongoose.Types.ObjectId(workerId)}
            },
            {
                $project:{
                    username:1,
                    email:1,
                    rewards:1,
                    isVerified:1,
                    LastTrained:1,
                }
            }
        ]);

        if(!worker[0]) return res.json({msg:"Error Loading the Dashboard"});
        return res.json({Dashboard:worker[0]});
    }
    catch(error){
        console.log("Oops!! Error Loading the Dashboard");
        return res.json({msg:error.message});
    }
}

export default getWorkerDashboard;