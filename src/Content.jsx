import axios from "axios";
import { useState, useEffect } from "react";
import { JobsIndex } from "./JobsIndex";

export function Content() {
  const [jobs, setJobs] = useState([]);

  const handleIndexPhotos = () => {
    console.log("handleIndexJobs");
    axios.get("http://localhost:3000/jobs.json").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  };

  useEffect(handleIndexPhotos, []);

  return (
    <div>
      <JobsIndex jobs={jobs} />
    </div>
  );
}
