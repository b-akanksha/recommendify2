import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrStep } from "../../redux/actions";
import FormContainer from "../FormContainer";
import "./Dashboard.css";

const Dashboard = ({ logout }) => {
  const { currStep, topArtist, tracks } = useSelector(
    (state) => state.recommend
  );
  const dispatch = useDispatch();

  const next = () => {
    switch (currStep) {
      case "Form1":
        return dispatch(setCurrStep("Form2"));
      case "Form2":
        return dispatch(setCurrStep("Form3"));
      case "Form3":
        return dispatch(setCurrStep("Result"));
      default:
        return () => {};
    }
  };
  return (
    <div>
      {currStep === "Form1" || currStep === "Form2" || currStep === "Form3" ? (
        <FormContainer />
      ) : null}
      <div className="buttons">
        <button className="button logout-button" onClick={logout}>
          Logout
        </button>
        {((currStep === "Form1" && Object.keys(topArtist).length > 0) ||
          (currStep === "Form2" && tracks.length > 0)) && (
          <button className="button load-button" onClick={next}>
            Next <div style={{ height: "10px" }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
