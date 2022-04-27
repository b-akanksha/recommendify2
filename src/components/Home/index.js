import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIds, setCurrStep } from "../../redux/actions";
import { getAnalysisThunk } from "../../redux/thunks";
import Dashboard from "../Dashboard";
import FormContainer from "../FormContainer";
import "./Dashboard.css";

const Home = ({ logout }) => {
  const { currStep, topArtist, tracks, genres } = useSelector(
    (state) => state.recommend
  );
  const dispatch = useDispatch();

  const next = async () => {
    switch (currStep) {
      case "Form1":
        return dispatch(setCurrStep("Form2"));
      case "Form2":
        return dispatch(setCurrStep("Form3"));
      case "Form3":
        await dispatch(getIds());
        await dispatch(getAnalysisThunk());
        return dispatch(setCurrStep("Dashboard"));
      default:
        return dispatch(setCurrStep("Form1"));
    }
  };
  return (
    <div>
      {currStep === "Form1" || currStep === "Form2" || currStep === "Form3" ? (
        <FormContainer />
      ) : null}
      {currStep === "Dashboard" && <Dashboard />}
      <div className="buttons">
        <button className="button logout-button" onClick={logout}>
          Logout
        </button>
        {((currStep === "Form1" && Object.keys(topArtist).length > 0) ||
          (currStep === "Form2" && tracks.length > 0) ||
          (currStep === "Form3" && genres.length > 0)) && (
          <button className="button load-button" onClick={next}>
            Next
          </button>
        )}
        {currStep === "Dashboard" && (
          <button className="button login-button" onClick={next}>
            Try again
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
