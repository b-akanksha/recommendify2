import React from "react";
import { useSelector } from "react-redux";
import "../Form1/form1.css";

const Dashboard = () => {
  const { result, analysis } = useSelector((state) => state.recommend);
  return (
    <div className="form1-container">
      <div className="result-container">
        <h3 className="div-title">Metrics</h3>
        <div className="result-flex-container">
          {analysis && (
            <table>
              {Object.keys(analysis).map((i, index) => (
                <tr key={`${i}-${index}`}>
                  <td>{i}</td>
                  <td>{analysis[i]}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
      <div style={{ height: "20px" }} />
      <div className="result-container">
        <h3 className="div-title">Top 12 Recommendation</h3>
        <div className="result-flex-container iframe-height">
          {result &&
            result.map((track) => (
              <iframe
                title={track.name}
                src={`https://open.spotify.com/embed/track/${track.id}`}
                width="250"
                height="80"
                key={track.id}
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
                className="flex-iframe-container"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
