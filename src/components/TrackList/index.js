import React from "react";
import { useDispatch } from "react-redux";
import { setOffset } from "../../redux/actions";
import ResultItem from "../ResultList/ResultItem";
import "../ResultList/result.css";

const TrackList = ({
  data,
  tracks,
  onSelect,
  onDelete,
  title,
  subTitle,
  type,
}) => {
  const trackId = {};
  for (let elem of tracks) {
    trackId[elem.id] = elem.id;
  }
  const dispatch = useDispatch();
  const loadMore = () => dispatch(setOffset());

  return (
    <div className="result-container">
      <h1 className="div-title">{title}</h1>
      <p className="div-title">{subTitle}</p>
      {data && data.length > 0 ? (
        <div
          className={`result-flex-container ${type === "fav" && "cont-height"}`}
        >
          {data.map((item, index) => {
            const { id, name } = item;
            return (
              <ResultItem
                key={`${name}-${id}-${index}`}
                title={name}
                classApplied={
                  trackId[id]
                    ? `flex-item selected-tile ${type === "fav" && "width-set"}`
                    : tracks.length < 8
                    ? `flex-item ${type === "fav" && "width-set"}`
                    : ""
                }
                img={item.album.images[0]}
                handleClick={() => {
                  if (trackId[id]) {
                    onDelete(trackId[id]);
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
      {type !== "fav" && (
        <button className="button load-button" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default TrackList;
