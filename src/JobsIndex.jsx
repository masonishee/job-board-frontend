export function JobsIndex(props) {
  const fakeJobData1 = {
    id: 1,
    company: "TechCo Inc.",
    title: "Frontend Developer",
    description: "Join our talented team of developers and work on exciting projects.",
    url: "https://techco.com/careers/frontend-developer",
    location: "San Francisco, CA",
    active: true,
    salary: "80,000",
  };

  const fakeJobData2 = {
    id: 2,
    company: "Web Solutions Ltd.",
    title: "Full Stack Developer",
    description: "We're looking for a full stack developer to build amazing web applications.",
    url: "https://websolutions.com/careers/full-stack-developer",
    location: "New York, NY",
    active: false,
    salary: "75,000",
  };

  const fakeJobData3 = {
    id: 3,
    company: "E-commerce Pro",
    title: "UI/UX Designer",
    description: "Create stunning user interfaces and enhance user experiences.",
    url: "https://ecommercepro.com/careers/ui-ux-designer",
    location: "Los Angeles, CA",
    active: true,
    salary: "70,000",
  };

  const fakeJobData = [fakeJobData1, fakeJobData2, fakeJobData3];
  return (
    <div>
      <h1 className="text-2xl text-blue-500">All jobs</h1>
      {fakeJobData.map((job) => (
        <div key={job.id}>
          <p>Company: {job.company}</p>
          <p>Title: {job.title}</p>
          <p>Description: {job.description}</p>
          <p>Url: {job.url}</p>
          <p>Location: {job.location}</p>
          <p>Active: {job.active ? "Yes" : "No"}</p>
          <p>Salary: ${job.salary} per year</p>
          <button onClick={() => props.onShowJob(job)}>More info</button>
        </div>
      ))}
    </div>
  );
}
