import {
  GET_USER_DATA,
  GET_GENRE,
  GET_GENRES,
  GET_SEARCH,
  CLEAN_GENRE,
  GET_ARTIST_DATA,
  GET_ARTIST_ALBUM,
  GET_ARTIST_SONGS,
  GET_ARTIST_TOP,
  GET_RES_REVIEWS,
  GET_ALBUM_DATA,
  GET_ALBUM_SONGS,
  GET_ALL_REVIEWS,
  GET_RANDOM_SONGS,
  GET_DB_ALBUMS,
  GET_SONG_DATA,
  GET_ALL_USERS
} from "../constants";

const initialState = {
  userData: [],
  searchResult: [],
  pagination: {},
  query: "",
  filter: "",
  index: 0,
  genres: [],
  genre: {},
  artistData: {},
  artistTop: [],
  artistAlbums: [],
  artistSongs: [],
  albumDb: [],
  resReviews: [],
  resReviews: {},
  albumData: {},
  albumSongs: [],
  allReviews: [],
  randomSongs: [],
  songData: {},
  users:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: [...action.payload],
      };
    case GET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case CLEAN_GENRE:
      return {
        ...state,
        genre: {},
      };
    case GET_SEARCH:
      let response = action.payload.response;
      let valueIndex;
      if (action.payload.index === undefined) {
        valueIndex = 0;
      } else {
        valueIndex = action.payload.index;
      }
      return {
        ...state,
        searchResult: response.data,
        pagination: {
          total: response.total,
          prev: response.prev,
          next: response.next,
          limit: response.limit,
        },
        query: action.payload.query,
        filter: action.payload.filter,
        index: valueIndex,
      };
    case GET_ARTIST_DATA:
      return {
        ...state,
        artistData: action.payload,
      };
    case GET_ARTIST_TOP:
      return {
        ...state,
        artistTop: action.payload,
      };
    case GET_ARTIST_ALBUM:
      return {
        ...state,
        artistAlbums: action.payload,
      };
    case GET_ARTIST_SONGS:
      return {
        ...state,
        artistSongs: action.payload,
      };
    case GET_RES_REVIEWS:
      return {
        ...state,
        resReviews: action.payload,
      };
    case GET_DB_ALBUMS:
        return {
          ...state,
          albumDb: action.payload,
        };
    case GET_ALBUM_DATA:
      return {
        ...state,
        albumData: action.payload,
      };
    case GET_ALBUM_SONGS:
      return {
        ...state,
        albumSongs: action.payload,
      };
    case GET_ALL_REVIEWS:
      return {
        ...state,
        allReviews: action.payload,
      };
    case GET_RANDOM_SONGS:
      return {
        ...state,
        randomSongs: action.payload,
      };
    case GET_SONG_DATA:
      return {
        ...state,
        songData: action.payload,
      };
    case GET_ALL_USERS:
      return{
      ...state,
      users:action.payload
    }
    default:
      return state;
  };
};
export default rootReducer;
