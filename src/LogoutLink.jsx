import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div class="d-flex justify-content-center">
      <button onClick={handleClick} class="btn btn-dark d-grid">
        Logout
      </button>
    </div>
  );
}
