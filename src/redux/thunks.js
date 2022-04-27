import { getArtists, getTracks } from "./actions";
import { getSearchResult } from "./services";
export const getSearchThunk = (query, type, offset) => {
  return async (dispatch) => {
    try {
      const response = await getSearchResult(query, type, offset);
      console.log(response);
      if (response.status === 200) {
        type === "artist"
          ? dispatch(getArtists(response.data.artists.items))
          : dispatch(getTracks(response.data.tracks.items));
      } else {
        throw new Error("Error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
