import React from "react";
import "../result.css";

const ResultItem = ({ img, title, handleClick, classApplied }) => {
  return (
    <div className={classApplied} onClick={handleClick} role="button">
      {img && <img className="item-img" src={img.url} alt={title} />}
      <h5 className="item-text" onClick={handleClick}>
        {title}
      </h5>
    </div>
  );
};

export default ResultItem;
