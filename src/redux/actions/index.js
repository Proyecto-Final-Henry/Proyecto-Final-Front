import axios from "axios";
import {
  SEND_EMAIL_CONTACT,
  GET_USER_DATA,
  GET_SEARCH,
  GET_ARTIST_DATA,
  GET_ARTIST_ALBUM,
  GET_ARTIST_TOP,
  GET_RES_REVIEWS,
  GET_ALBUM_DATA,
  GET_ARTIST_SONGS,
  GET_ALBUM_SONGS,
  GET_ALL_REVIEWS,
  GET_RANDOM_SONGS,
  GET_SONG_DATA,
} from "../constants";

const urlApi = "http://localhost:3001/api/back-end";

export const sendEmailContact = (values) => {
  const url = urlApi + "/users/sendEmailContact";
  return async (dispatch) => {
    axios
      .post(url, values)
      .then((responde) => {
        dispatch({
          type: SEND_EMAIL_CONTACT,
          payload: responde.data,
        });
      })
      .catch((e) => console.log(e));
  };
};

export function getUserData(id) {
  return async function (dispatch) {
    return fetch("http://localhost:3001/api/back-end/users/perfil")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_USER_DATA, payload: json });
      });
  };
}

export function getSearch(toFind, filter, index) {
  return async function (dispatch) {
    return fetch(
      `http://localhost:3001/api/back-end/search?query=${toFind}&filter=${filter}&index=${index}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_SEARCH,
          payload: {
            response: json,
            query: toFind,
            filter: filter,
            index: index,
          },
        });
      });
  };
}

export function getArtistData(id) {
  return async (dispatch) => {
    return axios
      .get(`http://localhost:3001/api/back-end/artists?artist=${id}`)
      .then((artist) => {
        dispatch({
          type: GET_ARTIST_DATA,
          payload: artist.data,
        });
      });
  };
}
export function getArtistAlbum(id) {
  return async (dispatch) => {
    return axios
      .get(
        `http://localhost:3001/api/back-end/artists/artistalbums?artist=${id}`
      )
      .then((artist) => {
        dispatch({
          type: GET_ARTIST_ALBUM,
          payload: artist.data,
        });
      });
  };
}
export function getArtistSongs(id) {
  return async (dispatch) => {
    return axios
      .get(
        `http://localhost:3001/api/back-end/artists/artistsongs?artist=${id}`
      )
      .then((artist) => {
        dispatch({
          type: GET_ARTIST_SONGS,
          payload: artist.data,
        });
      });
  };
}

export function getArtistTop(id) {
  return async (dispatch) => {
    return axios
      .get(
        `http://localhost:3001/api/back-end/artists/artistsongstop?artist=${id}`
      )
      .then((artist) => {
        dispatch({
          type: GET_ARTIST_TOP,
          payload: artist.data,
        });
      });
  };
}

export function getResReviews(apiId, type) {
  return async (dispatch) => {
    return axios
      .get(
        `http://localhost:3001/api/back-end/reviews/resource?id=${apiId}&type=${type}`
      )
      .then((reviews) => {
        dispatch({
          type: GET_RES_REVIEWS,
          payload: reviews.data,
        });
      });
  };
}

export function getAlbumData(id) {
  return async (dispatch) => {
    return axios
      .get(`http://localhost:3001/api/back-end/albums?album=${id}`)
      .then((album) => {
        dispatch({
          type: GET_ALBUM_DATA,
          payload: album.data,
        });
      });
  };
}

export function getAlbumSongs(id) {
  return async (dispatch) => {
    return axios
      .get(`http://localhost:3001/api/back-end/albums/albumsongs?album=${id}`)
      .then((albumSongs) => {
        dispatch({
          type: GET_ALBUM_SONGS,
          payload: albumSongs.data,
        });
      });
  };
}

export function getAllReviews() {
  return async (dispatch) => {
    axios.get("http://localhost:3001/api/back-end/reviews").then((reviews) => {
      dispatch({
        type: GET_ALL_REVIEWS,
        payload: reviews.data,
      });
    });
  };
}

export function getRandomSongs() {
  return async (dispatch) => {
    axios
      .get("http://localhost:3001/api/back-end/songs/random")
      .then((randomSongs) => {
        dispatch({
          type: GET_RANDOM_SONGS,
          payload: randomSongs.data,
        });
      });
  };
}

export function getSongData(songId) {
  return async (dispatch) => {
    axios
      .get(`http://localhost:3001/api/back-end/songs?id=${songId}`)
      .then((songData) => {
        dispatch({
          type: GET_SONG_DATA,
          payload: songData.data,
        });
      });
  };
}
