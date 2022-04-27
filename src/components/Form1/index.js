import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearData, removeArtist, setArtist } from "../../redux/actions";
import { getSearchThunk } from "../../redux/thunks";
import ResultList from "../ResultList";
import ResultItem from "../ResultList/ResultItem";
import "./form1.css";

const Form1 = () => {
  const { artistList, topArtist, offset } = useSelector(
    (state) => state.recommend
  );
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (search !== "") {
      dispatch(clearData());
      dispatch(getSearchThunk(search, "artist", offset));
    }
  }, [dispatch, search, offset]);

  const handleClick = (item) => dispatch(setArtist(item));
  const removeItem = () => dispatch(removeArtist());

  return (
    <div className="form1-container">
      <input
        className="input-field"
        type="text"
        placeholder="Search for an artist"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {Object.keys(topArtist).length > 0 && (
        <div className="result-container result">
          <div className="result-flex-container result-cont">
            <h1 className="div-title">Favourite Artist</h1>
            <ResultItem
              key={`${topArtist.name}-${topArtist.id}`}
              title={topArtist.name}
              classApplied="flex-item selected-tile"
              img={topArtist.images[0]}
              handleClick={() => removeItem()}
            />
          </div>
        </div>
      )}
      <div style={{ height: "20px" }} />
      {artistList && artistList.length > 0 && (
        <ResultList
          data={artistList}
          title="Search Results"
          type="artist"
          topId={topArtist.id || "0"}
          onSelect={handleClick}
          onDelete={removeArtist}
        />
      )}
    </div>
  );
};

export default Form1;
