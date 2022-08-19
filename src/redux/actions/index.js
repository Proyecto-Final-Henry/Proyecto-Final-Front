import { async } from "@firebase/util";
import axios from "axios";
import {
  SEND_EMAIL_CONTACT,
  GET_USER_DATA,
  GET_SEARCH,
  GET_ARTIST_SONG_SEARCH,
  GET_ARTIST_DATA,
  GET_ARTIST_ALBUM,
  GET_ARTIST_TOP,
  GET_RES_REVIEWS,
  GET_ALBUM_DATA,
  GET_ARTIST_SONGS,
  GET_ALBUM_SONGS,
  GET_ALL_REVIEWS,
  GET_RANDOM_SONGS,
  CREATE_DB_ALBUMS,
  GET_DB_ALBUMS,
  GET_SONG_DATA,
  GET_ALL_USERS,
  ON_PAGE_CHANGED,
  CALC_PAGES,
  CREATE_DB_GENRES,
  GET_GENRE_ALBUM,
  GET_RANDOM_FEED,
  GET_OTHER_USER_DATA,
  GET_MY_REVIEWS
} from "../constants";

export const sendEmailContact = (values) => {
  const url = "/users/sendEmailContact";
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
    return fetch("/api/back-end/users/perfil")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_USER_DATA, payload: json });
      });
  };
};

export  function onPageChanged(data) {
  return {type: ON_PAGE_CHANGED, payload: data }
};

export function calcPages(limit){
  return {type:CALC_PAGES, payload:limit}
};

export function getSearch(toFind, filter, index,id, obj) {
  let artist, album, explicit,selected;
  if(obj){
    artist=obj.artist;
    album=obj.album;
    explicit=obj.explicit
  }
  (obj.explicit && obj.explicit!== 'Seleccione una opción')||(obj.album && obj.album!== 'Seleccione un album') ||(obj.artist && obj.artist!== 'Seleccione un artista')? selected=true : selected=false;
  return async function (dispatch) {
    return axios(`/api/back-end/search?query=${toFind}&filter=${filter}&index=${index}&artist=${artist}&album=${album}&explicit=${explicit}`)
      .then((response) => {
        dispatch({
          type: GET_SEARCH,
          payload: {
            response: response.data,
            query: toFind,
            filter: filter,
            index: index,
            selected:selected
          },
        });
      });
  };
};

export function getArtistSongSearch(toFind,filter,index,id) {
  return async function (dispatch) {
    return axios(
      `/api/back-end/search/track?query=${toFind}&limit=300`
    )
      .then((response) => {
        const arr= response.data.data.filter(e=>{
          return e.artist.idArtist===parseInt(id)
        });
        dispatch({
          type: GET_ARTIST_SONG_SEARCH,          
          payload: arr
        });
      });
  };
};

export function getArtistData(id) {
  return async (dispatch) => {
    return axios
      .get(`/api/back-end/artists?artist=${id}`)
      .then((artist) => {
        dispatch({
          type: GET_ARTIST_DATA,
          payload: artist.data,
        });
      });
  };
};

export function getArtistAlbum(id) {
  return async (dispatch) => {
    return axios
      .get(
        `/api/back-end/artists/artistalbums?artist=${id}`
      )
      .then((artist) => {
        dispatch({
          type: GET_ARTIST_ALBUM,
          payload: artist.data,
        });
      });
  };
};

export function getArtistSongs(id, filter, index) {
  return async (dispatch) => {
    return axios
      .get(
        `/api/back-end/artists/artistsongs?artist=${id}&index=${index}`
      )
      .then((artist) => {
        dispatch({
          type: GET_ARTIST_SONGS,
          payload: {
            response: artist.data,
            index: index,
          }
        });
      });
  };
};

export function getArtistTop(id) {
  return async (dispatch) => {
    return axios
      .get(
        `/api/back-end/artists/artistsongstop?artist=${id}`
      )
      .then((artist) => {
        dispatch({
          type: GET_ARTIST_TOP,
          payload: artist.data,
        });
      });
  };
};

export function getResReviews(apiId, type) {
  return async (dispatch) => {
    return axios
      .get(
        `/api/back-end/reviews/resource?id=${apiId}&type=${type}`
      )
      .then((reviews) => {
        dispatch({
          type: GET_RES_REVIEWS,
          payload: reviews.data,
        });
      });
  };
};

export function createGenreDb() {
  return async (dispatch) => {
    return axios
      .get(`/api/back-end/genres/create`)
      .then((genreDB) => {
        dispatch({
          type: CREATE_DB_GENRES,
          payload: genreDB.data,
        });
      });
  };
};

export function createAlbum() {
  return async (dispatch) => {
    return axios
      .get(`/api/back-end/albums/create`)
      .then((albumDB) => {
        dispatch({
          type: CREATE_DB_ALBUMS,
          payload: albumDB.data,
        });
      });
  };
};

export function getAlbumsDb() {
  return async (dispatch) => {
    return axios
      .get(`/api/back-end/albums/getall`)
      .then((albumDB) => {
        dispatch({
          type: GET_DB_ALBUMS,
          payload: albumDB.data,
        });
      });
  };
};

export function getGenreAlbum(genre) {
  return async (dispatch) => {
    return axios
      .get(`/api/back-end/albums/getgenres/`+ genre)
      .then((genreAlbumDB) => {
        dispatch({
          type: GET_GENRE_ALBUM,
          payload: genreAlbumDB.data,
        });
      });
   };
};

export function getAlbumData(id) {
  return async (dispatch) => {
    return axios
      .get(`/api/back-end/albums?album=${id}`)
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
      .get(`/api/back-end/albums/albumsongs?album=${id}`)
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
    axios.get("/api/back-end/reviews").then((reviews) => {
      dispatch({
        type: GET_ALL_REVIEWS,
        payload: reviews.data,
      });
    });
  };
};


export function getRandomSongs() {
  return async (dispatch) => {
    axios
      .get("/api/back-end/songs/random")
      .then((randomSongs) => {
        dispatch({
          type: GET_RANDOM_SONGS,
          payload: randomSongs.data,
        });
      });
  };
};

export function getSongData(songId) {
  return async (dispatch) => {
    axios
      .get(`/api/back-end/songs?id=${songId}`)
      .then((songData) => {
        dispatch({
          type: GET_SONG_DATA,
          payload: songData.data,
        });
      });
  };
};

export function getAllUsers(){
  return async (dispatch) => {
    axios
      .get("/api/back-end/user")
      .then((allUsers) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: allUsers.data,
        });
      });
  };
}

export function getRandomFeed() {
  return async (dispatch) => {
    axios
      .get("/api/back-end/songs/random")
      .then((randomSongs) => {
        dispatch({
          type: GET_RANDOM_FEED,
          payload: randomSongs.data,
        });
      });
  };
}

export function getOtherUser(id) {
  return async(dispatch) => {
    axios.get(`/api/back-end/user/${id}`)
    .then((user) => {
      dispatch({
        type: GET_OTHER_USER_DATA,
        payload: user.data
      })
    })
  }
}

export function getMyReviews() {
  return async (dispatch) => {
    axios.get("/api/back-end/reviews").then((reviews) => {
      dispatch({
        type: GET_ALL_REVIEWS,
        payload: reviews.data,
      });
    });
  };
};