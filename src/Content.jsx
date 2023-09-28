import axios from "axios";
import { useState, useEffect } from "react";
import { JobsIndex } from "./JobsIndex";
import { Modal } from "./Modal";
import { JobsShow } from "./JobsShow";
import { JobsNew } from "./JobsNew";

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

  return (
    <div>
      <JobsIndex jobs={jobs} onShowJob={handleShowJob} />
      <JobsNew onCreateJob={handleCreateJob} />
      <Modal show={isJobsShowVisible} onClose={handleClose}>
        <JobsShow job={currentJob} onUpdateJob={handleUpdateJob} onDestroyJob={handleDestroyJob} />
      </Modal>
    </div>
  );
}
