import Application from "../models/Application.js";
import Job from "../models/Job.js";

// Apply for a job
export const applyJob = async (req, res) => {
  const { jobId } = req.body;
  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const application = await Application.create({
      user: req.user._id,
      job: job._id,
      resume: req.file ? req.file.path : req.user.resume
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user applications
export const getApplications = async (req, res) => {
  const apps = await Application.find({ user: req.user._id }).populate("job", "title description");
  res.json(apps);
};
