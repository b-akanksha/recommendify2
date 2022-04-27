import { getAuth } from "../utils/api";
import {
  analyse,
  getArtists,
  getRecommendation,
  getTracks,
  setToken,
} from "./actions";
import {
  getAnalysisService,
  getRecommendationService,
  getSearchResult,
} from "./services";
export const getSearchThunk = (query, type) => {
  return async (dispatch, getState) => {
    const { offset } = getState().recommend;
    try {
      const response = await getSearchResult(query, offset);
      if (response.status === 200) {
        console.log(response);

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

export const getAnalysisThunk = () => {
  return async (dispatch, getState) => {
    const ids = getState().recommend.trackIds;
    try {
      const response = await getAnalysisService(ids);
      if (response.status === 200) {
        await dispatch(analyse(response.data));
        await dispatch(getRecommendationThunk());
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRecommendationThunk = () => {
  return async (dispatch, getState) => {
    const { trackIds, topArtist, analysis, genres } = getState().recommend;

    try {
      const response = await getRecommendationService(
        analysis,
        trackIds[0],
        topArtist.id,
        genres
      );
      if (response.status === 200) {
        dispatch(getRecommendation(response.data.tracks));
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAuthThunk = () => {
  return async (dispatch) => {
    try {
      const response = await getAuth();
      if (response.status === 200) {
        dispatch(setToken(response.data.access_token));
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
