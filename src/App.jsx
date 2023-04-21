import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [flashMessage, setFlashMessage] = useState("");

  useEffect(() => {
    if (localStorage.flashMessage) {
      setFlashMessage(localStorage.flashMessage);
      localStorage.removeItem("flashMessage");
    }
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="flash">{flashMessage}</div>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
