import React from "react";
import "./Dashboard.css";

const Dashboard = ({ logout }) => {
  return (
    <div>
      <button className="button logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
