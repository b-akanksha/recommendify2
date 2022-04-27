import { Chip } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGenre, setGenre } from "../../redux/actions";
import * as genre from "../../utils/genres";
import "./form3.css";

const Form3 = () => {
  const { genres } = useSelector((state) => state.recommend);
  const dispatch = useDispatch();

  const handleSelect = (name) => dispatch(setGenre(name));
  const removeSelect = (name) => dispatch(removeGenre(name));

  return (
    <div className="form1-container">
      {genres.length > 0 && (
        <div className="result-container">
          <h1 className="div-title">Selected Genre</h1>
          <div className="result-flex-container cont-height">
            {genres.map((item) => (
              <Chip
                className="genre-chip selected-chip"
                key={item}
                label={item}
                variant="outlined"
                onClick={() => {
                  removeSelect(item);
                }}
              />
            ))}
          </div>
        </div>
      )}
      <div style={{ height: "20px" }} />
      {genre.genres.length > 0 && (
        <div className="result-container">
          <h1 className="div-title">Select Genres</h1>
          <p className="div-title">Select upto 3 favourite genre</p>
          <div className="result-flex-container container-height">
            {genre.genres.map((item, index) => (
              <Chip
                className={`${
                  genres.includes(item)
                    ? "genre-chip selected-chip"
                    : "genre-chip"
                }`}
                key={`${item}-${index}`}
                label={item}
                variant="outlined"
                onClick={() => {
                  if (genres.includes(item)) {
                    removeSelect(item);
                  } else {
                    if (genres.length < 3) {
                      handleSelect(item);
                    }
                  }
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form3;
