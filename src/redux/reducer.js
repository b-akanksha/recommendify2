import initialState from "./initialState";
import { types } from "./actions";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_STEP:
      return { ...state, currStep: payload };
    case types.GET_ARTISTS:
      return { ...state, artistList: [...state.artistList, ...payload] };
    case types.SET_ARTIST:
      return { ...state, topArtist: payload };
    case types.GET_TRACKS:
      return { ...state, trackList: payload };
    case types.SET_TRACKS: {
      let tempArr = state.tracks.filter((i) => i.id === payload.id);
      if (tempArr.length === 0) {
        return { ...state, tracks: [...state.tracks, payload] };
      } else {
        return { ...state, tracks: [...state.tracks] };
      }
    }
    case types.REMOVE_TRACK: {
      let tempArr = state.tracks.filter((item) => item.id !== payload);
      return { ...state, tracks: tempArr };
    }
    case types.GET_GENRES:
      return { ...state, genresList: payload };
    case types.SET_GENRE:
      return { ...state, genres: [...state.genres, payload] };
    case types.SET_OFFSET:
      return { ...state, offset: state.offset + 10 };
    case types.REMOVE_ARTIST:
      return { ...state, topArtist: {} };
    case types.CLEAR_DATA:
      return { ...state, artistList: [], tracksList: [], genresList: [] };
    default:
      return { ...state };
  }
};

export default reducer;
