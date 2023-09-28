import axios from "axios";
import { useState, useEffect } from "react";
import { JobsIndex } from "./JobsIndex";
<<<<<<< HEAD
import { Modal } from "./Modal";
import { JobsShow } from "./JobsShow";
=======
import { JobsNew } from "./JobsNew";
>>>>>>> 53f2ff7c0fe9e151569ceffb8489d5e4798b6f85

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

  useEffect(handleIndexJobs, []);

  return (
    <div>
      <JobsIndex jobs={jobs} onShowJob={handleShowJob} />
      <Modal show={isJobsShowVisible} onClose={handleClose}>
        <JobsShow job={currentJob} />
      </Modal>
  const handleCreateJob = (params, successCallBack) => {
    console.log("handleCreateJob", params);
    axios.post("http://localhost:3000/jobs.json", params).then((response) => {
      setJobs([...jobs, response.data]);
      successCallBack();
    });
  };

  useEffect(handleIndexPhotos, []);

  return (
    <div>
      <JobsNew onCreateJob={handleCreateJob} />
      <JobsIndex jobs={jobs} />
    </div>
  );
}
