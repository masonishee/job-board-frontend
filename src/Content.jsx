import axios from "axios";
import { useState, useEffect } from "react";
import { JobsIndex } from "./JobsIndex";
import { Modal } from "./Modal";
import { JobsShow } from "./JobsShow";
import { JobsNew } from "./JobsNew";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [jobs, setJobs] = useState([]);
  const [isJobsShowVisible, setIsJobsShowVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState({});

  const handleIndexJobs = () => {
    console.log("handleIndexJobs");
    axios.get("http://localhost:3000/jobs.json").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  };

  const handleShowJob = (job) => {
    console.log("handleShowJob", job);
    setIsJobsShowVisible(true);
    setCurrentJob(job);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsJobsShowVisible(false);
  };

  const handleDestroyJob = (job) => {
    console.log("handleDestroyJob", job);
    axios.delete(`http://localhost:3000/jobss/${job.id}.json`).then((response) => {
      setJobs(jobs.filter((p) => p.id !== job.id));
      handleClose();
    });
  };

  useEffect(handleIndexJobs, []);
  const handleCreateJob = (params, successCallBack) => {
    console.log("handleCreateJob", params);
    axios.post("http://localhost:3000/jobs.json", params).then((response) => {
      setJobs([...jobs, response.data]);
      successCallBack();
    });
  };

  const handleUpdateJob = (id, params, successCallback) => {
    console.log("handleUpdateJob", params);
    axios.patch(`http://localhost:3000/photos/${id}.json`, params).then((response) => {
      setJobs(
        jobs.map((job) => {
          if (job.id === response.data.id) {
            return response.data;
          } else {
            return job;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/jobsnew" element={<JobsNew />} onCreateJob={handleCreateJob} />
        <Route path="jobsindex" element={<JobsIndex />} onShowJob={handleShowJob} />
      </Routes>
      <Modal show={isJobsShowVisible} onClose={handleClose}>
        <JobsShow job={currentJob} onUpdateJob={handleUpdateJob} onDestroyJob={handleDestroyJob} />
      </Modal>
    </div>
  );
}
