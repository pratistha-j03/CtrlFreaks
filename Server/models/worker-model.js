import mongoose from "mongoose";
import bcrypt from "bcrypt";

//worker schema
const workerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNo: { type: String },
  password:{type:String, required: true},
  rewards: { type: Number, default: 0 },
  isVerified: { type: Boolean, default: false },
  lastTrained: { type: Date },
}, { timestamps: true });

workerSchema.pre("save",async function(next){
  if(!this.isModified("password")){ //password not modified handler
    return next();
  }
  const saltRound=await bcrypt.genSalt(10);
  const hash_password=await bcrypt.hash(this.password,saltRound);
  this.password=hash_password;
  next();
})

workerSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


const Worker = mongoose.model("Worker", workerSchema);
export default Worker;