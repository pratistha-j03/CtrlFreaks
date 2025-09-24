import jwt from "jsonwebtoken";

const generateToken=async(payload)=>{
    try{
        const token=await jwt.sign(payload,process.env.JWT_SECRET);
        return token;
    }
    catch(error){
        console.log(error);
        console.log("Token not generated");
    }
}

export default generateToken;