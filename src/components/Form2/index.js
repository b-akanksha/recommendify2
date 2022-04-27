import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearData, removeTrack, setTracks } from "../../redux/actions";
import { getSearchThunk } from "../../redux/thunks";
import "../Form1/form1.css";
import TrackList from "../TrackList";

const Form2 = () => {
  const { trackList, tracks, offset } = useSelector((state) => state.recommend);
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();

  const handleClick = (item) => dispatch(setTracks(item));
  const removeItem = (id) => dispatch(removeTrack(id));

  React.useEffect(() => {
    if (search !== "") {
      dispatch(clearData());
      dispatch(getSearchThunk(search, "tracks"));
    }
  }, [dispatch, search, offset]);
  return (
    <div className="form1-container">
      <input
        className="input-field"
        type="text"
        placeholder="Search for songs"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {tracks.length > 0 && (
        <TrackList
          title="Favourite Tracks"
          subTitle=""
          data={tracks}
          onSelect={handleClick}
          onDelete={(id) => removeItem(id)}
          tracks={tracks}
          type="fav"
        />
      )}
      <div style={{ height: "20px" }} />
      {trackList && trackList.length > 0 && (
        <TrackList
          title="Search results"
          subTitle="Click on the tile to uptp 8 favourtie tracks"
          data={trackList}
          onSelect={tracks.length < 8 ? handleClick : () => {}}
          onDelete={(id) => removeItem(id)}
          tracks={tracks}
        />
      )}
    </div>
  );
};

export default Form2;
