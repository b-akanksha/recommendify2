import React from "react";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";

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
      {token && <Dashboard logout={logout} />}
    </div>
  );
}

export default App;
