import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="p-3 bg-info bg-opacity-10 border border-info rounded-end mb-5">
      <div id="login">
        <div className="text-center">
          <h1>Login</h1>
        </div>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div class="input-group flex-nowrap mb-3">
            <span class="input-group-text" id="addon-wrapping">
              Email
            </span>
            <input
              name="email"
              type="email"
              class="form-control"
              placeholder=""
              aria-label="Email"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="input-group flex-nowrap mb-3">
            <span class="input-group-text" id="addon-wrapping">
              Password
            </span>
            <input
              name="password"
              type="password"
              class="form-control"
              placeholder=""
              aria-label="Password"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-dark d-grid">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
