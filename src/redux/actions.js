export const types = {
  REQUEST_DATA: "REQUEST_DATA",
  GET_ARTISTS: "GET_ARTISTS",
  SET_ARTIST: "SET_ARTIST",
  GET_TRACKS: "GET_TRACKS",
  SET_TRACKS: "SET_TRACKS",
  GET_GENRES: "GET_GENRES",
  SET_GENRE: "SET_GENRE",
  REMOVE_GENRE: "REMOVE_GENRE",
  REQUEST_FAILED: "REQUEST_FAILED",
  SET_STEP: "SET_STEP",
  REMOVE_ARTIST: "REMOVE_ARTIST",
  CLEAR_DATA: "CLEAR_DATA",
  REMOVE_TRACK: "REMOVE_TRACK",
  GET_ANALYSIS: "GET_ANALYSIS",
  GET_IDS: "GET_IDS",
  GET_RECOMMENDATION: "GET_RECOMMENDATION",
  SET_TOKEN: "SET_TOKEN",
  CLOSE_ERROR: "CLOSE_ERROR",
};

export const setCurrStep = (payload) => ({ type: types.SET_STEP, payload });
export const getArtists = (payload) => ({ type: types.GET_ARTISTS, payload });
export const setArtist = (payload) => ({ type: types.SET_ARTIST, payload });
export const getTracks = (payload) => ({ type: types.GET_TRACKS, payload });
export const setTracks = (payload) => ({ type: types.SET_TRACKS, payload });
export const getGenres = (payload) => ({ type: types.GET_GENRES, payload });
export const setGenre = (payload) => ({ type: types.SET_GENRE, payload });
export const removeArtist = () => ({
  type: types.REMOVE_ARTIST,
});
export const clearData = () => ({ type: types.CLEAR_DATA });
export const removeTrack = (payload) => ({ type: types.REMOVE_TRACK, payload });
export const removeGenre = (payload) => ({ type: types.REMOVE_GENRE, payload });
export const getIds = () => ({ type: types.GET_IDS });
export const analyse = (payload) => ({ type: types.GET_ANALYSIS, payload });
export const getRecommendation = (payload) => ({
  type: types.GET_RECOMMENDATION,
  payload,
});
export const setToken = (payload) => ({ type: types.SET_TOKEN, payload });
export const requestFailed = (payload) => ({
  type: types.REQUEST_FAILED,
  payload,
});
export const closeError = () => ({ type: types.CLOSE_ERROR });
