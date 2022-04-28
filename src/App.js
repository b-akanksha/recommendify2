import React from "react";
import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { getAuthThunk } from "./redux/thunks";
import { closeError, setToken } from "./redux/actions";
import { Alert, Snackbar } from "@mui/material";

function App() {
  const [token, setAuthToken] = React.useState("");

  const { errorOpen, error } = useSelector((state) => state.recommend);
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
  }, []);

  const handleClose = () => dispatch(closeError());

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
      <Snackbar
        open={errorOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          <b>{error.message}</b>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
