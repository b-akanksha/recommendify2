import React from "react";
import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [token, setToken] = React.useState("");

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  React.useEffect(() => {
    const hash = window.location.hash;
    let authToken = window.localStorage.getItem("token");

    if (!authToken && hash) {
      authToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", authToken);
    }

    setToken(authToken);
  }, []);

  return (
    <div className="App">
      {!token && <Login />}
      {token && <Home logout={logout} />}
    </div>
  );
}

export default App;
