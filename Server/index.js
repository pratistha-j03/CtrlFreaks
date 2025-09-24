import dotenv from "dotenv";
import express from "express";
import connectDB from "./utils/connectDB.js";
import cors from "cors";
import userRouter from "./router/userRouter.js"
import citizenRouter from "./router/citizenRouter.js"
// import workerRouter from "./router/workerRouter.js"
import adminRouter from "./router/adminRouter.js"
import validateToken from "./middlewares/authMiddleware.js";
import validateCitizen from "./middlewares/citizenMiddleware.js";
import validateWorker from "./middlewares/workerMiddleware.js";


dotenv.config();
const app=express();
app.use(express.json());


app.use(cors({
    origin:"http://localhost:5173",
    methods:["POST","PUT","DELETE","PATCH"],
    credentials:true
}));

connectDB();

app.use("/user",userRouter);
app.use("/citizen",validateToken,validateCitizen,citizenRouter);
app.use("/admin",validateToken,validateWorker,adminRouter);
// app.use("/worker",workerRouter);

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("App is running on PORT : ",PORT);
})
