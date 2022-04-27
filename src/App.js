import React from "react";
import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { getAuthThunk } from "./redux/thunks";
import { setToken } from "./redux/actions";

function App() {
  const [token, setAuthToken] = React.useState("");

  const dispatch = useDispatch();

  const logout = () => {
    setAuthToken("");
    dispatch(setToken(""));
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
      dispatch(getAuthThunk());
    }

    setAuthToken(authToken);
  }, [dispatch]);

  return (
    <div className="App">
      <div className="flex-grow">
        {!token && <Login />}
        {token && <Home logout={logout} />}
      </div>
      <footer>
        <p>
          <i>
            Made by{" "}
            <b>
              <a
                href="https://www.linkedin.com/in/akanksha-bhat-255b4315a/"
                target="_blank"
                rel="noreferrer"
              >
                Akanksha
              </a>
            </b>
            . Powered by{" "}
            <b>
              <a
                href="https://developer.spotify.com/"
                target="_blank"
                rel="noreferrer"
              >
                Spotify API
              </a>
            </b>
          </i>
        </p>
      </footer>
    </div>
  );
}

export default App;
