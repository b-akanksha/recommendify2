import initialState from "./initialState";
import { types } from "./actions";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_STEP:
      return { ...state, currStep: payload };
    case types.GET_ARTISTS: {
      const tempArr = state.artistList;
      return { ...state, artistList: [...tempArr.concat(payload)] };
    }
    case types.SET_ARTIST:
      return { ...state, topArtist: payload };
    case types.GET_TRACKS: {
      return { ...state, trackList: [...payload] };
    }
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
    case types.REMOVE_GENRE: {
      let tempArr = state.genres.filter((i) => i !== payload);
      return { ...state, genres: tempArr };
    }
    case types.SET_OFFSET:
      return { ...state, offset: state.offset + 10 };
    case types.SET_OFFSET_BACK:
      return { ...state, offset: state.offset - 10 };
    case types.REMOVE_ARTIST:
      return { ...state, topArtist: {} };
    case types.CLEAR_DATA:
      return {
        ...state,
        artistList: [],
        tracksList: [],
        genresList: [],
        offset: 0,
      };
    case types.GET_IDS: {
      let tempArr = state.tracks.map((i) => i.id);
      return { ...state, trackIds: tempArr };
    }
    case types.GET_ANALYSIS: {
      const length = payload.audio_features.length;
      let acousticness = (
        payload.audio_features
          .map((item) => item.acousticness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      let danceability = (
        payload.audio_features
          .map((item) => item.danceability)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      let energy = (
        payload.audio_features
          .map((item) => item.energy)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      let instrumentalness = (
        payload.audio_features
          .map((item) => item.instrumentalness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      let liveness = (
        payload.audio_features
          .map((item) => item.liveness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      let loudness = (
        payload.audio_features
          .map((item) => item.loudness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      let speechiness = (
        payload.audio_features
          .map((item) => item.speechiness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      let tempo = (
        payload.audio_features
          .map((item) => item.tempo)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      let valence = (
        payload.audio_features
          .map((item) => item.valence)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      return {
        ...state,
        analysis: {
          acousticness,
          danceability,
          energy,
          instrumentalness,
          liveness,
          loudness,
          speechiness,
          tempo,
          valence,
        },
      };
    }
    case types.GET_RECOMMENDATION:
      return { ...state, result: payload };
    default:
      return { ...state };
  }
};

export default reducer;
