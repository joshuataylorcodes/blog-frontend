import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        localStorage.setItem("flashMessage", "User Created");
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="p-3 bg-info bg-opacity-10 border border-info rounded-end mb-5">
      <div id="signup">
        <div className="text-center">
          <h1>Signup</h1>
        </div>
        <ul>
          {status ? <img src={`https://httpstatusdogs.com/img/${status}.jpg`} /> : null}
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div class="input-group flex-nowrap ">
            <span class="input-group-text" id="addon-wrapping">
              Name
            </span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              name="name"
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Name"
              aria-describedby="addon-wrapping"
            />
          </div>

          <small>{20 - name.length} characters remaining</small>

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
              Password:{" "}
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

          <div class="input-group flex-nowrap mb-3">
            <span class="input-group-text" id="addon-wrapping">
              Password Confrimation:{" "}
            </span>
            <input
              name="password_confirmation"
              type="password"
              class="form-control"
              placeholder=""
              aria-label="Password"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-dark d-grid">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
