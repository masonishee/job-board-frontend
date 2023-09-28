export function JobsShow(props) {
  return (
    <div>
      <h1></h1>
      <p>Company: {job.company_id}</p>
      <p>Title: {job.title}</p>
      <p>Description: {job.description}</p>
      <p>Url: {job.url}</p>
      <p>Location: {job.location}</p>
      <p>Active: {job.active}</p>
      <p>Salary: {job.salary}</p>
    </div>
  );
}
