import jwt from "jsonwebtoken";

const validateToken=async(req,res,next)=>{
    try{
        const authHeader = req.get("Authorization");
        if(!authHeader) return res.status(401).json({msg:"No Token Provided"});
        const token=authHeader.split(" ")[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded) return res.status(402).json({msg:"Invalid Token. Access Denied"});
        req.user={
            role:decoded.role,
            name:decoded.username,
            id:decoded.id,
        }
        next();
    }
    catch(error){
        console.log("Error validating the token");
        return res.status(500).json({error:error,msg:"Validation Failed"});
    }
}

export default validateToken;
