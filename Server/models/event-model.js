import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String },
  address: { type: String },
  message: { type: String }
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);
export default Event;
