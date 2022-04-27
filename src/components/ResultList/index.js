import React from "react";
import ResultItem from "./ResultItem";
import "./result.css";
import { useDispatch, useSelector } from "react-redux";
import { setOffset, setOffsetBack } from "../../redux/actions";

const ResultList = ({ data, topId, onSelect, onDelete }) => {
  const { offset } = useSelector((state) => state.recommend);
  const dispatch = useDispatch();
  const goFront = () => dispatch(setOffset());
  const goBack = () => dispatch(setOffsetBack());

  return (
    <div className="result-container">
      <h1 className="div-title">Search results</h1>
      <p className="div-title">Click on the tile to add one favourtie singer</p>
      {data && data.length > 0 ? (
        <div className="result-flex-container">
          {data.map((item, index) => {
            const { id, name } = item;
            return (
              <ResultItem
                key={`${name}-${id}-${index}`}
                title={name}
                classApplied={
                  topId === id ? "flex-item selected-tile" : "flex-item"
                }
                img={item.images[0]}
                handleClick={() => {
                  if (topId === id) {
                    onDelete();
                  } else {
                    onSelect(item);
                  }
                }}
              />
            );
          })}
        </div>
      ) : (
        <p>No data found</p>
      )}
      <div>
        <button
          className={`button load-button ${offset === 10 && "disabled"}`}
          onClick={goBack}
          disabled={offset === 10}
        >
          Back
        </button>
        <button className="button load-button" onClick={goFront}>
          Search more
        </button>
      </div>
    </div>
  );
};

export default ResultList;
