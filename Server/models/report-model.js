import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  photo: { type: String, required: true },
  date: { type: Date, default: Date.now },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  upvotes: { type: Number, default: 0 },
  reporterId: { type: mongoose.Schema.Types.ObjectId, ref: "Citizen", required: true },
  reporterName: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }
}, { timestamps: true });

const Report = mongoose.model("Report", reportSchema);
export default Report;
