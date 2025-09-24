import Citizen from "../models/citizen-model.js";
import Report from "../models/report-model.js";
import mongoose from "mongoose";



const reportWaste = async (req, res) => {
    try {
        const { photo, latitude, longitude, reporterId, reporterName } = req.body;

        const report = await Report.create({
            photo,
            date: Date.now(),
            latitude,
            longitude,
            reporterName,
            reporterId,
        });

        return res.status(201).json({ msg: "Post Created", post: report });
    } catch (error) {
        console.error("Error creating report:", error.message);
        return res.status(500).json({
            msg: "Waste not Reported due to server error",
            error: error.message,
        });
    }
};


const getCitizenDashboard =async (req, res) => {
    try {
        const citizenId=req.params.id;

        const citizen = await Citizen.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(citizenId) } },
            { $project:{
                    username: 1,
                    email: 1,
                    rewards: 1,
                    penalty: 1,
                    complaintsRaised: 1,
                    complaintsSolved: 1,
                    greenWeek: 1,
                    weekStats: 1,
                    isVerified:1,
                    lastTrained:1
                } }
        ]);

        if (!citizen || citizen.length === 0) {
            return res.status(404).json({ msg: "Citizen not found" });
        }

        return res.json({ dashboard: citizen[0] });

    }
    catch (error) {
        console.log("Oops!! Error Loading the Dashboard");
        return res.json({ msg: error.message });
    }
}

const myWasteReport=async(req,res)=>{
    try{
        const citizenId=req.params.id;
        const reports=await Report.aggregate([
            {
                $match:{reporterId: new mongoose.Types.ObjectId(citizenId)}
            },
            {
                $sort:{date:1}
            }
        ])
        if(!reports) return res.json({msg:"You don't have any unresolved Reports"});
        return res.json({reports:reports});
    }   
    catch(error){
        console.log("Error Loading your Waste Reports");
        return res.json({msg:error.message});
    }
}


export default {reportWaste,getCitizenDashboard,myWasteReport};