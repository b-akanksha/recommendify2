import { getAuth } from "../utils/api";
import {
  analyse,
  getArtists,
  getRecommendation,
  getTracks,
  requestFailed,
  setToken,
} from "./actions";
import {
  getAnalysisService,
  getRecommendationService,
  getSearchResult,
  loadMoreService,
} from "./services";

export const getSearchThunk = (query, type) => {
  return async (dispatch) => {
    try {
      const response = await getSearchResult(query);
      if (response.status === 200) {
        type === "artist"
          ? dispatch(
              getArtists({
                items: response.data.artists.items,
                next: response.data.artists.next,
              })
            )
          : dispatch(
              getTracks({
                items: response.data.tracks.items,
                next: response.data.tracks.next,
              })
            );
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      dispatch(requestFailed(error));
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
        throw new Error(response.error);
      }
    } catch (error) {
      dispatch(requestFailed(error));
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
        throw new Error(response.error);
      }
    } catch (error) {
      dispatch(requestFailed(error));
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
        throw new Error(response.error);
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

export const loadMoreThunk = (type) => {
  return async (dispatch, getState) => {
    const { next } = getState().recommend;
    try {
      const response = await loadMoreService(next);
      if (response.status === 200) {
        type === "artist"
          ? dispatch(
              getArtists({
                items: response.data.artists.items,
                next: response.data.artists.next,
              })
            )
          : dispatch(
              getTracks({
                items: response.data.tracks.items,
                next: response.data.tracks.next,
              })
            );
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
