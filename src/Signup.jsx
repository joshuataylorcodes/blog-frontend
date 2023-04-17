import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefult();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost3000.users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Sign Up</h1>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Email: <input type="email" />
        </div>
        <div>
          Password: <input type="password" />
        </div>
        <div>
          Password Confirmation: <input type="password" />
        </div>
      </form>
      <button type="submit">Signup</button>
    </div>
  );
}
