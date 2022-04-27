export const types = {
  REQUEST_DATA: "REQUEST_DATA",
  GET_ARTISTS: "GET_ARTISTS",
  SET_ARTIST: "SET_ARTIST",
  GET_TRACKS: "GET_TRACKS",
  SET_TRACKS: "SET_TRACKS",
  GET_GENRES: "GET_GENRES",
  SET_GENRE: "SET_GENRE",
  REQUEST_FAILED: "REQUEST_FAILED",
  SET_STEP: "SET_STEP",
  SET_OFFSET: "SET_OFFSET",
  REMOVE_ARTIST: "REMOVE_ARTIST",
  CLEAR_DATA: "CLEAR_DATA",
  REMOVE_TRACK: "REMOVE_TRACK",
};

export const setCurrStep = (payload) => ({ type: types.SET_STEP, payload });
export const getArtists = (payload) => ({ type: types.GET_ARTISTS, payload });
export const setArtist = (payload) => ({ type: types.SET_ARTIST, payload });
export const getTracks = (payload) => ({ type: types.GET_TRACKS, payload });
export const setTracks = (payload) => ({ type: types.SET_TRACKS, payload });
export const getGenres = (payload) => ({ type: types.GET_GENRES, payload });
export const setGenre = (payload) => ({ type: types.SET_GENRE, payload });
export const setOffset = () => ({ type: types.SET_OFFSET });
export const removeArtist = () => ({
  type: types.REMOVE_ARTIST,
});
export const clearData = () => ({ type: types.CLEAR_DATA });
export const removeTrack = (payload) => ({ type: types.REMOVE_TRACK, payload });
