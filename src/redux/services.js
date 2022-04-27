import * as api from "../utils/api";

export const getSearchResult = async (query, offset) => {
  if (offset === 0) {
    return api.get(
      `/search?q=${query}&type=artist,album,track&include_external=audio&limit=10`
    );
  } else {
    return api.get(
      `/search?q=${query}&type=artist,album,track&include_external=audio&limit=10&offset=${offset}`
    );
  }
};

export const getAnalysisService = async (ids) => {
  return api.get(`/audio-features?ids=${ids.join("%2C")}`);
};

export const getRecommendationService = async (
  data,
  tracks,
  artists,
  genre
) => {
  return api.get(
    `/recommendations?limit=12&market=IN&seed_artists=${artists}&seed_genres=${genre.join(
      "%2C"
    )}&seed_tracks=${tracks}&target_acousticness=${
      data.acousticness
    }&target_danceability=${data.danceability}&target_energy=${
      data.energy
    }&target_instrumentalness=${data.instrumentalness}&target_liveness=${
      data.liveness
    }&target_loudness=${data.loudness}&target_speechiness=${
      data.speechiness
    }&target_tempo=${data.tempo}&target_valence=${data.valence}`
  );
};
