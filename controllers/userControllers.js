import Citizen from "../models/citizen-model.js";
import jwt from "jsonwebtoken";
import generateToken from "../utils/jwt.js";
import Worker from "../models/worker-model.js";
import Event from "../models/event-model.js";
import Report from "../models/report-model.js";

const signup = async (req, res) => {
    const { username, email, phoneNo, password, address } = req.body;
    try {
        const check = await Citizen.findOne({ email }) || await Worker.findOne({ email });
        if (check) return res.status(400).json({ msg: "User already exist with this email Id" });
        const citizen = await Citizen.create({
            username, email, phoneNo, password, address
        })
        if (!citizen) return res.status(400).json({ msg: "Signup failed" });
        console.log("Signup successful");
        const token = await generateToken({ id: citizen._id, role: "citizen", username: citizen.username });
        return res.status(201).json({ Citizen: citizen, token: token, msg: "Successfully Logged in" });
    }
    catch (error) {
        console.log("Signup Failed", error);
        return res.status(500).json({ error });
    }
}


const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        var User;
        if (role == "citizen") User = await Citizen.findOne({ email });
        else User = await Worker.findOne({ email });
        if (!User) {
            return res.status(400).json({ msg: "User Not registered as ", role });
        }
        const isValid = await User.comparePassword(password);
        if (!isValid) return res.status(400).json({ msg: "Invalid Credentials" });
        const token = await generateToken({ id: User._id, role: role, username: User.username });
        return res.status(200).json({ token: token, msg: "Successfully Logged in" });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}

const getEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        if (events.length === 0) return res.status(200).json({ msg: "No Event Posted" });
        return res.status(200).json({ Events: events });
    }
    catch (error) {
        return res.status(400).json({
            msg: "Event not fetched",
            error: error
        });
    }
}

const getCommunityPost = async (req, res) => {
    try {
        const posts = await Report.find({}).sort({ date: -1 });
        if (posts.length === 0) return res.json({ msg: "No Post " });
        return res.json({ Posts: posts });
    }
    catch (error) {
        console.log("Failed to fetch the Community Post");
        return res.status(500).json({ msg: "Failed to Fetch the Posts", Error: error.message });
    }
}

const getGreenChampions = async (req, res) => {
    try {
        const greenChampions = await Citizen.aggregate([
            {
                $addFields: { score: { $subtract: ["$rewards", "$penalty"] } }
            },
            { $sort: { score: 1 },},
            { $limit: 10 }
        ]);

        if(greenChampions.length===0) return res.json({greenChampions:"No Green Champion"});

        return res.json({greenChampions:greenChampions});
    }
    catch (error) {
        console.log("Error fetching the Green Champions list");
        return res.json({ msg: error.message });
    }
}

export default { signup, login, getEvents, getCommunityPost,getGreenChampions};