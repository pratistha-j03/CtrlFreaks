// citizen-model
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Schema for a single day in weekStats
const daySchema = new mongoose.Schema({
  status: { type: String, enum: ["pending", "good", "bad"], default: "pending" }
}, { _id: false });

// WeekStats schema
const weekStatsSchema = new mongoose.Schema({
  Sunday:    { type: daySchema, default: () => ({}) },
  Monday:    { type: daySchema, default: () => ({}) },
  Tuesday:   { type: daySchema, default: () => ({}) },
  Wednesday: { type: daySchema, default: () => ({}) },
  Thursday:  { type: daySchema, default: () => ({}) },
  Friday:    { type: daySchema, default: () => ({}) },
  Saturday:  { type: daySchema, default: () => ({}) }
}, { _id: false });

// Main citizen schema
const citizenSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNo: { type: String },
  password:{type:String, required: true},
  address: { type: String },
  rewards: { type: Number, default: 0 },
  penalty: { type: Number, default: 0 },
  complaintsRaised:{ type: Number, default: 0 },
  complaintsSolved: { type: Number, default: 0 },
  greenWeek:{ type: Number, default: 0 },
  isVerified: { type: Boolean, default: false },
  lastTrained: { type: Date },
  weekStats: { type: weekStatsSchema, default: () => ({}) }
}, { timestamps: true });


citizenSchema.pre("save",async function(next){
  if(!this.isModified("password")){ //password not modified handler
    return next();
  }
  const saltRound=await bcrypt.genSalt(10);
  const hash_password=await bcrypt.hash(this.password,saltRound);
  this.password=hash_password;
  next();
})
citizenSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const Citizen = mongoose.model("Citizen", citizenSchema);
export default Citizen;
