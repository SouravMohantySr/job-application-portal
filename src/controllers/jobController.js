import Job from "../models/Job.js";

// Get all jobs
export const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

// Create job (for demo, seed some jobs)
export const createJob = async (req, res) => {
  const { title, description, requirements } = req.body;
  const job = await Job.create({ title, description, requirements });
  res.status(201).json(job);
};
