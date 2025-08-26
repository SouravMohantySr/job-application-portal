import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  requirements: String,
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);
