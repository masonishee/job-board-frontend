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
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-semibold text-blue-500 mb-8">All Jobs</h1>
      {fakeJobData.map((job) => (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow-md mb-4">
          <p className="text-lg font-semibold text-gray-800">Company: {job.company}</p>
          <p className="text-md text-gray-600">Title: {job.title}</p>
          <p className="text-md text-gray-600">Description: {job.description}</p>
          <p className="text-md text-blue-500 hover:underline">
            URL:{" "}
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              {job.url}
            </a>
          </p>
          <p className="text-md text-gray-600">Location: {job.location}</p>
          <p className="text-md text-gray-600">Active: {job.active ? "Yes" : "No"}</p>
          <p className="text-md text-gray-600">Salary: ${job.salary} per year</p>
          <button
            onClick={() => props.onShowJob(job)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring focus:ring-blue-300"
          >
            More Info
          </button>
        </div>
      ))}
    </div>
  );
}
