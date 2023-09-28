//title, description, url, location, active, salary

export function JobsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateJob(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Job</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Image Url: <input name="url" type="url" />
        </div>
        <div>
          Location: <input name="location" type="text" />
        </div>
        <div>
          Active: <input name="active" type="text" />
        </div>
        <div>
          Salary: <input name="salary" type="number" />
        </div>
        <button type="submit">Create job</button>
      </form>
    </div>
  );
}
