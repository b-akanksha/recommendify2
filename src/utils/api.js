import axios from "axios";
import { setAuthHeader } from "./functions";
import { Buffer } from "buffer";

export const get = async (url, params) => {
  setAuthHeader();
  return axios.get(`https://api.spotify.com/v1${url}`, params);
};

export const getWithoutURL = async (url, params) => {
  setAuthHeader();
  return axios.get(url, params);
};

export const getAuth = async () => {
  return axios({
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.REACT_APP_CLIENT_ID +
            ":" +
            process.env.REACT_APP_CLIENT_SECRET
        ).toString("base64"),
    },
    data: "grant_type=client_credentials",
  });
};
