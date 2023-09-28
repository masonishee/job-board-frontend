export function JobsShow(props) {
  const handleClick = () => {
    props.onDestroyJob(props.job);
  };

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
      <button onClick={handleClick}>Destroy job</button>
    </div>
  );
}
