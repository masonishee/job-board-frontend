//title, description, url, location, active, salary

export function JobsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateJob(params, () => event.target.reset());
  };

  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">New Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          Title: <input className="border rounded px-2 py-1" name="title" type="text" />
        </div>
        <div className="mb-2">
          Description: <input className="border rounded px-2 py-1" name="description" type="text" />
        </div>
        <div className="mb-2">
          Image Url: <input className="border rounded px-2 py-1" name="url" type="url" />
        </div>
        <div className="mb-2">
          Location: <input className="border rounded px-2 py-1" name="location" type="text" />
        </div>
        <div className="mb-2">
          Active: <input className="border rounded px-2 py-1" name="active" type="text" />
        </div>
        <div className="mb-2">
          Salary: <input className="border rounded px-2 py-1" name="salary" type="number" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2" type="submit">
          Create job
        </button>
      </form>
    </div>
  );
}
