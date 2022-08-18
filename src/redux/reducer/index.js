import {
  GET_USER_DATA,
  GET_GENRE,
  GET_GENRES,
  GET_SEARCH,
  GET_ARTIST_SONG_SEARCH,
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
  GET_TOP_SONGS,
  GET_RANDOM_ARTISTS,
  GET_TOP_ARTISTS,
  GET_DB_ALBUMS,
  GET_SONG_DATA,
  GET_ALL_USERS,
  ON_PAGE_CHANGED,
  CALC_PAGES,
  CREATE_DB_GENRES,
  GET_GENRE_ALBUM,
  GET_RANDOM_FEED,
  GET_OTHER_USER_DATA,
  GET_USER_SEARCH
} from "../constants";

const initialState = {
  userData: [],
  searchResult: [],
  searchResultFilter:[],
  selected:false,
  currentResult:[],
  currentPage:1,
  totalPages:0,
  pagination: {},
  query: "",
  filter: "",
  index: 0,
  genres: [],
  genre: {},
  genreAlbum:[],
  artistData: {},
  artistTop: [],
  artistAlbums: [],
  artistSongs: [],
  artistSongsSearch:[],
  albumDb: [],
  resReviews: {},
  albumData: {},
  albumSongs: [],
  allReviews: [],
  randomSongs: [],
  randomArtists: [],
  topSongs: [],
  topArtists: [],
  randomFeed:[],
  songData: {},
  users:[],
  genresDb: [],
  otherUser: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CALC_PAGES:
      let limit = action.payload;
      return{
        ...state,
        totalPages: (Math.floor(state.searchResultFilter.length /limit))+1        
      } 
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
    case ON_PAGE_CHANGED:
      const { searchResultFilter } = state;      
      const { currentPage, pageLimit } = action.payload;
      const offset = currentPage===1 ? (currentPage - 1) * pageLimit: ((currentPage - 1) * pageLimit)-1;
      const currentResult = searchResultFilter.slice(offset, offset + pageLimit);      
      return {
        ...state,
        currentResult: currentResult,
        currentPage: currentPage,         
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
        searchResultFilter: response.data,
        pagination: {
          total: response.total,
          prev: response.prev,
          next: response.next,
          limit: response.limit,
        },
        query: action.payload.query,
        filter: action.payload.filter,
        index: valueIndex,
        selected:action.payload.selected
      };
    case GET_USER_SEARCH:
      return {
        ...state,
        searchResult: action.payload,
        pagination: {},
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
      let valueIndex2;
      if (action.payload.index === undefined) {
        valueIndex2 = 0;
      } else {
        valueIndex2 = action.payload.index;
      }
      return {
        ...state,
        artistSongs: action.payload.response.data,
        pagination: {
          total: action.payload.response.total,
          prev: action.payload.response.prev,
          next: action.payload.response.next,
          limit: action.payload.response.limit,
        },
        index: valueIndex2,
      };
      case GET_ARTIST_SONG_SEARCH:
          return {  
            ...state,
            artistSongsSearch: action.payload,
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
    case GET_TOP_SONGS:
      return {
        ...state,
        topSongs: action.payload,
      };
    case GET_RANDOM_ARTISTS:
      return {
        ...state,
        randomArtists: action.payload,
      };
    case GET_TOP_ARTISTS:
      return {
        ...state,
        topArtists: action.payload,
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
    case CREATE_DB_GENRES:
      return {
        ...state,
        genresDb: action.payload,
      };
    case GET_GENRE_ALBUM:
      return {
        ...state,
        genreAlbum: action.payload,
      };
      case GET_RANDOM_FEED:
        return {
          ...state,
          randomFeed: action.payload,
        };
    case GET_OTHER_USER_DATA:
      return {
        ...state,
        otherUser: action.payload,
      }
    default:
      return state;
  };
};

export default rootReducer;
