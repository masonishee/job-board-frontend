export function JobsIndex(props) {
  return (
    <div>
      <h1>All jobs</h1>
      {props.jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.name}</h2>
          <p>Company: {job.company_id}</p>
          <p>Title: {job.title}</p>
          <p>Description: {job.description}</p>
          <p>Url: {job.url}</p>
          <p>Location: {job.location}</p>
          <p>Active: {job.active}</p>
          <p>Salary: {job.salary}</p>
        </div>
      ))}
    </div>
  );
}
