import mongoose from "mongoose";

const connectDB=()=>{
    try{
        const URL=process.env.URI;
        mongoose.connect(URL);
        console.log("MongoDB connected");
    }catch(error){
        console.log("Database not Connected");
        console.log(error);
    }
}

export default connectDB;
