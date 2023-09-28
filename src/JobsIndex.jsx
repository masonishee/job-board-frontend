export function JobsIndex(props) {
  return (
    <div>
      <h1 className="text-2xl text-blue-500">All jobs</h1>
      {props.jobs.map((job) => (
        <div key={job.id}>
          <p>Company: {job.company_id}</p>
          <p>Title: {job.title}</p>
          <p>Description: {job.description}</p>
          <p>Url: {job.url}</p>
          <p>Location: {job.location}</p>
          <p>Active: {job.active}</p>
          <p>Salary: {job.salary}</p>
          <button onClick={() => props.onShowJob(job)}>More info</button>
        </div>
      ))}
    </div>
  );
}
