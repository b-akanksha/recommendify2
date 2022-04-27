import * as api from "../utils/api";

export const getSearchResult = async (query, type, offset) => {
  return api.get(`/search?q=${query}&type=${type}&limit=10&offset=${offset}`);
};
