export function JobsShow(props) {
  const handleClick = () => {
    props.onDestroyJob(props.job);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateJob(props.job.id, params, () => event.target.reset());
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
      <form onSubmit={handleSubmit}>
        <div>
          Company: <input defaultValue={props.job.company_id} name="company" type="text" />
        </div>
        <div>
          Title: <input defaultValue={props.job.title} name="title" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.job.description} name="description" type="text" />
        </div>
        <div>
          Url: <input defaultValue={props.job.url} name="url" type="url" />
        </div>
        <div>
          Location: <input defaultValue={props.job.location} name="location" type="text" />
        </div>
        <div>
          Active: <input defaultValue={props.job.active} name="active" type="text" />
        </div>
        <div>
          Salary: <input defaultValue={props.job.salary} name="salary" type="number" />
        </div>
        <button type="submit">Update job</button>
      </form>
    </div>
  );
}
