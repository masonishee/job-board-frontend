import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4">Signup</h1>
        <ul className="text-red-500">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input id="name" name="name" type="text" className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input id="email" name="email" type="email" className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input id="password" name="password" type="password" className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password_confirmation" className="block text-gray-700">
              Password confirmation:
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
